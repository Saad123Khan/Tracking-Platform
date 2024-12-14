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

      <CurrencyPart />

      <div className="flex justify-between gap-[30px] mt-[20px] w-full">
        <div className="bg-[#6e62e5]  py-[10px] w-full h-[100px] rounded-md">
          <div className="flex justify-center items-center gap-5 px-2">
            <Image
              src="/images/star.png"
              alt="star img"
              width={72}
              height={72}
            />
            <p className="font-custom-medium sm:text-xl xs:text-xs">
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

        <div className="px-[20px] bg-[url('/images/bg-img.png')] w-[230px] xs:hidden sm:block bg-no-repeat bg-cover rounded-md items-center justify-center flex h-[136px]">
          <div className="flex gap-2 items-center justify-center">
            <p className="text-[10px] mt-3">
              IncomeSharks just made a call for $ETH and has generated over
              <span className="block text-lg font-[700]">$10,000</span>
              in buys
            </p>

            <Image
              src={"/images/satrs-stretch.png"}
              alt="stars"
              width={40}
              height={10}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mt-4">
          <h4 className="font-[500]">Top 3 influencers</h4>
          <Image className="cursor-pointer sx:hidden " onClick={() => router.push("/influencer-individual-stats")} src={"/images/arrow.png"} alt="arrow" width={30} height={30} />
        </div>
        <div className="md:flex  gap-[20px] mt-[20px] w-full  justify-between">
          <InfluencerBox />
          <div className="flex flex-col gap-3 xs:mt-2 md:mt-0 ">
            <SearchInputs />
          </div>
        </div>
      </div>

      <div className="mt-[20px]">

        <div className="flex justify-between items-center ">
          <h4 className="font-[500]">Recent Calls</h4>
          <div
            className="text-[#6E62E5] xs:hidden sx:block text-sm cursor-pointer"
            onClick={handleNavigate}
          >
            See All 
          </div>

          <Image className="cursor-pointer sx:hidden " onClick={() => router.push("/influencer-individual-stats")} src={"/images/arrow.png"} alt="arrow" width={30} height={30} />

        </div>

        <CallsTable sliceCount={6} height="250px" />
      </div>

      <div className="mt-[20px] mb-[20px]">
        <InfluencersTable />
      </div>

      <div className="px-[20px] bg-[url('/images/bg-img.png')] w-full xs:block sm:hidden bg-no-repeat bg-cover rounded-md items-center justify-center flex h-[136px]">
          <div className="flex gap-2 items-center justify-between">
            <p className="xs:text-xs sx:text-lg mt-3 w-[300px] break-all h-[100px]">
              IncomeSharks just made a call for $ETH and has generated over
              <span className="block text-xl font-[700]">$10,000</span>
              in buys
            </p>

            <Image
              src={"/images/satrs-stretch.png"}
              alt="stars"
              width={100}
              height={40}
            />
          </div>
        </div>

      <div className="mt-[40px] mb-[20px] flex xs:flex-col xl:flex-row justify-between gap-[30px]">
        <div>
          <TokenStats />
        </div>
        <div>
          <h4 className="mb-[20px]">Platform Stats</h4>
          <PlatformStats />
        </div>
      </div>


    </div>
  );
};

export default page;
