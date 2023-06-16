import { ReactNode, Ref } from "react";

type TMTcolor =
  | "white"
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

/**
 * ----------------------------------------------------------------
 * BUTTONS TYPES
 * ----------------------------------------------------------------
 */

interface BtnProps {
  disabled?: boolean;
  block?: boolean;
  danger?: boolean;
  htmlType?: "button" | "submit" | "reset";
  icon?: ReactNode;
  ghost?: boolean;
  shape?: "circle" | "round" | "default";
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  loading?: boolean;
  title: string;
  type?: "primary" | "ghost" | "link" | "dashed" | "text" | "default";
  size?: "large" | "small" | "middle";
}

interface MTButtonProps {
  variant?: "filled" | "outlined" | "gradient" | "text";
  size?: "sm" | "md" | "lg";
  color?: TMTcolor;
  fullWidth?: boolean;
  ripple?: boolean;
  className?: string;
  children: ReactNode;
}

/**
 * ----------------------------------------------------------------
 * INPUTS TYPES
 * ----------------------------------------------------------------
 */

interface InputProps {
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (e: any) => void;
  onPressEnter?: (e: any) => void;
  addonAfter?: ReactNode;
  addonBefore?: ReactNode;
  allowClear?: boolean | { clearIcon?: ReactNode };
  defaultValue?: string;
  disabled?: boolean;
  maxLength?: number;
  showCount?: boolean;
  status?: "error" | "warning";
  prefix?: ReactNode;
  suffix?: ReactNode;
  size?: "large" | "middle" | "small";
  type?: "search" | "password" | "text" | "textarea";
  autoSize?: boolean | { minRows: number; maxRows: number };
  onSearch?: (value: any, e: any) => void;
  loading?: boolean;
  showLabel?: boolean;
  error?: string;
  labelColor?: "primary" | "secondary";
  required?: boolean;
  inputMode?:
    | "email"
    | "tel"
    | "text"
    | "search"
    | "none"
    | "url"
    | "numeric"
    | "decimal"
    | undefined;
}

interface MTInputProps {
  variant?: "standard" | "outlined" | "static";
  size?: "md" | "lg";
  color?: TMTcolor;
  label: string;
  error?: boolean;
  success?: boolean;
  icon?: ReactNode;
  className?: string;
  type?: "password" | "email" | "";
}
