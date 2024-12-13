import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Table from "./Table";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa6";
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
];

const InfluencersTable = () => {
  const [active, setActive] = useState("allTime");
  return (
    <div>
      <div className="flex justify-between  items-center">
        <div className="flex gap-3 items-center">
          <h4 className="font-[500]">Influencers Leaderboard</h4>

          <div
            onClick={() => setActive("allTime")}
            className={`text-sm w-[120px] h-[40px] text-center flex items-center justify-center rounded-[98px] ${
              active === "allTime"
                ? "bg-[#6e62e5] text-white"
                : "bg-medium-purple"
            }`}
          >
            All Time
          </div>

          <div
            onClick={() => setActive("last7Days")}
            className={`text-sm w-[120px] h-[40px] text-center flex items-center justify-center rounded-[98px] ${
              active === "last7Days"
                ? "bg-[#6e62e5] text-white"
                : "bg-medium-purple"
            }`}
          >
            Last 7 days
          </div>

          <div
            onClick={() => setActive("last30Days")}
            className={`text-sm w-[120px] h-[40px] text-center flex items-center justify-center rounded-[98px] ${
              active === "last30Days"
                ? "bg-[#6e62e5] text-white"
                : "bg-medium-purple"
            }`}
          >
            Last 30 days
          </div>

          <div
            onClick={() => setActive("last3Months")}
            className={`text-sm w-[120px] h-[40px] text-center flex items-center justify-center rounded-[98px] ${
              active === "last3Months"
                ? "bg-[#6e62e5] text-white"
                : "bg-medium-purple"
            }`}
          >
            Last 3 months
          </div>
        </div>

        <div className="flex gap-3 items-center">
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
      </div>

      <div
        className="relative overflow-x-auto mt-[20px] mb-[20px]"
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
    </div>
  );
};

export default InfluencersTable;
