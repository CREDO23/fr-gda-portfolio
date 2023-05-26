import { ReactNode, Ref } from "react";

type Tcolor = | "white"
| "blue-gray"
| "gray"
| "brown"
| "deep-orange"
| "orange"
| "amber"
| "yellow"
| "lime"
| "light-green"
| "green"
| "teal"
| "cyan"
| "light-blue"
| "blue"
| "indigo"
| "deep-purple"
| "purple"
| "pink"
| "red";

export interface IButtonProps {
  variant?: "filled" | "outlined" | "gradient" | "text";
  size?: "sm" | "md" | "lg";
  color?: Tcolor;
  fullWidth?: boolean;
  ripple?: boolean;
  className?: className;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}


export interface IInputProps {
  variant ?: "standard" | "outlined" | "static"
  size ?: "md" | "lg"
  color ?: Tcolor
  label ?: string
  error ?: boolean
  success ?: boolean
  icon ?: ReactNode
  labelProps ?: object
  containerProps ?: object
  className?: className;
  shrink ?: boolean
  inputRef ?: Ref
  type? : HTMLInputTypeAttribute | undefined;
}
