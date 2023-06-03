import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, type, ...props }, ref) => {
    return (
      <button
        className={twMerge(
          "w-full text-black font-bold rounded-full bg-green-500 p-3 border border-transparent disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-80 transition",
          className
        )}
        disabled={disabled}
        ref={ref}
        type={type}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
