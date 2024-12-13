import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import InfluencerBox from "./InfluencerBox";
const tableHeaders: string[] = [
  "S/N",
  "Ticker",
  "Highest volume",
  "Top 3 Influencers",
  "Number of mentions",
];
const tableData: { [key: string]: string }[] = [
  {
    id: "1",
    image_url: "/images/profile-table.png",
    Ticker: "$TRAC",
    highVolume: "$81,000",
    Influencer1: "@IncomeSharks",
    Influencer2: "@AltcoinSensei",
    Influencer3: "@GemsOfRa",
    noOfMent: "250  ",
  },
  {
    id: "2",
    image_url: "/images/profile-table.png",
    Ticker: "$TRAC",
    highVolume: "$44,000",
    Influencer1: "@nevershill",
    Influencer2: "@AdamHODL",
    Influencer3: "@Berniefrogger",
    noOfMent: "120",
  },
  {
    id: "3",
    image_url: "/images/profile-table.png",
    Ticker: "$TRAC",
    highVolume: "$81,000",
    Influencer1: "@IncomeSharks",
    Influencer2: "@AltcoinSensei",
    Influencer3: "@GemsOfRa",
    noOfMent: "250  ",
  },
  {
    id: "4",
    image_url: "/images/profile-table.png",
    Ticker: "$TRAC",
    highVolume: "$44,000",
    Influencer1: "@nevershill",
    Influencer2: "@AdamHODL",
    Influencer3: "@Berniefrogger",
    noOfMent: "120",
  },
];

const TokenStats = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h4 className="font-[500]">Token stats panel</h4>

        <div className="flex gap-3 items-center">
          <div>
            <select
              name=""
              id=""
              className="bg-[#1d214d] outline-none rounded-md w-[140px] h-[40px] px-[10px] text-xs border border-[#383838]"
            >
              <option value="Criteria">Criteria</option>
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
        style={{ height: "230px", overflowY: "auto" }}
      >
        <table
          className="w-full text-sm text-left text-white border-separate"
          style={{ borderSpacing: "0 3px" }}
        >
          <thead className="text-sm bg-medium-purple font-[400] rounded-lg">
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index} className="px-6 py-6 text-center text-sm font-[600]">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-medium-purple">
                <td className="px-6 py-3 text-center text-xs">{row.id}</td>

                <td className="px-6 py-5 whitespace-nowrap text-xs flex items-center text-center">
                    <Image src={row.image_url} alt={"image"} width={35} height={35} className="w-8 h-8 rounded-full mr-2" />
                    {row.Ticker}
                </td>
                <td className="px-6 py-3 text-center text-xs">
                  {row.highVolume}
                  {row.influencer}
                </td>
                <td className="px-6 py-3 text-center text-xs">
                  {row.Influencer1}
                  <br />
                  {row.Influencer2}
                  <br />
                  {row.Influencer3}
                </td>
                <td className="px-6 py-3 text-center text-xs">{row.noOfMent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TokenStats;
