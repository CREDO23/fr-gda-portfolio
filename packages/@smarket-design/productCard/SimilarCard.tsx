import {
  Card,
  CardHeader,
  CardBody,
  Typography
} from "@material-tailwind/react";
import { CiShop } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export default function SimilarCard() {
  return (
    <Card className="w-64">
      <CardHeader shadow={false} floated={false} className="h-52">
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          <Typography className="font-medium text-black">
            Apple AirPods
          </Typography>
          <Typography className="font-medium text-black">
            $95.00
          </Typography>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className=" cursor-pointer hover:underline flex gap-2">
            <CiShop className=" text-[#FF5722]" />
            <p className="text-sm font-ligth">Soes shop</p>
          </div>
          <div className="flex cursor-pointer items-center gap-1">
            <MdOutlineFavoriteBorder className=" text-[#FF5722]" />
            <p className=" text-xs gap-1 flex items-center">
              <span>3.5</span>
              <span>(345)</span>
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
