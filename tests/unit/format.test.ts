import { describe, expect, it } from "vitest";
import { formatAvailability, formatCompareAtPrice, formatPrice } from "@/lib/format";

describe("formatPrice", () => {
  it("shows price on request when no price is confirmed", () => {
    expect(formatPrice(null)).toBe("Price on request");
  });

  it("formats INR with Indian digit grouping", () => {
    expect(formatPrice({ amount: 125000, currency: "INR" })).toBe("₹1,25,000");
  });
});

describe("formatCompareAtPrice", () => {
  it("only returns a value when the compare-at price is higher", () => {
    expect(formatCompareAtPrice({ amount: 1000, currency: "INR", compareAt: 1200 })).toBe("₹1,200");
    expect(formatCompareAtPrice({ amount: 1000, currency: "INR", compareAt: 900 })).toBeNull();
    expect(formatCompareAtPrice(null)).toBeNull();
  });
});

describe("formatAvailability", () => {
  it("has a label for on-request stock", () => {
    expect(formatAvailability("on-request")).toBe("Call to check availability");
  });
});
