import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";

export default function Login() {
  return (
    <div className="w-full h-full flex-col gap-10 flex items-center justify-center">
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
            <Input color="deep-orange" size="lg" label="Name" />
            <Input color="deep-orange" size="lg" label="Email" />
            <Input
              color="deep-orange"
              type="password"
              size="lg"
              label="Password"
            />
            <Select label="Register as">
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
          <Button color="deep-orange" className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-deep-orange-400 transition-colors hover:text-deep-orange-400"
            >
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
