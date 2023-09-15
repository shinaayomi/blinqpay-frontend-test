import React, { ReactNode } from "react";
import Header from "./headers/Header";
import HeaderTabs from "./headers/HeaderTabs";
import Footer from "./Footer";

export default function PagesLayout({ children }: any) {
  return (
    <>
      <div className="sticky top-0 z-10">
        <Header />
        <HeaderTabs />
      </div>
      <div className="min-h-screen pb-16">{children}</div>
      <Footer />
    </>
  );
}
