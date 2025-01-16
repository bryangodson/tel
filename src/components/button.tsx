import Link from "next/link";
interface buttonProps {
  to?: string;
  handleClick?: () => void;
  label: string;
  className?: string;
  rest?: object;
}
function Button({ to, handleClick, label, className, rest }: buttonProps) {
  return (
    <div className={`w-24 cursor-pointer button  ${className || ""}`}>
      {to ? (
        <Link
          href={to}
          className="w-full h-full grid place-items-center border-0"
          {...rest}>
          {label}
        </Link>
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
