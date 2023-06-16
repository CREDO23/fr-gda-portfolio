import { Button } from "@material-tailwind/react";
import { MTButtonProps } from "..";

export default function MTButton({
  children,
  variant = "filled",
  color = "deep-orange",
  ripple = false,
  size = "md",
  className = "",
  fullWidth = false,
}: MTButtonProps): JSX.Element {
  return (
    <Button
      ripple={ripple}
      size={size}
      fullWidth={fullWidth}
      color={color}
      variant={variant}
      className={className}
    >
      {children}
    </Button>
  );
}
