import React from "react";
import Link from "next/link";
interface buttonProps {
  variant?: "primary" | "labeled" | "outline";
  to?: string;
  handleClick?: () => void;
  label: string;
  className?: string;
}
function Button({
  variant = "primary",
  to,
  handleClick,
  label,
  className,
}: buttonProps) {
  return (
    <div className={`button ${variant} w-24 cursor-pointer ${className ?? ""}`}>
      {to ? (
        <Link href={to}>{label}</Link>
      ) : (
        <div
          onClick={handleClick}
          className="w-full h-full grid place-items-center">
          {label}
        </div>
      )}
    </div>
  );
}

export default Button;
