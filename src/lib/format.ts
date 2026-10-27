import type { Availability, Price } from "@/types/product";

const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function formatPrice(price: Price | null): string {
  if (!price) return "Price on request";
  return inrFormatter.format(price.amount);
}

export function formatCompareAtPrice(price: Price | null): string | null {
  if (!price?.compareAt || price.compareAt <= price.amount) return null;
  return inrFormatter.format(price.compareAt);
}

const availabilityLabels: Record<Availability, string> = {
  "in-stock": "In stock",
  "out-of-stock": "Currently out of stock",
  "on-request": "Call to check availability",
};

export function formatAvailability(availability: Availability): string {
  return availabilityLabels[availability];
}
