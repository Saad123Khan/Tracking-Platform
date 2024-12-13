"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
  return (
    <div className="relative overflow-x-auto mt-[20px] mb-[20px]" style={{ height: height, overflowY: "auto" }}>
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
  );
};

export default CallsTable;