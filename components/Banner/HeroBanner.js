import React from "react";
import styles from "./HeroBanner.module.css";
import Link from "next/link";
const HeroBanner = () => {
  return (
    <section className="relative">
      <span
        className={[
          styles.overlay + ` absolute top-0 left-0 w-full h-full z-[2]`,
        ]}
      ></span>
      <div className="video-container absolute top-0 left-0 w-full h-full z-[1]">
        <video
          className="h-full w-full object-cover"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
        >
          <source src="/videos/hero_vid.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="min-h-[80vh] relative z-[3] max-w-[1200px] px-[50px] py-[100px] flex flex-col justify-end">
        <h2 className="text-[96px] font-extrabold text-white">
          Making everyday green, possible.
        </h2>

        <div className="flex pt-[80px] items-center gap-[20px] font-bold text-[20px]">
          <Link
            href="/"
            className="py-[15px] px-[30px] bg-[var(--primaryColor)] text-white inline-block rounded-[5px] hover:opacity-[.9]"
          >
            Be Our Partner
          </Link>
          <Link
            href="/"
            className="py-[15px] px-[30px] text-white inline-block border-[2px] rounded-[5px]"
          >
            Know More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
