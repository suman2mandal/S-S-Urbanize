// Button component
"use client";

import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const base =
    "px-6 py-3 rounded-md text-sm font-medium transition";

  const styles = {
    primary: "bg-black text-white hover:bg-neutral-800",
    secondary:
      "border border-neutral-300 hover:bg-neutral-100",
  };

  return (
    <button
      {...props}
      className={cn(base, styles[variant], className)}
    >
      {children}
    </button>
  );
}