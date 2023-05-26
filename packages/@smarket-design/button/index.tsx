import { Button as Btn } from "@material-tailwind/react/components/Button";
import { IButtonProps } from "..";

export default function Button({
  variant = 'filled',
  size = 'md',
  color = 'deep-orange',
  fullWidth = false,
  ripple = true,
  className,
  children,
  onClick,
} : IButtonProps) {
  return (
    <Btn
      size={size}
      onClick={onClick}
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      ripple={ripple}
      className={className}
    >
      {children}
    </Btn>
  );
}
