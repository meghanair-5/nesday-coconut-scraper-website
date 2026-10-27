import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-obsidian disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-button text-white hover:bg-button-hover",
        secondary:
          "border border-line bg-white text-obsidian hover:border-obsidian/30 hover:bg-sand",
        ghost: "text-obsidian hover:bg-sand",
        inverse: "bg-ivory text-obsidian hover:bg-white focus-visible:outline-ivory",
      },
      size: {
        default: "",
        lg: "min-h-12 px-7 text-base",
        sm: "min-h-10 px-4",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> & ButtonVariantProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ComponentProps<typeof Link> & ButtonVariantProps) {
  return <Link className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

/** For `tel:` and external links, where client-side routing does not apply. */
export function ButtonAnchor({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"a"> & ButtonVariantProps) {
  return <a className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
