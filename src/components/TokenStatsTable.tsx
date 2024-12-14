"use client"
import Image from "next/image";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import InfluencerBox from "./InfluencerBox";
import { RiArrowDropDownLine, RiMenuAddFill } from "react-icons/ri";
import { PiArrowSquareUpRight } from "react-icons/pi";
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
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleOpen = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    
    <>
      <div className="flex justify-between items-center">
        <h4 className="font-[500]">Token stats panel</h4>

        <div className="flex gap-3 items-center sm:flex xs:hidden">
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
        <div className='md:hidden' >

          <RiMenuAddFill color="#6258cf" size={"30px"} />
        </div>

      </div>

      <div
        className="relative overflow-x-auto mt-[20px] mb-[20px]  xs:hidden sm:block"
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
                {row.Ticker}
                <PiArrowSquareUpRight color="#3c3a88"/>
              
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


      {/* --------------------mobile-view-table------------------- */}
       <div className="sm:hidden mt-[20px] ">
            <div className="bg-medium-purple mb-[10px] flex justify-between rounded-md px-[20px] py-[10px]">
                  <h6>S/N</h6>
                  <h6>Ticker</h6>
                  <h6>Number Of Mentions</h6>
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
                  <div className="text-sm text-[#fff] flex gap-2 items-center">{data.Ticker}
                  <PiArrowSquareUpRight color="#3c3a88"/>
                  </div>
                  <div className="text-sm text-[#fff]">{data.noOfMent}</div>
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
                      <div className="text-sm">Highest Volume</div>
                      <div className="text-sm break-all"  >{data.highVolume}</div>
                    </div>
                 
                 
                    <div className="flex justify-between">
                      <div className="text-sm">Top 3 Influencers</div>
                      <div>
                      <div>{data.Influencer1}</div>
                      <div>{data.Influencer2}</div>
                      <div>{data.Influencer3}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
      
           </div>
    </>
  );
};

export default TokenStats;
