"use client";

import Image from "next/image";
import { useState } from "react";
import client from "../../public/images/clientProfile.png";
import modalCancel from "../../public/images/modalCancel.png";
import modalFrame from "../../public/images/modalFrame.png";
import stats1 from "../../public/images/stats1.png";
import Rectangle from "../../public/images/Rectangle.png";
import average from "../../public/images/average.png";
import BagImg from "../../public/images/lock-img.png";
import dollarImg from "../../public/images/dollar-img.png";
import achieve from "../../public/images/achieve.png";

interface StatsModalProps {
  setIsOpen: (value: boolean) => void;
}

export default function StatsMoodal({ setIsOpen }: StatsModalProps) {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };
  return (
    <div onClick={handleOverlayClick} className="flex flex-col justify-center items-center fixed top-[0px] left-[0px] w-full h-full  z-[999] bg-[rgba(0,0,0,0.5)]">
      {/* <div className="absolute inset-0 z-100 flex items-center justify-center bg-black bg-opacity-50"> */}
      <div className=" rounded-lg  w-[90%] max-w-[600px] h-[400px] overflow-y-auto  overflow-x-hidden  
          bg-[#060c22] border-[1px] border-[#48429d] p-4 relative">

        <div className="absolute right-[1px] top-[0px] z-[100] cursor-pointer">
          <Image
            src={modalCancel}
            alt="cancel"
            height={25}
            width={25}

            onClick={() => setIsOpen(false)}
          />

        </div>

        <div className="flex gap-2 sm:flex-row xs:flex-col sx:flex-row ">
          <div className="bg-[#111736] rounded border-[1px] border-[#48429d] flex flex-col xs:w-full sx:w-fit p-3 justify-center items-center">
            <Image src={client} alt="" height={70} width={70} />
            <p className="text-[15px] text-white">@IncomeSharks</p>
            <p className="text-[10px] text-white">@IncomeSharks</p>
          </div>

          <div className="bg-[#111736] rounded border-[1px] border-[#48429d] flex sx:w-full xs:w-full px-3 justify-between items-center gap-3 py-2 lg:flex">
            <div>
              <Image height={120} width={120} alt="" src={modalFrame} />
            </div>

            <div className="md:flex lg:flex-row sx:flex-row lg:flex sm:flex gap-3">
              <div>
                <p className="text-[11px] text-[#9c9ca2] mb-2">
                  Total earning
                </p>
                <p className="text-[20px] font-semibold text-white">
                  $13,690
                  <span className="text-[#08965f] text-[11px] ms-3">
                    36%
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <div className="bg-[#ffc904] h-[9px] w-[9px] rounded-[50%]"></div>
                  <p className="text-[11px] text-[#9c9ca2]">Income</p>
                </div>

                <div className="flex items-center gap-1">
                  <div className="bg-[#00f85f] h-[9px] w-[9px] rounded-[50%]"></div>
                  <p className="text-[11px] text-[#9c9ca2]">Investment</p>
                </div>

                <div className="flex items-center gap-1">
                  <div className="bg-[#8113f6] h-[9px] w-[9px] rounded-[50%]"></div>
                  <p className="text-[11px] text-[#9c9ca2]">Income</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex my-3 gap-2">
          <div className="bg-[#111736] xs:w-full  rounded border-[1px] border-[#48429d] sx:flex sx:flex-row p-3 justify-start items-center gap-3 xs:flex xs:flex-col xs:justify-center xs:items-center">
            <div>
              <Image src={stats1} alt="" height={45} width={45} />
            </div>
            <div className="text-center">
              <p className="text-[18px] text-white text-semibold xs:text-center sx:text-start">
                250K
              </p>
              <p className="text-[#9c9ca2] text-[11px]">Followers</p>
            </div>
          </div>

          <div className="bg-[#111736] xs:w-full  rounded border-[1px] border-[#48429d]  p-3 justify-start items-center gap-3 sx:flex sx:flex-row xs:flex xs:flex-col xs:justify-center xs:items-center">
            <div>
              <Image src={average} alt="" height={45} width={45} />
            </div>
            <div className="text-center">
              <p className="text-[18px] text-white text-semibold xs:text-center sx:text-start">
                5.5x
              </p>
              <p className="text-[#9c9ca2] text-[11px]">Average Xs</p>
            </div>
          </div>

          <div className="bg-[#111736] xs:w-full rounded border-[1px] border-[#48429d] sx:flex sx:flex-row p-3 justify-start items-center gap-2 xs:flex xs:flex-col xs:justify-center xs:items-center">
            <div>
              <Image src={Rectangle} alt="" height={45} width={45} />
            </div>
            <div className="text-center">
              <p className="text-[18px] text-white text-semibold xs:text-center sx:text-start">
                79
              </p>
              <p className="text-[#9c9ca2] text-[9px]">Numbers of calls</p>
            </div>
          </div>
        </div>

        <div className="xs:flex xs:flex-col sx:flex sx:flex-row sx:justify-between gap-2">
          <div className="bg-[#111736] flex-col w-full rounded border-[1px] border-[#48429d] flex p-3 items-start gap-2 ">
            <div>
              <Image src={BagImg} alt="" height={45} width={45} />
            </div>
            <div>
              <p className="text-[20px] text-white text-semibold">
                $25,000
              </p>
              <p className="text-[#9c9ca2] text-[10px]">
                Average buy volume per call{" "}
              </p>
            </div>
          </div>

          <div className="bg-[#111736] flex-col w-full rounded border-[1px] border-[#48429d] flex p-3 items-start gap-2">
            <div>
              <Image src={dollarImg} alt="" height={45} width={45} />
            </div>
            <div>
              <p className="text-[20px] text-white text-semibold">
                $38,000
              </p>
              <p className="text-[#9c9ca2] text-[11px]">
                Highest buy volume
              </p>
            </div>
          </div>

          <div className="bg-[#111736] flex-col w-full rounded border-[1px] border-[#48429d] flex p-3 items-start gap-2">
            <div>
              <Image src={achieve} alt="" height={45} width={45} />
            </div>
            <div>
              <p className="text-[20px] text-white text-semibold">30X</p>
              <p className="text-[#9c9ca2] text-[11px]">Best Call</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
}
