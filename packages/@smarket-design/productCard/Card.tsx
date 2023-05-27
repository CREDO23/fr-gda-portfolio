import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
  Rating,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { useState } from "react";
import { CiShop } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export default function Example() {
  const [rated, setRated] = useState(4);

  return (
    <Card className="w-80">
      <CardHeader shadow={false} floated={false} className="h-60">
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          <Typography className="font-semibold text-black">
            Apple AirPods
          </Typography>
          <Typography variant="h4" className="font-medium">
            $95.00
          </Typography>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </Typography>
          <div className="flex w-full items-center justify-between">
            <div className=" cursor-pointer hover:underline flex gap-2">
              <CiShop className=" text-[#FF5722]" />
              <p className="text-sm font-ligth">Soes shop</p>
            </div>
            <Popover>
              <PopoverHandler>
                <div className="flex cursor-pointer items-center gap-1">
                  <MdOutlineFavoriteBorder className=" text-[#FF5722]" />
                  <p>rated</p>
                </div>
              </PopoverHandler>
              <PopoverContent>
                <Rating value={4} onChange={(value) => setRated(value)} />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
