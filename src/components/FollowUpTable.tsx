import Image from 'next/image'
import React from 'react'
const tableHeaders = [
    "S/N",
    "Token",
    "Influencer",
    "Buy Volume",
    "Market Cap",
    "Volume on First Call",
    "Price Change from first call",
    "Mentions",
];
const tableData = [
    {
        image_url: "/images/influencer-img1.png",
        influencer: "@IncomeSharks",
        dateAndTime: "20 May 2024 22:00:30",
        token: "$ARC",
        buyVolume: "$82,000 ",
        VolumeFirstCall: "$82,000 ",
        marketCap: "$175,000",
        PriceChangeFirstCall: "+275%",
        Mentions: "25"
    },
    {
        image_url: "/images/influencer-img2.png",
        influencer: "@EricCryptoman",
        dateAndTime: "20 May 2024 22:00:30",
        token: "$TRACK",
        buyVolume: "$12,550",
        VolumeFirstCall: "$65,000",
        marketCap: "$175,000",
        PriceChangeFirstCall: "+300%",
        Mentions: "16"
    },
    {
        image_url: "/images/influencer-img3.png",
        influencer: "@IncomeSharks",
        dateAndTime: "20 May 2024 22:00:30",
        token: "$CPAL",
        buyVolume: "$22,375",
        VolumeFirstCall: "$65,000",
        marketCap: "$175,000",
        PriceChangeFirstCall: "-45%",
        Mentions: "44"
    },
    {
        image_url: "/images/influencer-img1.png",
        influencer: "@IncomeSharks",
        dateAndTime: "20 May 2024 22:00:30",
        token: "$ARC",
        buyVolume: "$82,000 ",
        VolumeFirstCall: "$82,000 ",
        marketCap: "$175,000",
        PriceChangeFirstCall: "+275%",
        Mentions: "25"
    },
    {
        image_url: "/images/influencer-img2.png",
        influencer: "@EricCryptoman",
        dateAndTime: "20 May 2024 22:00:30",
        token: "$TRACK",
        buyVolume: "$12,550",
        VolumeFirstCall: "$65,000",
        marketCap: "$175,000",
        PriceChangeFirstCall: "+300%",
        Mentions: "16"
    },
    {
        image_url: "/images/influencer-img3.png",
        influencer: "@IncomeSharks",
        dateAndTime: "20 May 2024 22:00:30",
        token: "$CPAL",
        buyVolume: "$22,375",
        VolumeFirstCall: "$65,000",
        marketCap: "$175,000",
        PriceChangeFirstCall: "-45%",
        Mentions: "44"
    },   {
        image_url: "/images/influencer-img1.png",
        influencer: "@IncomeSharks",
        dateAndTime: "20 May 2024 22:00:30",
        token: "$ARC",
        buyVolume: "$82,000 ",
        VolumeFirstCall: "$82,000 ",
        marketCap: "$175,000",
        PriceChangeFirstCall: "+275%",
        Mentions: "25"
    },
    {
        image_url: "/images/influencer-img2.png",
        influencer: "@EricCryptoman",
        dateAndTime: "20 May 2024 22:00:30",
        token: "$TRACK",
        buyVolume: "$12,550",
        VolumeFirstCall: "$65,000",
        marketCap: "$175,000",
        PriceChangeFirstCall: "+300%",
        Mentions: "16"
    },
    {
        image_url: "/images/influencer-img3.png",
        influencer: "@IncomeSharks",
        dateAndTime: "20 May 2024 22:00:30",
        token: "$CPAL",
        buyVolume: "$22,375",
        VolumeFirstCall: "$65,000",
        marketCap: "$175,000",
        PriceChangeFirstCall: "-45%",
        Mentions: "44"
    },   {
        image_url: "/images/influencer-img1.png",
        influencer: "@IncomeSharks",
        dateAndTime: "20 May 2024 22:00:30",
        token: "$ARC",
        buyVolume: "$82,000 ",
        VolumeFirstCall: "$82,000 ",
        marketCap: "$175,000",
        PriceChangeFirstCall: "+275%",
        Mentions: "25"
    },
    {
        image_url: "/images/influencer-img2.png",
        influencer: "@EricCryptoman",
        dateAndTime: "20 May 2024 22:00:30",
        token: "$TRACK",
        buyVolume: "$12,550",
        VolumeFirstCall: "$65,000",
        marketCap: "$175,000",
        PriceChangeFirstCall: "+300%",
        Mentions: "16"
    },
    {
        image_url: "/images/influencer-img3.png",
        influencer: "@IncomeSharks",
        dateAndTime: "20 May 2024 22:00:30",
        token: "$CPAL",
        buyVolume: "$22,375",
        VolumeFirstCall: "$65,000",
        marketCap: "$175,000",
        PriceChangeFirstCall: "-45%",
        Mentions: "44"
    },   {
        image_url: "/images/influencer-img1.png",
        influencer: "@IncomeSharks",
        dateAndTime: "20 May 2024 22:00:30",
        token: "$ARC",
        buyVolume: "$82,000 ",
        VolumeFirstCall: "$82,000 ",
        marketCap: "$175,000",
        PriceChangeFirstCall: "+275%",
        Mentions: "25"
    },
    {
        image_url: "/images/influencer-img2.png",
        influencer: "@EricCryptoman",
        dateAndTime: "20 May 2024 22:00:30",
        token: "$TRACK",
        buyVolume: "$12,550",
        VolumeFirstCall: "$65,000",
        marketCap: "$175,000",
        PriceChangeFirstCall: "+300%",
        Mentions: "16"
    },
    {
        image_url: "/images/influencer-img3.png",
        influencer: "@IncomeSharks",
        dateAndTime: "20 May 2024 22:00:30",
        token: "$CPAL",
        buyVolume: "$22,375",
        VolumeFirstCall: "$65,000",
        marketCap: "$175,000",
        PriceChangeFirstCall: "-45%",
        Mentions: "44"
    },
];

const FollowUpTable = () => {
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
                            <td className="px-6 py-3 text-center">{rowIndex + 1}</td>
                            <td className="px-6 py-3 text-center">{row.token}</td>

                            <td className="px-6 py-3 whitespace-nowrap flex items-center text-center">
                                <Image src={row.image_url} alt={row.influencer} width={35} height={35} className="w-8 h-8 rounded-full mr-2" />
                                {row.influencer}
                            </td>
                            <td className="px-6 py-3 text-center">{row.buyVolume}</td>
                            <td className="px-6 py-3 text-center">{row.marketCap}</td>
                            <td className="px-6 py-3 text-center">{row.VolumeFirstCall}</td>

                            <td className={`px-6 py-3 text-center text-xs ${row.PriceChangeFirstCall.startsWith("+")
                                    ? "text-green-500"
                                    : "text-red-500"
                                }`}>
                                {row.PriceChangeFirstCall}
                            </td>
                            <td className="px-6 py-3 text-center">{row.Mentions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FollowUpTable
