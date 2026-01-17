import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-emerald-100/70 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 transition",
  {
    variants: {
      variant: {
        default: "bg-emerald-50 text-emerald-700",
        outline: "border-emerald-200 text-emerald-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
