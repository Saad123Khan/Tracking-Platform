import TokenCards from "@/components/TokenCards";
import TopInfluencersTable from "@/components/TopInfluencersTable";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="px-[20px] mt-[20px]">
      <h4>Token Stats</h4>

      <div className="flex flex-wrap justify-between items-center mt-3 gap-1">
        <TokenCards  className="md:w-[345px] w-[100%]">
          <div className="flex items-center gap-2">
            <Image
              src={"/images/stats-logo.png"}
              alt="stats-logo"
              width={89}
              height={89}
            />
            <div className="flex flex-col gap-2">
              <h6>Tracker AI</h6>
              <p className="text-[#BCBCBC]">$TRACK</p>
              <div className="flex gap-2">
                <p className="text-center w-[145px] h-[37px] border border-[#33424d] bg-dark rounded-md flex items-center justify-center">
                  0xda5...7e6db
                </p>
                <div className="cursor-pointer">
                  <Image
                    src={"/images/copyImg.png"}
                    alt="copyImg"
                    width={28}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </TokenCards>

        <TokenCards className="md:w-[227px] w-[100%]">
          <div className="flex flex-col gap-2">
            <div>
              <Image
                src={"/images/statsProfile.png"}
                alt="statsProfile"
                width={57}
                height={57}
              />
            </div>

            <h4>@nevershill</h4>
            <p className="text-[#BCBCBC]">$44,000</p>
          </div>
        </TokenCards>

        <TokenCards className="md:w-[139px] w-[100%]">
          <div className="flex flex-col gap-1">
            <div>
              <Image
                src={"/images/lock-img.png"}
                alt="lock-img"
                width={57}
                height={57}
              />
            </div>

            <h4>$870,000</h4>
            <p className="text-[#BCBCBC]">ATH MC</p>
          </div>
        </TokenCards>

        <TokenCards className="md:w-[139px] w-[100%]">
          <div className="flex flex-col gap-1">
            <div>
              <Image
                src={"/images/dollar-img.png"}
                alt="ollar-img"
                width={57}
                height={57}
              />
            </div>

            <h4>$412,000</h4>
            <p className="text-[#BCBCBC]">Current MC</p>
          </div>
        </TokenCards>

        <TokenCards className="md:w-[139px] w-[100%]">
          <div className="flex flex-col gap-1">
            <div>
              <Image
                src={"/images/contact-img.png"}
                alt="contact-img"
                width={57}
                height={57}
              />
            </div>

            <h4>39</h4>
            <p className="text-[#BCBCBC]">Influencers</p>
          </div>
        </TokenCards>

        <TokenCards className="md:w-[139px] w-[100%]">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={"/images/up-thumb.png"}
                alt="up-thumb"
                width={34}
                height={34}
              />

              <p>
                Best <span className="block"> influencer </span>
              </p>
            </div>

            <div>
            <Image
              src={"/images/statsProfile.png"}
              alt="statsProfile"
              width={57}
              height={57}
            />
            </div>

            <h6>@nevershill</h6>
            <p className="text-[#BCBCBC]">$44,000</p>
          </div>
        </TokenCards>

        <TokenCards className="md:w-[139px] w-[100%]">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={"/images/down-thumb.png"}
                alt="down-thumb"
                width={34}
                height={34}
              />

              <p>Worst <span className="block"> influencer </span></p>
            </div>

            <Image
              src={"/images/statsProfile.png"}
              alt="statsProfile"
              width={57}
              height={57}
            />

            <h6>@KenzoIRO</h6>
            <p className="text-[#BCBCBC]">$0</p>
          </div>
        </TokenCards>
      </div>

      <div>
        <h4 className="mt-[30px]">Top 10 Influencers</h4>

        <TopInfluencersTable/>
      </div>
    </div>
  );
};

export default page;
