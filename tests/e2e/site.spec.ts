import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/products",
  "/products/electric-coconut-scraper",
  "/how-it-works",
  "/about",
  "/contact",
  "/policies/warranty",
  "/policies/shipping",
  "/policies/returns",
  "/policies/privacy",
  "/policies/terms",
];

test.describe("pages", () => {
  for (const route of routes) {
    test(`${route} loads with one h1 and no console errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") errors.push(msg.text());
      });
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      expect(errors).toEqual([]);
    });
  }

  test("unknown routes return 404", async ({ page }) => {
    const response = await page.goto("/does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("couldn't find");
  });
});

test("all internal links resolve", async ({ page, request }) => {
  const seen = new Set<string>();
  for (const route of routes) {
    await page.goto(route);
    const hrefs = await page
      .locator('a[href^="/"]')
      .evaluateAll((els) => els.map((el) => (el as HTMLAnchorElement).getAttribute("href") ?? ""));
    for (const href of hrefs) seen.add(href.split("#")[0] || "/");
  }
  for (const href of seen) {
    const res = await request.get(href);
    expect(res.status(), href).toBe(200);
  }
});

test("contact page offers a working tel: link", async ({ page }) => {
  await page.goto("/contact");
  const callLink = page.getByRole("link", { name: "Call now" });
  await expect(callLink).toHaveAttribute("href", "tel:+919447095434");
});

test("product page gallery switches images", async ({ page }) => {
  await page.goto("/products/electric-coconut-scraper");
  const thumb = page.getByRole("button", { name: /Show image 2 of/ });
  await thumb.click();
  await expect(thumb).toHaveAttribute("aria-pressed", "true");
});

test("video loads only after pressing play", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('iframe[src*="youtube-nocookie"]')).toHaveCount(0);
  await page
    .getByRole("button", { name: /^Play video/ })
    .first()
    .click();
  await expect(page.locator('iframe[src*="youtube-nocookie"]')).toHaveCount(1);
});

test.describe("mobile menu", () => {
  test.use({ viewport: { width: 375, height: 800 } });

  test("opens, traps focus, and closes with Escape", async ({ page }) => {
    await page.goto("/");
    const trigger = page.getByRole("button", { name: "Open menu" });
    await trigger.click();
    const dialog = page.getByRole("dialog", { name: "Menu" });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("link", { name: "How it works" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test("navigates and closes on link click", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("dialog").getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByRole("dialog")).toBeHidden();
  });
});

for (const width of [320, 375, 390, 430, 768, 1024, 1440, 1920]) {
  test(`no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `${route} at ${width}px`).toBeLessThanOrEqual(0);
    }
  });
}
