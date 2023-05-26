import { Input as Inpt } from "@material-tailwind/react";
import { IInputProps } from "..";

export default function Input({
  variant = 'outlined', 
  size = 'md',
  color = 'deep-orange',
  label,
  error = false,
  success = false,
  icon = null,
  labelProps = undefined,
  containerProps = undefined,
  className = '',
  shrink = undefined ,
  inputRef = undefined,
}: IInputProps) {
  return (
    <Inpt
      variant={variant}
      size={size}
      color={color}
      label={label}
      error={error}
      success={success}
      icon={icon}
      labelProps={labelProps}
      containerProps={containerProps}
      className={className}
      shrink={shrink}
      inputRef={inputRef}
    />
  );
}
import { Input as Inpt } from "@material-tailwind/react";
import { IInputProps } from "..";

export default function Input({
  variant = 'outlined', 
  size = 'md',
  color = 'deep-orange',
  label,
  error = false,
  success = false,
  icon = null,
  labelProps = undefined,
  containerProps = undefined,
  className = '',
  shrink = undefined ,
  inputRef = undefined,
  type
}: IInputProps) {
  return (
    <Inpt
      variant={variant}
      type  = {type}
      size={size}
      color={color}
      label={label}
      error={error}
      success={success}
      icon={icon}
      labelProps={labelProps}
      containerProps={containerProps}
      className={className}
      shrink={shrink}
      inputRef={inputRef}
    />
  );
}
