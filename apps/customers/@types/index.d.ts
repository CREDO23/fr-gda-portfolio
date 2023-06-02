declare global {}

interface IChoice {
  key: number;
  label: string;
  items: any;
}

interface IChoicesProps {
  colors?: {
    label: string;
    items: string[];
  } | null;

  sizes?: {
    label: string;
    items: string[];
  } | null;

  others?: IChoice[];
}

interface DiscountData {
  disCase: string;
  price: number;
}

interface IRaterData {
  data: { [id: string]: { value: number; color: string } };
  total: number;
  average: number;
}
