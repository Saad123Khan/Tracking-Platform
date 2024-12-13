"use client"
import FavouriteInfluencersTable from "@/components/FavouriteInfluencersTable";
import SearchInputs from "@/components/SearchInputs";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [isOn, setIsOn] = useState(true); 

  
  const handleToggle = () => {
    setIsOn((prevState) => !prevState); 
  };
  return (
    <div className="mt-5 px-[20px]">
      <div className="flex justify-between gap-[20px]">
        <div
          className=" h-[400px] gap-2 rounded-md bg-medium-purple p-4 px-[30px] 
         flex flex-col items-center justify-center border border-[#6959d1]"
        >
          <div className="flex flex-col ">
            <div className="bg-[#20225d] p-[5px] rounded-[100px] mb-[20px]">
              <div className="flex gap-[5px] items-center justify-center">
                <Image
                  src={"/images/verified-blue.png"}
                  alt="profile-img"
                  width={17}
                  height={17}
                />

                Premium
              </div>
            </div>

            <div>
              <Image
                className="w-[137px] h-[137px]"
                src={"/images/profileBig.png"}
                alt="profile-img"
                width={137}
                height={137}
              />
            </div>
          </div>

          <div>
            <h6 className="text-center">Solemn Captain</h6>
            <p className="text-center text-[#91939b]">Admin</p>

            <div className="rounded-md bg-[#292a63] text-[#6e62e5] p-1 justify-center flex mt-3">
              Upgrade
            </div>

            <div className="flex items-center gap-[10px] mt-[20px]">
              <p>Ads</p>
              <div className={`bg-[#6e62e5] h-[32px] w-[80px] px-[10px]  rounded-[100px] flex ${isOn && 'flex-row-reverse'} items-center gap-1 justify-between`}>
                  <div onClick={handleToggle} className="w-[30px] h-[20px] rounded-[100px] bg-white"></div>
                  <p>{isOn ? "ON" : "OFF"}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h4>Favourite Influencers</h4>
            <div className="flex gap-3">
              <SearchInputs />
            </div>
          </div>

          <FavouriteInfluencersTable />
        </div>
      </div>
    </div>
  );
};

export default page;
