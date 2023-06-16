import { Input } from "@material-tailwind/react";
import { MTInputProps } from "..";

export default function MTInput({
  variant = "outlined",
  size = "md",
  error = false,
  success = false,
  label,
  icon = null,
  className = "",
  color = "deep-orange",
  type,
}: MTInputProps): JSX.Element {
  return (
    <Input
      className={className}
      color={color}
      icon={icon}
      label={label}
      success={success}
      error={error}
      size={size}
      variant={variant}
      type={type}
    />
  );
}
