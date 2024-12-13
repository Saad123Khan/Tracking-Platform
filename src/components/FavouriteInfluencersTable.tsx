import Image from 'next/image';
import React from 'react'
const tableHeaders: string[] = [
    "Influencer",
    "Followers",
    "Average Xs",
    "Number of calls",
    "Average buy volume per call ",
    "Highest buy volume",
    "Best Call"
  ];
  const tableData: { [key: string]: string }[] = [
    {
      image_url: "/images/profile-table.png",
      influencer: "@IncomeSharks",
      Followers: "550k",
      average_xs: "8.5x",
      noOfCalls: "82",
      AvgVolume: "$65,300",
      HighVolume: "$82,000 - $TRAC",
      bestCall: "18.5x - $TRAC"
    },
    {
      image_url: "/images/profile-table.png",
      influencer: "@CryptoKing",
      Followers: "450k",
      average_xs: "7.2x",
      noOfCalls: "78",
      AvgVolume: "$50,200",
      HighVolume: "$72,000 - $BTC",
      bestCall: "15.3x - $BTC"
    },
    {
      image_url: "/images/profile-table.png",
      influencer: "@AltcoinMaster",
      Followers: "620k",
      average_xs: "9.1x",
      noOfCalls: "95",
      AvgVolume: "$70,100",
      HighVolume: "$90,000 - $ETH",
      bestCall: "20.2x - $ETH"
    },
    {
      image_url: "/images/profile-table.png",
      influencer: "@TokenTracker",
      Followers: "300k",
      average_xs: "5.8x",
      noOfCalls: "65",
      AvgVolume: "$45,800",
      HighVolume: "$60,000 - $ADA",
      bestCall: "12.8x - $ADA"
    },
    {
      image_url: "/images/profile-table.png",
      influencer: "@DeFiGuru",
      Followers: "700k",
      average_xs: "10.4x",
      noOfCalls: "110",
      AvgVolume: "$85,700",
      HighVolume: "$105,000 - $SOL",
      bestCall: "25.7x - $SOL"
    },
    {
      image_url: "/images/profile-table.png",
      influencer: "@MarketWhale",
      Followers: "400k",
      average_xs: "6.3x",
      noOfCalls: "58",
      AvgVolume: "$48,900",
      HighVolume: "$62,000 - $DOT",
      bestCall: "13.2x - $DOT"
    },
    {
      image_url: "/images/profile-table.png",
      influencer: "@CoinHustler",
      Followers: "510k",
      average_xs: "8.8x",
      noOfCalls: "85",
      AvgVolume: "$68,400",
      HighVolume: "$87,000 - $LINK",
      bestCall: "19.1x - $LINK"
    },
    {
      image_url: "/images/profile-table.png",
      influencer: "@BullSignal",
      Followers: "350k",
      average_xs: "6.5x",
      noOfCalls: "72",
      AvgVolume: "$52,700",
      HighVolume: "$75,000 - $XRP",
      bestCall: "14.5x - $XRP"
    },
    {
      image_url: "/images/profile-table.png",
      influencer: "@BearWatcher",
      Followers: "430k",
      average_xs: "7.9x",
      noOfCalls: "68",
      AvgVolume: "$58,200",
      HighVolume: "$80,000 - $MATIC",
      bestCall: "17.0x - $MATIC"
    },
    {
      image_url: "/images/profile-table.png",
      influencer: "@AltTrend",
      Followers: "270k",
      average_xs: "5.4x",
      noOfCalls: "50",
      AvgVolume: "$42,300",
      HighVolume: "$58,000 - $AVAX",
      bestCall: "11.7x - $AVAX"
    },
    {
      image_url: "/images/profile-table.png",
      influencer: "@TokenWizard",
      Followers: "480k",
      average_xs: "8.1x",
      noOfCalls: "80",
      AvgVolume: "$63,900",
      HighVolume: "$83,000 - $UNI",
      bestCall: "18.0x - $UNI"
    },
    {
      image_url: "/images/profile-table.png",
      influencer: "@NFTScout",
      Followers: "320k",
      average_xs: "6.0x",
      noOfCalls: "63",
      AvgVolume: "$46,200",
      HighVolume: "$64,000 - $SAND",
      bestCall: "13.5x - $SAND"
    },
    {
      image_url: "/images/profile-table.png",
      influencer: "@TradeGuru",
      Followers: "600k",
      average_xs: "9.4x",
      noOfCalls: "98",
      AvgVolume: "$76,800",
      HighVolume: "$95,000 - $LUNA",
      bestCall: "22.4x - $LUNA"
    },
    {
      image_url: "/images/profile-table.png",
      influencer: "@PumpFinder",
      Followers: "290k",
      average_xs: "5.7x",
      noOfCalls: "48",
      AvgVolume: "$41,700",
      HighVolume: "$54,000 - $DOGE",
      bestCall: "12.0x - $DOGE"
    },
    {
      image_url: "/images/profile-table.png",
      influencer: "@WhaleSignals",
      Followers: "520k",
      average_xs: "8.9x",
      noOfCalls: "88",
      AvgVolume: "$69,300",
      HighVolume: "$88,000 - $SHIB",
      bestCall: "19.3x - $SHIB"
    }
  ];
const FavouriteInfluencersTable = () => {
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
          

            <td className="px-6 py-3 whitespace-nowrap flex items-center">
                <Image src={row.image_url} alt={row.influencer} width={35} height={35} className="w-8 h-8 rounded-full mr-2" />
                {row.influencer}
            </td>
            <td className="px-6 py-3 text-center">{row.Followers}</td>
            <td className="px-6 py-3 text-center">{row.average_xs}</td>
            <td className="px-6 py-3 text-center">{row.noOfCalls}</td>
            <td className="px-6 py-3 text-center">{row.AvgVolume}</td>
            <td className="px-6 py-3 text-center">{row.HighVolume}</td>
            <td className="px-6 py-3 text-center">{row.bestCall}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
  )
}

export default FavouriteInfluencersTable
