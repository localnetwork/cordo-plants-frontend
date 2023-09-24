import Image from "next/image";
import { Inter } from "next/font/google";
import HeroBanner from "@/components/Banner/HeroBanner";
import { TopContributors } from "@/components/Blocks/TopContributors/TopContributors";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroBanner />
      <TopContributors />
    </>
  );
}
