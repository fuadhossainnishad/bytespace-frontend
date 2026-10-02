import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <Link className={`button button--${variant} ${className}`.trim()} {...props}>
      {children}
    </Link>
  );
}
