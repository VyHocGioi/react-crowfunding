import React, { Children, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "components/input";
import { Label } from "components/label";
import LayoutAuthentication from "layout/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import { Button } from "components/button";
import Checkbox from "components/checkbox/Checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import EyeToggle from "components/icons/EyeToggle";
import useToggleValue from "hooks/useToggleValue";
import ButtonGoogle from "components/button/ButtonGoogle";
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
const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const handleSignUp = (values) => {
    console.log("submit !");
  };

  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  const { value: showPasswords, handleToggleValue: handleShowPassword } =
    useToggleValue();
  console.log(
    "🚀 ~ file: SignUpPage.js ~ line 28 ~ SignUpPage ~ errors",
    errors
  );

  return (
    <>
      <LayoutAuthentication heading="Sign up">
        <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text-3 lg:mb-8">
          Already have an account?{" "}
          <Link to="/sign-in" className="font-medium underline text-primary">
            Sign in
          </Link>{" "}
        </p>
        <ButtonGoogle text="Sign up with Google"></ButtonGoogle>
        <p className="mb-4 text-xs text-center cursor-pointer lg:text-sm lg:mb-8 dark:text-white">
          Or sign up with email
        </p>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <FormGroup>
            <Label htmlFor="name" className="dark: text-text-3">
              Full name
            </Label>
            <Input
              control={control}
              name="name"
              error={errors.name?.message}
              placeholder="Enter your name"></Input>
          </FormGroup>
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
          <div className="flex items-start mb-5 gap-x-5">
            <Checkbox
              name="term"
              checked={acceptTerm}
              onclick={handleToggleTerm}>
              <p className="flex-1 text-sm font-normal select-none text-text-2">
                I agree to the{" "}
                <span className="underline cursor-pointer text-secondary">
                  Terms of Use
                </span>{" "}
                and have read and understand the{" "}
                <span className="underline cursor-pointer text-secondary">
                  Privacy policy
                </span>
                .
              </p>
            </Checkbox>
            {/* <span className="inline-block w-5 h-5 border rounded border-text-4"></span> */}
          </div>
          <Button className="w-full bg-primary" type="submit">
            Create my account
          </Button>
        </form>
      </LayoutAuthentication>
    </>
  );
};

export default SignUpPage;
