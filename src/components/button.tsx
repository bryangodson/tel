import Link from "next/link";

/**
 * Defines the props for the Button component.
 * @interface buttonProps
 * @property {string} [to] - The URL to navigate to when the button is clicked.
 * @property {() => void} [handleClick] - The function to call when the button is clicked.
 * @property {string} label - The text to display on the button.
 * @property {string} [className] - Additional CSS classes to apply to the button.
 * @property {object} [rest] - Any additional props to pass to the button.
 */
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
