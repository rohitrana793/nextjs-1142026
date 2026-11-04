import React, { ReactNode } from "react";
import { FaCar } from "react-icons/fa6";
import { MdSupportAgent, MdVerifiedUser } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";

const FeatureItem = ({ icon, label }: { icon: ReactNode; label: string }) => {
  return (
    <div className="bg-black flex py-8 px-6 items-center rounded-xl w-1/5">
      {icon}
      <h4 className="text-xl ml-5 text-white">{label}</h4>
    </div>
  );
};

const Features = () => {
  return (
    <div className="py-20 bg-black/20">
      <div className="container mx-auto ">
        <div className="flex justify-between">
          <FeatureItem
            icon={<FaCar size={48} color="white" />}
            label="Fast Delivery"
          />
          <FeatureItem
            icon={<MdVerifiedUser size={48} color="white" />}
            label="Verified Products"
          />
          <FeatureItem
            icon={<TbTruckReturn size={48} color="white" />}
            label="Easy Return"
          />
          <FeatureItem
            icon={<MdSupportAgent size={48} color="white" />}
            label="Customer Support"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
