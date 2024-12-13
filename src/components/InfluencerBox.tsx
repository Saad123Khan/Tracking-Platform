"use client`"
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
const arr = [
  {
    id: "1",
    img_url: "/images/Ellipse 2.png",
    name: "Name Sername",
    percentage: "+17.22%",
  },
  {
    id: "2",
    img_url: "/images/Ellipse 2.png",
    name: "Name Sername",
    percentage: "-2.64%",
  },
  {
    id: "3",
    img_url: "/images/Ellipse 2.png",
    name: "Name Sername",
    percentage: "-13.74%",
  },
];
const InfluencerBox = () => {
 
const router = useRouter()
  return (
     <>
      {arr.map((item) => (
        <div key={item.id} className="flex justify-between items-center bg-medium-purple p-[20px] w-[320px] rounded-md">
          <div className="flex justify-between  items-center gap-2">
            <Image className="object-contain" src={item.img_url} alt="profile" width={52} height={52} />
            <div>
              <h6>{item.name}</h6>
              <p className="text-[#BCBCBC] text-xs">
                Volume: <span>$35,000</span>
              </p>
            </div>
          </div>

          <div className="cursor-pointer" onClick={() =>router.push("/influencer-individual-stats")}>
          <Image src={"/images/arrow.png"} alt="arrow" width={46} height={46} />
          </div>
        </div>
      ))}
       
     </>
  );
};

export default InfluencerBox;
