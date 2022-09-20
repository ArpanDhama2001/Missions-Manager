import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";

function Header({ titel, icon }) {
  return (
    <section className="flex flex-col">
      <div className="w-fit text-primary p-1 rounded-md text-2xl hover:bg-secondary">
        <CgMenu />
        {/* <span className="text-primary text-2xl cursor-pointer hover:bg-white px-1"></span> */}
      </div>
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-2 items-center">
          <span className="text-accent">{icon}</span>
          <h1 className="font-heading font-bold text-3xl text-accent">
            My Day
          </h1>
        </div>
        <div className="theme-modal">
          <span className="text-accent">
            <FaEllipsisH />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Header;
