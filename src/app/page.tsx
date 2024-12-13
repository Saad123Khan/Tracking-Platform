"use client";
import CallsTable from "@/components/CallsTable";
import CurrencyPart from "@/components/CurrencyPart";
import InfluencerBox from "@/components/InfluencerBox";
import InfluencersTable from "@/components/InfluencersTable";
import PlatformStats from "@/components/PlatformStats";
import SearchInputs from "@/components/SearchInputs";
import TokenStats from "@/components/TokenStatsTable";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/recent-calls");
  };
  return (
    <div className="mt-3 px-[20px] w-full ">
      
      <CurrencyPart/>

      <div className="flex justify-between gap-[30px] mt-[20px] w-full">
        <div className="bg-[#6e62e5]  py-[10px] w-full h-[100px] rounded-md">
          <div className="flex justify-center items-center gap-5">
            <Image
              src="/images/star.png"
              alt="star img"
              width={72}
              height={72}
            />
            <p className="font-custom-medium text-2xl">
              You can display your ad here
            </p>
            <Image
              src="/images/star.png"
              alt="star img"
              width={72}
              height={72}
            />
          </div>
        </div>

        <div className="px-[20px] bg-[url('/images/bg-img.png')] w-[230px] bg-no-repeat bg-cover rounded-md items-center justify-center flex h-[136px]">
          <div className="flex gap-2 ">
            <p className="text-xs">
              IncomeSharks just made a call for $ETH and has generated over
              <span className="block text-lg font-[700]">$10,000</span>
              in buys
            </p>

            <Image
              src={"/images/satrs-stretch.png"}
              alt="stars"
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-[500]">Top 3 influencers</h4>
        <div className="flex gap-[20px] mt-[20px] w-full justify-between">
          <InfluencerBox />
          <div className="flex flex-col gap-3 ">
            <SearchInputs />
          </div>
        </div>
      </div>

      <div className="mt-[20px]">

      <div className="flex justify-between items-center ">
        <h4 className="font-[500]">Recent Calls</h4>
        <div
          className="text-[#6E62E5] text-sm cursor-pointer"
          onClick={handleNavigate}
        >
          See All
        </div>
      </div>
      <CallsTable  sliceCount={6} height="250px" />
      </div>

      <div className="mt-[20px] mb-[20px]">
       <InfluencersTable/>
      </div>

      <div className="mt-[40px] mb-[20px] flex justify-between">
        <div>
        <TokenStats/>
        </div>
        <div>
          <h4 className="mb-2">Platform Stats</h4>
          <PlatformStats/>
        </div>
      </div>

      
    </div>
  );
};

export default page;
