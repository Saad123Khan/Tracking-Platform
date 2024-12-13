import Image from 'next/image';
import React from 'react'
const tableHeaders: string[] = [
    "Progress",
    "Date and Time (UTC)",
    "Influenser",
    "Followers",
    "Price Impact",
    "Number of Mentions",
    "Call Marketcap",
    "Volume Generated"
  ];
  const tableData: { [key: string]: string }[] = [
    {
      id: "1",
      date: "20 May 2024 22:00:30",
      image_url: "/images/profile-table.png",
      influencer: "@nevershill",
      Followers: "8k",
      PriceImpact: "4.5x",
      noOfMent: "12",
      Marketcap: "$175,000",
      Volume: "$44,000",
    },
    {
      id: "2",
      date: "25 May 2024 22:00:30",
      image_url: "/images/profile-table.png",
      influencer: "@AdamHODL",
      Followers: "65k",
      PriceImpact: "1.8x",
      noOfMent: "6",
      Marketcap: "$470,000",
      Volume: "$17,500",
    },
    {
      id: "3",
      date: "25 May 2024 22:00:30",
      image_url: "/images/profile-table.png",
      influencer: "@CryptoKing",
      Followers: "150k",
      PriceImpact: "2.3x",
      noOfMent: "15",
      Marketcap: "$870,000",
      Volume: "$125,000",
    },
    {
      id: "4",
      date: "30 May 2024 20:15:45",
      image_url: "/images/profile-table.png",
      influencer: "@MoonLover",
      Followers: "120k",
      PriceImpact: "5.1x",
      noOfMent: "20",
      Marketcap: "$1,200,000",
      Volume: "$200,000",
    },
    {
      id: "5",
      date: "02 June 2024 18:45:20",
      image_url: "/images/profile-table.png",
      influencer: "@PumpItUp",
      Followers: "45k",
      PriceImpact: "3.8x",
      noOfMent: "10",
      Marketcap: "$350,000",
      Volume: "$75,000",
    },
    {
      id: "6",
      date: "05 June 2024 19:30:00",
      image_url: "/images/profile-table.png",
      influencer: "@DeFiQueen",
      Followers: "90k",
      PriceImpact: "4.2x",
      noOfMent: "25",
      Marketcap: "$980,000",
      Volume: "$180,000",
    },
    {
      id: "7",
      date: "07 June 2024 14:20:10",
      image_url: "/images/profile-table.png",
      influencer: "@AltcoinHero",
      Followers: "32k",
      PriceImpact: "1.5x",
      noOfMent: "5",
      Marketcap: "$150,000",
      Volume: "$30,000",
    },
    {
      id: "8",
      date: "10 June 2024 21:10:55",
      image_url: "/images/profile-table.png",
      influencer: "@ShillMaster",
      Followers: "15k",
      PriceImpact: "2.0x",
      noOfMent: "3",
      Marketcap: "$75,000",
      Volume: "$20,000",
    },
    {
      id: "9",
      date: "12 June 2024 11:05:40",
      image_url: "/images/profile-table.png",
      influencer: "@CryptoStar",
      Followers: "100k",
      PriceImpact: "3.2x",
      noOfMent: "18",
      Marketcap: "$900,000",
      Volume: "$160,000",
    },
    {
      id: "10",
      date: "15 June 2024 08:25:15",
      image_url: "/images/profile-table.png",
      influencer: "@TokenGuru",
      Followers: "75k",
      PriceImpact: "2.5x",
      noOfMent: "8",
      Marketcap: "$650,000",
      Volume: "$125,000",
    },
    {
      id: "11",
      date: "18 June 2024 17:00:00",
      image_url: "/images/profile-table.png",
      influencer: "@BlockchainBoss",
      Followers: "85k",
      PriceImpact: "4.0x",
      noOfMent: "12",
      Marketcap: "$800,000",
      Volume: "$140,000",
    },
    {
      id: "12",
      date: "20 June 2024 09:45:30",
      image_url: "/images/profile-table.png",
      influencer: "@NFTWizard",
      Followers: "50k",
      PriceImpact: "1.9x",
      noOfMent: "6",
      Marketcap: "$400,000",
      Volume: "$90,000",
    },
  ];
  
  
const TopInfluencersTable = () => {
  return (
    <div className="relative overflow-x-auto mt-[20px] mb-[20px]" style={{ height: "500px", overflowY: "auto" }}>
    <table className="w-full text-sm text-left text-white border-separate" style={{ borderSpacing: "0 3px" }}>
        <thead className="text-sm bg-medium-purple font-[400] rounded-lg">
        <tr>
            {tableHeaders.map((header, index) => (
            <th key={index} className="px-6 py-6 text-center">
                {header}
            </th>
            ))}
        </tr>
        </thead>
        <tbody>
        {tableData.map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-medium-purple">
            <td className="px-6 py-3 text-center">{row.id}</td>
            <td className="px-6 py-3 text-center">{row.date}</td>

            <td className="px-6 py-3 whitespace-nowrap flex items-center">
                <Image src={row.image_url} alt={row.influencer} width={35} height={35} className="text-center w-8 h-8 rounded-full mr-2" />
                {row.influencer}
            </td>
            <td className="px-6 py-3 text-center">{row.Followers}</td>
            <td className="px-6 py-3 text-center">{row.PriceImpact}</td>
            <td className="px-6 py-3 text-center">{row.noOfMent}</td>
            <td className="px-6 py-3 text-center">{row.Marketcap}</td>
            <td className="px-6 py-3 text-center">{row.Volume}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
  )
}

export default TopInfluencersTable
