declare global {}

interface IhamburgerProps {
  setHamburger?: Dispatch<SetStateAction<boolean>>;
  hamburger: boolean;
}

interface IChoice {
  key: number;
  label: string;
  items: any;
}

interface IShipCost {
  shipCostCase: string;
  price: string;
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

interface IDiscountData {
  disCase: string;
  price: number;
}

interface IRaterData {
  data: { [id: string]: { value: number; color: string } };
  total: number;
  average: number;
}

type TPaymentMethodImgUrl = string;

interface IDescription {
  key?: string;
  value: string;
}

interface IReviewCardProps {
  avatarUrl: string;
  name: string;
  job?: string;
  review: string;
  rate: number;
}

interface IGalleryProps {
  productUrl: string;
  gallery: string[];
  rateData: IRaterData;
}

interface IPurchaseInfoProps {
  shipCosts: IShipCost[];
  paymentMethods: TPaymentMethodImgUrl[];
  discountData: IDiscountData[];
  othersInfo: {
    deliveryTime: string;
    deliveryZone: string | string[];
    refunds: "Eligible" | "Not Eligible";
    availability: boolean;
    minOrder: number;
  };
}

interface IDescription {
  key?: string;
  value: string;
}

interface IDescriptionProps {
  descriptions: IDescription[];
}

interface IReviewsProps {
  reviews: IReviewCardProps[];
}
