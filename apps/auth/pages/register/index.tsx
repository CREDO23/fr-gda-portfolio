import {
  Card,
  Checkbox,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import Button from "@smarket/design/button/mtal";
import Input from "@smarket/design/input/mtal";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";

export default function Register() {
  const [showPassword, setShowPassword] = useState<{ [id: string]: boolean }>({
    password: false,
    confirmPassword: false,
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
    <div className="w-screen h-screen flex-col gap-10 flex items-center justify-center">
      <div>
        <h3 className=" text-3xl font-light max-w-sm text-center ">
          Greetings and welcome to{" "}
          <span className=" font-medium text-deep-orange-400">Smarket</span>{" "}
        </h3>
      </div>

      <Card color="white" className="p-6" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" />
            <Input size="lg" label="Email" />
            <Input
              color="deep-orange"
              type={showPassword.password ? "" : "password"}
              size="lg"
              label="Password"
              icon={<Eye input="password" />}
            />
            <Input
              color="deep-orange"
              type={showPassword.confirmPassword ? "" : "password"}
              size="lg"
              label="Confirm Password"
              icon={<Eye input="confirmPassword" />}
            />
            <Select color="deep-orange" label="Register as">
              <Option>Customer</Option>
              <Option>Seller</Option>
            </Select>
          </div>
          <Checkbox
            color="deep-orange"
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-deep-orange-400"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth>
            REGISTER
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              href="/"
              className="font-medium text-deep-orange-400 transition-colors hover:text-deep-orange-400"
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
