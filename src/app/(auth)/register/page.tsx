import Link from "next/link";
import RegisterForm from "./_components/Form";

export default function Register() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center text-slate-700 font-semibold text-3xl ">
        Register
      </h1>
      <div className="flex flex-col justify-center items-center">
        <RegisterForm />
        <div className="mt-5">
          <p>
            Already have an account?{" "}
            <Link href={"/login"} className="text-blue-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
