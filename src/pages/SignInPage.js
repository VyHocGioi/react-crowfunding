import { Input } from "components/input";
import { Label } from "components/label";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "components/button/Button";
import ButtonGoogle from "components/button/ButtonGoogle";
import EyeToggle from "components/icons/EyeToggle";
import FormGroup from "components/common/FormGroup";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import React, { Children } from "react";
import useToggleValue from "hooks/useToggleValue";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("This field is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("This field is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 character")
      .required("This field is required"),
  })
  .required();

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const { value: showPasswords, handleToggleValue: handleShowPassword } =
    useToggleValue();
  const handleSignIn = (values) => {
    console.log(values);
  };
  return (
    <LayoutAuthentication heading="Welcome back">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text-3 lg:mb-8">
        Dont have account ?{" "}
        <Link to="/sign-up" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with Google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSubmit(handleSignIn))}>
        <FormGroup>
          <Label htmlFor="email" className="dark: text-text-3">
            Email
          </Label>
          <Input
            control={control}
            name="email"
            type="email"
            error={errors.email?.message}
            placeholder="example@gmail.com"></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password" className="dark: text-text-3">
            Password
          </Label>
          <Input
            control={control}
            name="password"
            type={`${showPasswords ? "text" : "password"}`}
            error={errors.password?.message}
            placeholder="Create your password">
            <EyeToggle
              open={showPasswords}
              onClick={handleShowPassword}></EyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right">
            <span className="inline-block text-sm font-medium cursor-pointer text-primary">
              Forgot password
            </span>
          </div>
        </FormGroup>
        <Button className="w-full bg-primary" type="submit">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
