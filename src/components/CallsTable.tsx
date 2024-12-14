"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";

interface CallsTableProps {
  sliceCount?: any; // Optional prop
  height:any
}
const tableHeaders = [
  "S/N",
  "Token",
  "Date and Time (UTC)",
  "Influencer",
  "Buy Volume",
  "Sell Volume",
  "Call Market Cap",
];
const tableData = [
  {
    image_url: "/images/influencer-img1.png",
    influencer: "@IncomeSharks",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$M87",
    tokenPercent:"+23%",
    buyVolume: "$82,000 ",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  },
  {
    image_url: "/images/influencer-img2.png",
    influencer: "@EricCryptoman",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$PNUT",
    tokenPercent:"-12%",
    buyVolume: "$82,000 - $TRAC",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  },
  {
    image_url: "/images/influencer-img3.png",
    influencer: "GemsOfRa",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$SPEC ",
    tokenPercent:"+48%",
    buyVolume: "$82,000 - $TRAC",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  },
  {
    image_url: "/images/influencer-img1.png",
    influencer: "@IncomeSharks",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$M87",
    tokenPercent:"+23%",
    buyVolume: "$82,000 ",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  },
  {
    image_url: "/images/influencer-img2.png",
    influencer: "@EricCryptoman",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$PNUT",
    tokenPercent:"-12%",
    buyVolume: "$82,000 - $TRAC",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  },
  {
    image_url: "/images/influencer-img3.png",
    influencer: "GemsOfRa",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$SPEC ",
    tokenPercent:"+48%",
    buyVolume: "$82,000 - $TRAC",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  },
  {
    image_url: "/images/influencer-img1.png",
    influencer: "@IncomeSharks",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$M87",
    tokenPercent:"+23%",
    buyVolume: "$82,000 ",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  },
  {
    image_url: "/images/influencer-img2.png",
    influencer: "@EricCryptoman",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$PNUT",
    tokenPercent:"-12%",
    buyVolume: "$82,000 - $TRAC",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  },
  {
    image_url: "/images/influencer-img3.png",
    influencer: "GemsOfRa",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$SPEC ",
    tokenPercent:"+48%",
    buyVolume: "$82,000 - $TRAC",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  }, {
    image_url: "/images/influencer-img1.png",
    influencer: "@IncomeSharks",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$M87",
    tokenPercent:"+23%",
    buyVolume: "$82,000 ",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  },
  {
    image_url: "/images/influencer-img2.png",
    influencer: "@EricCryptoman",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$PNUT",
    tokenPercent:"-12%",
    buyVolume: "$82,000 - $TRAC",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  },
  {
    image_url: "/images/influencer-img3.png",
    influencer: "GemsOfRa",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$SPEC ",
    tokenPercent:"+48%",
    buyVolume: "$82,000 - $TRAC",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  }, {
    image_url: "/images/influencer-img1.png",
    influencer: "@IncomeSharks",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$M87",
    tokenPercent:"+23%",
    buyVolume: "$82,000 ",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  },
  {
    image_url: "/images/influencer-img2.png",
    influencer: "@EricCryptoman",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$PNUT",
    tokenPercent:"-12%",
    buyVolume: "$82,000 - $TRAC",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  },
  {
    image_url: "/images/influencer-img3.png",
    influencer: "GemsOfRa",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$SPEC ",
    tokenPercent:"+48%",
    buyVolume: "$82,000 - $TRAC",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  }, {
    image_url: "/images/influencer-img1.png",
    influencer: "@IncomeSharks",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$M87",
    tokenPercent:"+23%",
    buyVolume: "$82,000 ",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  },
  {
    image_url: "/images/influencer-img2.png",
    influencer: "@EricCryptoman",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$PNUT",
    tokenPercent:"-12%",
    buyVolume: "$82,000 - $TRAC",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  },
  {
    image_url: "/images/influencer-img3.png",
    influencer: "GemsOfRa",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$SPEC ",
    tokenPercent:"+48%",
    buyVolume: "$82,000 - $TRAC",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  }, {
    image_url: "/images/influencer-img1.png",
    influencer: "@IncomeSharks",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$M87",
    tokenPercent:"+23%",
    buyVolume: "$82,000 ",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  },
  {
    image_url: "/images/influencer-img2.png",
    influencer: "@EricCryptoman",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$PNUT",
    tokenPercent:"-12%",
    buyVolume: "$82,000 - $TRAC",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  },
  {
    image_url: "/images/influencer-img3.png",
    influencer: "GemsOfRa",
    dateAndTime: "20 May 2024 22:00:30",
    token: "$SPEC ",
    tokenPercent:"+48%",
    buyVolume: "$82,000 - $TRAC",
    sellVolume: "$82,000 ",
    marketCap: "$175,000",
  },
];

const CallsTable = ({ sliceCount,height  }: CallsTableProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="relative overflow-x-auto mt-[20px] mb-[20px] xs:hidden sm:block" style={{ height: height, overflowY: "auto" }}>
      <table className="w-full text-sm text-left text-white border-separate" style={{ borderSpacing: "0 3px" }}>
        <thead className="text-sm bg-medium-purple font-[400] rounded-lg">
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index} className="px-6 py-6 text-center text-sm font-[600]">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.slice(0, sliceCount).map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-medium-purple">
              <td className="px-6 py-3 text-center text-xs">{rowIndex + 1}

                
              </td>
              
              <td className="px-6 py-3 text-center">{row.token} <span  className={`text-xs ${
                    row.tokenPercent.startsWith("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}>{row.tokenPercent}</span></td>
              <td className="px-6 py-3 text-center text-xs">{row.dateAndTime}</td>
              <td className="px-6 py-3 whitespace-nowrap flex items-center text-center justify-center text-xs">
                <Image src={row.image_url} alt={row.influencer} width={35} height={35} className="w-8 h-8 rounded-full mr-2" />
                {row.influencer}
              </td>
              <td className="px-6 py-3 text-center text-xs">{row.buyVolume}</td>
              <td className="px-6 py-3 text-center text-xs">{row.sellVolume}</td>
              <td className="px-6 py-3 text-center text-xs">{row.marketCap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

   {/* --------------------mobile-view-table------------------- */}
    <div className="sm:hidden mt-[20px] ">
      <div className="bg-medium-purple mb-[10px] flex justify-between rounded-md px-[20px] py-[10px]">
            <h6>Token</h6>
            <h6>Influencer</h6>
      </div>
     
      <div className="bg-medium-purple rounded-md text-white px-[2px]">
      {tableData.slice(0, sliceCount).map((data, index) => (
        <div
          key={index}
        >
          <header className="flex justify-between items-center p-[10px]">
            <div className="text-sm">
              {data.token} <span className={data.tokenPercent.startsWith("+") ? "text-green-500" : "text-red-500"}>{data.tokenPercent}</span>
            </div>
            <div className="text-sm text-[#fff]">{data.influencer}</div>
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
                <div className="text-sm">Date and Time (UTC)</div>
                <div className="text-sm break-all"  >{data.dateAndTime}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm">Buy Volume</div>
                <div>{data.buyVolume}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm">Sell Volume</div>
                <div>{data.sellVolume}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm">Call Market Cap</div>
                <div>{data.marketCap}</div>
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

export default CallsTable;