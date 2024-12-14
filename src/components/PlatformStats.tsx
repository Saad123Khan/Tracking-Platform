import Image from 'next/image';
import React from 'react';

const arr = [
  {
    image_url: "/images/stats1.png",
    stats_no: "9,765",
    text: "Number of users",
  },
  {
    image_url: "/images/stats2.png",
    stats_no: "320",
    text: "Tracked Influencers",
  },
  {
    image_url: "/images/stats3.png",
    stats_no: "124",
    text: "Purchased ad slot",
  },
  {
    image_url: "/images/stats4.png",
    stats_no: "235",
    text: "Daily visitors",
  },
  {
    image_url: "/images/stats5.png",
    stats_no: "3,980",
    text: "Weekly visitors",
  },
  {
    image_url: "/images/stats6.png",
    stats_no: "63,357",
    text: "Monthly visitors",
  },
  {
    image_url: "/images/stats7.png",
    stats_no: "454",
    text: "Premium users",
  },
  {
    image_url: "/images/stats8.png",
    stats_no: "346",
    text: "Premium + users",
  },
];

const PlatformStats = () => {
  return (
    <div className="grid xs:grid-cols-2 sx:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5  gap-3">
      {arr.map((item, id) => (
        <div key={id} className="flex flex-col items-center justify-center bg-medium-purple rounded-lg w-[128px] h-[118px]">
          <Image src={item.image_url} alt={item.text} width={40} height={40} />
          <h5 className="mt-4 text-sm font-semibold">{item.stats_no}</h5>
          <p className="text-xs text-[#BCBCBC]">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default PlatformStats;
