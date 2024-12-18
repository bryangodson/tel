import React from "react";
import Link from "next/link";
interface buttonProps {
  variant: "primary" | "labeled" | "outline";
  to?: string;
  handleClick?: () => void;
  label: string;
}
function Button({ variant, to, handleClick, label }: buttonProps) {
  return (
    <div className={`button ${variant}`}>
      {to ? (
        <Link href={to}>{label}</Link>
      ) : (
        <div onClick={handleClick}>{label}</div>
      )}
    </div>
  );
}

export default Button;
