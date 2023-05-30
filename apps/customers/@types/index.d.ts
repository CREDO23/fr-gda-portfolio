declare global {}

interface IChoicesProps {
  colors?: {
    label: "Colors";
    default: string;
    items: string[];
  };

  size?: {
    label: "Size";
    default: string;
    items: string[];
  };

  others?: {
    label: string;
    default: string;
    items: any;
  }[];
}
