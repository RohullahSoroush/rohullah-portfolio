import NavLink from "@/components/Buttons/NavLink";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="flex gap-4 bg-[#009ebb] px-6 py-3 rounded-3xl text-white shadow-xl">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
