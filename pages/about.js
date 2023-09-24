import React from "react";
import Image from "next/image";
const about = () => {
  return (
    <>
      <div className="relative py-[100px]">
        <span className="bg-[#F9F6F6] absolute bottom-0 h-[60%] w-[100%] z-[-1]"></span>
        <div className="max-w-[90vw] mx-auto">
          <h1 className="text-[var(--textPrimary)] text-[6rem] max-w-[960px] font-semibold mb-[70px] leading-[6.5rem]">
            Planting forward together
          </h1>
          <Image
            className="object-cover h-[721px]"
            src="/images/about/hero.jpg"
            width="1920"
            height="721"
            alt="About Hero"
          />
          <div className="p-[100px] bg-white text-center">
            <h2 className="text-[2.25rem] leading-[2.75rem]">
              Guided by the experts, our mission is to drive Cordova forward by
              creating economic empowerment for everyone.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
