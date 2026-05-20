"use client";
import React, {useState} from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"] });

function Navbar(props: any) {
  let Links = [
    { name: "HOME", link: "/#home" },
    { name: "About", link: "/#about" },
    { name: "Ongoing Project", link: "/#individual-project" },
    { name: "Project Sebelumnya", link: "/#portfolio" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <>
      <div className={`${spaceGrotesk.className} shadow-md w-full fixed top-0 left-0 z-50`}>
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center 
    text-gray-800"
          >
            <h3 className="mt-3">alvin<span className="font-bold text-primary text-3xl">C</span></h3>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {/* <ion-icon name={open ? "close" : "menu-outline"}></ion-icon> */}
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="menu-close"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="menu-open"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-16 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-primary duration-300 font-medium tracking-wide text-sm"
                >
                  {link.name}
                </a>
              </li>
            ))}
           
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
