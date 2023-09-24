import Image from "next/image";
import { Inter } from "next/font/google";
import HeroBanner from "@/components/Banner/HeroBanner";
import { TopContributors } from "@/components/Blocks/TopContributors/TopContributors";
import Head from "next/head";
import { Meta } from "@/components/Meta/Meta";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Meta />
      <HeroBanner />
      <TopContributors />
    </>
  );
}
