import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import Button from "@smarket/design/button/mtal";
import Input from "@smarket/design/input/mtal";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Link from "next/link";

export default function Example() {
  const [showPassword, setShowPassword] = useState<{ [id: string]: boolean }>({
    password: false,
  });

  const handleShowPassWord = (input: string) => {
    setShowPassword({
      ...showPassword,
      [input]: !showPassword[input],
    });
  };

  const Eye = ({ input }: { input: string }): JSX.Element => {
    return (
      <>
        {showPassword[input] ? (
          <AiOutlineEyeInvisible
            onClick={() => handleShowPassWord(input)}
            className="cursor-pointer"
          />
        ) : (
          <AiOutlineEye
            onClick={() => handleShowPassWord(input)}
            className="cursor-pointer"
          />
        )}
      </>
    );
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card className="w-full max-w-[24rem]">
        <CardHeader
          color="deep-orange"
          floated={false}
          shadow={false}
          className="m-0 py-8 flex gap-4 flex-col rounded-b-none items-center justify-center"
        >
          <div className="rounded-full border border-white/10 bg-white/10 p-3">
            <RiShoppingCart2Fill className="h-8 w-8  text-white" />
          </div>

          <h3 className=" text-xl font-light">SMARKET</h3>
        </CardHeader>
        <CardBody>
          <Typography color="gray" className="mt-1 font-normal">
            Log in your account.
          </Typography>
          <form className="mt-8 mb-2 w-full max-w-screen-lg">
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Username" />
              <Input
                color="deep-orange"
                type={showPassword.password ? "" : "password"}
                size="lg"
                label="Password"
                icon={<Eye input="password" />}
              />
              <Select color="deep-orange" label="Log in as">
                <Option>Customer</Option>
                <Option>Seller</Option>
              </Select>
            </div>

            <Button className="mt-6" fullWidth>
              LOGIN
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don&apos;t have an account ?{" "}
              <Link
                href="/register"
                className="font-medium text-deep-orange-400 transition-colors hover:text-deep-orange-400"
              >
                Sign up
              </Link>
            </Typography>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
