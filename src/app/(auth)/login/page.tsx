import Link from "next/link";
import LoginForm from "./_components/Form";

export default function Login() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center text-slate-700 font-semibold text-3xl ">
        login
      </h1>
      <div className="flex flex-col justify-center items-center">
        <LoginForm />
        <div className="mt-5">
          <p>
            Don't have an account?{" "}
            <Link href={"/register"} className="text-blue-700">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
