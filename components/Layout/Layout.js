import React from "react";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="main-wrapper">{children}</main>
      <Footer />
    </>
  );
}
