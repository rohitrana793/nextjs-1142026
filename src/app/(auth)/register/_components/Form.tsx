"use client";

import { registerUser } from "@/api/auth";
import { RegisterFormInput } from "@/types/auth";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>();

  const [error, setError] = useState<string>();
  const router = useRouter();

  const onSubmit = async (data: RegisterFormInput) => {
    try {
      await registerUser(data);
      router.push("/login");
    } catch (error) {
      const resError = error as unknown as AxiosError;
      setError(resError?.response?.data as string);
    }
  };

  return (
    <form className="w-1/2 mt-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <input
          type="text"
          {...register("name", {
            required: {
              value: true,
              message: "Name is required",
            },
          })}
          placeholder="Name"
          className="
            w-full
            rounded
            py-3
            px-[14px]
            text-body-color
            text-base
            border
            border-[f0f0f0]
            outline-none
            focus-visible:shadow-none
            focus:border-primary
          "
        />

        <p className="text-red-500 mt-2 ml-2">{errors.name?.message}</p>
      </div>
      <div className="mb-6">
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
          placeholder="Your Email"
          className="
            w-full
            rounded
            py-3
            px-[14px]
            text-body-color
            text-base
            border
            border-[f0f0f0]
            outline-none
            focus-visible:shadow-none
            focus:border-primary
          "
        />

        <p className="text-red-500 mt-2 ml-2">{errors.email?.message}</p>
      </div>
      <div className="mb-6">
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
          placeholder="Password"
          className="
            w-full
            rounded
            py-3
            px-[14px]
            text-body-color
            text-base
            border
            border-[f0f0f0]
            outline-none
            focus-visible:shadow-none
            focus:border-primary
          "
        />

        <p className="text-red-500 mt-2 ml-2">{errors.password?.message}</p>
      </div>
      <div className="mb-6">
        <input
          type="password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirm password is required",
            },
            validate: (value, formValues) =>
              value === formValues.password || "Passwords do not match",
          })}
          placeholder="Confirm Password"
          className="
      w-full
      rounded
      py-3
      px-[14px]
      text-body-color
      text-base
      border
      border-[f0f0f0]
      outline-none
      focus-visible:shadow-none
      focus:border-primary
    "
        />

        <p className="text-red-500 mt-2 ml-2">
          {errors.confirmPassword?.message}
        </p>
      </div>

      <button
        type="submit"
        className="
            w-full
            bg-primary
            rounded
            border border-primary
            p-3
            transition
            hover:bg-opacity-90
            bg-slate-700
            text-white
            cursor-pointer
          "
      >
        Sign Up
      </button>
      <p className="text-red-500 mt-2 ml-2 text-center">
        {error ? <span>{error}</span> : null}
      </p>
    </form>
  );
};

export default RegisterForm;
