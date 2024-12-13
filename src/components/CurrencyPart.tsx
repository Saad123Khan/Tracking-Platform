"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { FaEthereum, FaGithub } from 'react-icons/fa'; // Example icons
import { RiArrowDropDownLine } from "react-icons/ri";

const arr = [
  {
    id: "1",
    img_url: "/images/Ellipse 2.png",
    name: "Mog",
    percentage: "+17.22%",
  },
  {
    id: "2",
    img_url: "/images/Ellipse 2.png",
    name: "DOGE",
    percentage: "-2.64%",
  },
  {
    id: "3",
    img_url: "/images/Ellipse 2.png",
    name: "DUCKY",
    percentage: "-13.74%",
  },
  {
    id: "4",
    img_url: "/images/Ellipse 2.png",
    name: "Terra",
    percentage: "+113,536% I 22h",
  },
  {
    id: "5",
    img_url: "/images/Ellipse 2.png",
    name: "Terra",
    percentage: "+113,536% I 22h",
  },
  {
    id: "6",
    img_url: "/images/Ellipse 2.png",
    name: "Terra",
    percentage: "+113,536% I 22h",
  },
  {
    id: "7",
    img_url: "/images/Ellipse 2.png",
    name: "Terra",
    percentage: "+113,536% I 22h",
  },
];
const CurrencyPart = () => {
  const [selectedChain, setSelectedChain] = useState('ETHEREUM');
  const [openDropDown, setOpenDropDown] = useState(false);

  const dropDowmnHandle = () => {
    setOpenDropDown((prevState) => !prevState);
  }
  const handleSelect = (chain: any) => {
    setSelectedChain(chain);
  };
  return (
    <div>
      <div className="flex items-center justify-between gap-1 ">
        <div className="bg-medium-purple  flex items-center rounded-lg gap-4 h-[50px] p-[10px]">

          {/*--------------------- <drop down>-------------- */}
          <div className="relative inline-block text-left">
            <button className="text-sm gap-1 flex items-center bg-[#1d214d] text-white px-4 py-2 rounded-[100px]  focus:outline-none">
              {selectedChain === 'ETHEREUM' && <Image src={"/images/ethereum.png"} alt='ethereum-img' width={17} height={17} />}
              {selectedChain === 'SOLANA' &&   <Image src={"/images/solana.png"} alt='solana-img' width={17} height={17} /> }
              {selectedChain === 'BASE' && <Image src={"/images/base.png"} alt='BASE-img' width={17} height={17} />}
              {selectedChain === 'BSC' &&   <Image src={"/images/bsc.png"} alt='BSC-img' width={17} height={17} />}
              {selectedChain === 'POLYGON' &&   <Image src={"/images/polygon.png"} alt='BSC-img' width={17} height={17} />}
              {selectedChain}

              <RiArrowDropDownLine color='#645ad2' size={"20px"} onClick={dropDowmnHandle} />
            </button>

            {
              openDropDown &&
              (
                <div className=" z-[999] absolute w-[170px] mt-2 origin-top-right bg-[#1d214d] rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div
                    className="flex items-center text-md px-3 py-2 text-white cursor-pointer"
                  >
                    ALL chains
                  </div>

                  <div
                    onClick={() => handleSelect('SOLANA')}
                    className="flex items-center gap-1 text-sm px-2 py-2 text-white cursor-pointer hover:bg-medium-purple"
                  >
                    <Image src={"/images/solana.png"} alt='solana-img' width={17} height={17} /> SOLANA
                  </div>
                  <div
                    onClick={() => handleSelect('BASE')}
                    className="flex items-center gap-1 text-sm px-2 py-2 text-white cursor-pointer hover:bg-medium-purple"
                  >
                    <Image src={"/images/base.png"} alt='BASE-img' width={17} height={17} /> BASE
                  </div>
                  <div
                    onClick={() => handleSelect('BSC')}
                    className="flex items-center gap-1 text-sm px-2 py-2 text-white cursor-pointer hover:bg-medium-purple"
                  >
                    <Image src={"/images/bsc.png"} alt='BSC-img' width={17} height={17} /> BSC
                  </div>
                  <div
                    onClick={() => handleSelect('POLYGON')}
                    className="flex items-center text-sm gap-1 px-2 py-2 text-white cursor-pointer hover:bg-medium-purple"
                  >
                    <Image src={"/images/polygon.png"} alt='POLYGON-img' width={17} height={17} /> POLYGON
                  </div>
                </div>
              )
            }


          </div>












          <div className="text-sm flex gap-1">
            ETH:
            <p>
              {" "}
              $3,578.12 <span className="text-[#C2353E]">-2.5%</span> 24h
            </p>
          </div>
        </div>

        <div className="bg-medium-purple h-[50px] flex items-center rounded-lg gap-2 p-[10px]">
          {arr.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <p></p>
              <Image
                src={item.img_url}
                alt={item.name}
                width={30}
                height={30}
              />
              <div>
                <p className="text-sm">{item.name}</p>
                <p
                  className={`text-xs ${item.percentage.startsWith("+")
                      ? "text-green-500"
                      : "text-red-500"
                    }`}
                >
                  {item.percentage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CurrencyPart
