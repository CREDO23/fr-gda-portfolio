declare global {}

interface IChoicesProps {
  colors?: {
    label: string;
    items: string[];
  } | null;

  sizes?: {
    label: string;
    items: string[];
  } | null;

  others?: {
    key: number;
    label: string;
    items: any;
  }[];
}
