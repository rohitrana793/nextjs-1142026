"use client";

import { loginUser } from "@/redux/auth/authActions";
import { AppDispatch, RootState } from "@/redux/store";
import { LoginFormInput } from "@/types/auth";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();

  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth,
  );

  // const { name, ref, onChange, onBlur } = register("email"); is same as {...register("email")}

  const onSubmit = async (data: LoginFormInput) => {
    dispatch(loginUser(data));
  };

  return (
    <form className="w-1/2 mt-10" onSubmit={handleSubmit(onSubmit)}>
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
          // name={name}
          // ref={ref}
          // onChange={onChange}
          // onBlur={onBlur}
          className="
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  "
        />
        <p className="text-red-500 mt-2 ml-2">
          {errors.email && <span>{errors.email.message}</span>}
        </p>
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
                  text-body-color text-base
                  border border-[f0f0f0]
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  "
        />
        <p className="text-red-500 mt-2 ml-2">
          {errors.password && <span>{errors.password.message}</span>}
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
        {loading ? "Submitting...." : "Login"}
      </button>
      {error ? <p className="text-red-500">{error}</p> : null}
    </form>
  );
};

export default LoginForm;
