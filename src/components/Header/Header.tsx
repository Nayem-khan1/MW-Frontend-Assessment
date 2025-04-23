import React from "react";
import NavBar from "./NavBar";
import TopHeader from "./TopHeader";

export default function Header() {

  return (
    <>
      
        <header className="bg-white sticky top-0 z-[9999999]">
          <TopHeader />
          <NavBar />
        </header>
     
    </>
  );
}
