import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Table from "./Table";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa6";
import { RiArrowDropDownLine, RiMenuAddFill } from "react-icons/ri";
const tableHeaders: string[] = [
  "S/N",
  "Influencer",
  "Average Buy Volume",
  "Highest Buy volume",
  "Average Xs",
  "Highest Xs",
  "Average Follow up Call Volume",
  "Highest Follow up Call Volume",
  "Number of Calls",
];
const tableData: { [key: string]: string }[] = [
  {
    id: "1",
    image_url: "/images/influencer-img1.png",
    influencer: "@IncomeSharks",
    avgVolume: "$65,000",
    highVolume: "$81,000 - $TRAC",
    average_xs: "7.5x",
    highest_xs: "23x - $M87",
    averageFollowUp:"$12,870",
    highestFollowUp:"$33,635 - $APES",
    noOfCalls: "95",
  },

  {
    id: "2",
    image_url: "/images/influencer-img2.png",
    influencer: "@EricCryptoman",
    avgVolume: "$62,000",
    highVolume: "$85,000 - $WLF",
    average_xs: "6x",
    highest_xs: "10.3x - $WLF",
    averageFollowUp:"$6,468",
    highestFollowUp:"$25,742 - $APES",
    noOfCalls: "175",
  },
  {
    id: "3",
    image_url: "/images/influencer-img3.png",
    influencer: "GemsOfRa",
    avgVolume: "$48,000",
    highVolume: "$65,000 - $SECT",
    average_xs: "5.5x",
    highest_xs: "22x - $SECT",
    averageFollowUp:"$17,743",
    highestFollowUp:"$12,945 - $APES",
    noOfCalls: "160",
  },
  {
    id: "4",
    image_url: "/images/influencer-img1.png",
    influencer: "@IncomeSharks",
    avgVolume: "$65,000",
    highVolume: "$81,000 - $TRAC",
    average_xs: "7.5x",
    highest_xs: "23x - $M87",
    averageFollowUp:"$8,826",
    highestFollowUp:"$43,357 - $APES",
    noOfCalls: "95",
  },

  {
    id: "5",
    image_url: "/images/influencer-img2.png",
    influencer: "@EricCryptoman",
    avgVolume: "$62,000",
    highVolume: "$85,000 - $WLF",
    average_xs: "6x",
    highest_xs: "10.3x - $WLF",
    averageFollowUp:"$18,346",
    highestFollowUp:"$12,638 - $APES",
    noOfCalls: "175",
  },
  {
    id: "6",
    image_url: "/images/influencer-img1.png",
    influencer: "@IncomeSharks",
    avgVolume: "$65,000",
    highVolume: "$81,000 - $TRAC",
    average_xs: "7.5x",
    highest_xs: "23x - $M87",
    averageFollowUp:"$12,870",
    highestFollowUp:"$33,635 - $APES",
    noOfCalls: "95",
  },

  {
    id: "7",
    image_url: "/images/influencer-img2.png",
    influencer: "@EricCryptoman",
    avgVolume: "$62,000",
    highVolume: "$85,000 - $WLF",
    average_xs: "6x",
    highest_xs: "10.3x - $WLF",
    averageFollowUp:"$6,468",
    highestFollowUp:"$25,742 - $APES",
    noOfCalls: "175",
  },
  {
    id: "8",
    image_url: "/images/influencer-img3.png",
    influencer: "GemsOfRa",
    avgVolume: "$48,000",
    highVolume: "$65,000 - $SECT",
    average_xs: "5.5x",
    highest_xs: "22x - $SECT",
    averageFollowUp:"$17,743",
    highestFollowUp:"$12,945 - $APES",
    noOfCalls: "160",
  },
  {
    id: "9",
    image_url: "/images/influencer-img1.png",
    influencer: "@IncomeSharks",
    avgVolume: "$65,000",
    highVolume: "$81,000 - $TRAC",
    average_xs: "7.5x",
    highest_xs: "23x - $M87",
    averageFollowUp:"$8,826",
    highestFollowUp:"$43,357 - $APES",
    noOfCalls: "95",
  },

  {
    id: "10",
    image_url: "/images/influencer-img2.png",
    influencer: "@EricCryptoman",
    avgVolume: "$62,000",
    highVolume: "$85,000 - $WLF",
    average_xs: "6x",
    highest_xs: "10.3x - $WLF",
    averageFollowUp:"$18,346",
    highestFollowUp:"$12,638 - $APES",
    noOfCalls: "175",
  },
];

const InfluencersTable = () => {
  const [active, setActive] = useState("allTime");
   const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleOpen = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
  return (
    <div>
      <div className="flex justify-between items-center gap-[20px]">
        <div className="flex gap-3 lg:items-center md:flex-col lg:flex-row">
          <h4 className="font-[500] text-left">Influencers Leaderboard</h4>

          <div className="flex gap-3">
          <div
            onClick={() => setActive("allTime")}
            className={`lg:text-sm sm:text-xs w-full px-[20px]  xs:hidden md:flex h-[50px] text-center flex items-center justify-center rounded-[98px] ${
              active === "allTime"
                ? "bg-[#6e62e5] text-white"
                : "bg-medium-purple"
            }`}
          >
            All Time
          </div>

          <div
            onClick={() => setActive("last7Days")}
            className={`text-sm px-[20px]  xs:hidden md:flex w-full h-[50px] text-center flex items-center justify-center rounded-[98px] ${
              active === "last7Days"
                ? "bg-[#6e62e5] text-white"
                : "bg-medium-purple"
            }`}
          >
            Last 7 days
          </div>

          <div
            onClick={() => setActive("last30Days")}
            className={`px-[20px]  text-sm xs:hidden md:flex w-full h-[50px] text-center flex items-center justify-center rounded-[98px] ${
              active === "last30Days"
                ? "bg-[#6e62e5] text-white"
                : "bg-medium-purple"
            }`}
          >
            Last 30 days
          </div>

          <div
            onClick={() => setActive("last3Months")}
            className={`px-[20px]  text-sm w-full xs:hidden md:flex h-[50px] text-center flex items-center justify-center rounded-[98px] ${
              active === "last3Months"
                ? "bg-[#6e62e5] text-white"
                : "bg-medium-purple"
            }`}
          >
            Last 3 months
          </div>
          </div>
        </div>

        <div className="flex xs:hidden md:flex gap-3 items-center ">
          <div>
            <select
              name=""
              id=""
              className="bg-[#1d214d] outline-none rounded-md w-[172px] h-[40px] px-[10px] text-xs border border-[#383838]"
            >
              <option value="Average Volume">Average Volume</option>
            </select>
          </div>

          <div className="flex items-center gap-1 bg-[#1d214d] rounded-md w-[172px] h-[40px] px-[10px] border border-[#383838]">
            <CiSearch />
            <input
              type="text"
              className=" outline-none border-none bg-transparent w-full"
              placeholder="search..."
            />
          </div>
        </div>

        <div className='md:hidden' >
          
        <RiMenuAddFill color="#6258cf" size={"30px"}/>
        </div>

      </div>

      <div
        className="relative overflow-x-auto mt-[20px] mb-[20px] xs:hidden sm:block"
        style={{ height: "400px", overflowY: "auto" }}
      >
        <table
          className="w-full text-sm text-left text-white border-separate"
          style={{ borderSpacing: "0 3px" }}
        >
          <thead className="text-sm bg-medium-purple font-[400] rounded-lg">
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index} className="px-6 py-6 text-center text-xs font-[600]">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-medium-purple">
                <td className="px-6 py-3 text-center text-xs">{row.id}</td>

                <td className="px-6 py-3 whitespace-nowrap flex gap-1 items-center text-center text-xs">
                  <Image
                    src={row.image_url}
                    alt={row.influencer}
                    width={35}
                    height={35}
                    className="w-8 h-8 rounded-full mr-2"
                  />

                  {row.influencer}

                  <FaRegStar color="#6e62e5" size={"25px"}/>
                </td>
                <td className="px-6 py-3 text-center font-[400] text-xs">{row.avgVolume}</td>
                <td className="px-6 py-3 text-center text-xs">{row.highVolume}</td>
                <td className="px-6 py-3 text-center text-xs">{row.average_xs}</td>
                <td className="px-6 py-3 text-center text-xs">{row.highest_xs}</td>
                <td className="px-6 py-3 text-center text-xs">{row.averageFollowUp}</td>
                <td className="px-6 py-3 text-center text-xs">{row.highestFollowUp}</td>
                <td className="px-6 py-3 text-center text-xs">{row.noOfCalls}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

   {/* --------------------mobile-view-table------------------- */}
      <div className="sm:hidden mt-[20px] ">
            <div className="bg-medium-purple mb-[10px] flex justify-between rounded-md px-[20px] py-[10px]">
                  <h6>S/N</h6>
                  <h6>Influencer</h6>
            </div>
           
            <div className="bg-medium-purple rounded-md text-white px-[2px]">
            {tableData.map((data, index) => (
              <div
                key={index}
              >
                <header className="flex justify-between items-center p-[10px]">
                  <div className="text-sm">
                    {data.id}
                  </div>
                  <div className="text-sm text-[#fff] flex gap-1 items-center text-center ">
                      <Image
                    src={data.image_url}
                    alt={data.influencer}
                    width={35}
                    height={35}
                    className="w-8 h-8 rounded-full mr-2"
                  />

                  {data.influencer}

                  <FaRegStar color="#6e62e5" size={"25px"}/>
                  </div>
                  <RiArrowDropDownLine
                    color="#fff"
                    size={"30px"}
                    onClick={() => toggleOpen(index)}
                    className="cursor-pointer"
                  />
                </header>

                <hr className="border-t-2 border-[#262246]" />
                {openIndex === index && (
                  <div className="space-y-4 p-[10px] text-sm">
                    <div className="flex justify-between ">
                      <div className="text-sm">Average Buy Volume</div>
                      <div className="text-sm break-all"  >{data.avgVolume}</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm">Highest Buy Volume</div>
                      <div>{data.highVolume}</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm">Average Xs</div>
                      <div>{data.average_xs}</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm">Highest Xs</div>
                      <div>{data.highest_xs}</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm">Average Follow Up Call Volume</div>
                      <div>{data.averageFollowUp}</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm">Highest Follow Up Call Volume</div>
                      <div>{data.highestFollowUp}</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm">Number Of Calls</div>
                      <div>{data.noOfCalls}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
      
           </div>
    </div>
  );
};

export default InfluencersTable;
