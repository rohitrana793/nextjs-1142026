"use client";

import { RootState } from "@/redux/rootReducer";
import Image from "next/image";
import { useSelector } from "react-redux";
import iphone from "../assets/images/iphone.png";
import Link from "next/link";

const Hero = () => {
  const { loading, user } = useSelector((state: RootState) => state.auth);
  // console.log("auth", user?.email);
  if (loading) return <div>Loading..</div>;
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        {/* <h1 className="text-3xl text-slate-700 font-semibold text-center">{`Welcome ${user?.name}`}</h1> */}

        <div className="flex items-center justify-evenly py-16">
          <Image src={iphone} alt="iphone" height={400} />
          <div className="w-1/3">
            <span className="ml-3 text-gray-500">Black friday coming soon</span>
            <h1 className="text-7xl font-bold uppercase">Up to 50% off</h1>
            <p className="mt-5 ml-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              perspiciatis optio explicabo at! Ipsam neque quisquam. .
            </p>
            <div className="ml-2 mt-5">
              <Link
                href={"/products"}
                className="py-2 px-5 text-white bg-black uppercase"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
