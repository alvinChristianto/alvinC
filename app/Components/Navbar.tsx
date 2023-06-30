"use client";
import React, {useState} from "react";
import { Menu, Close, LogoIonic } from "react-ionicons";

function Navbar(props: any) {
  let Links = [
    { name: "HOME", link: "/#home" },
    { name: "About", link: "/#about" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0">
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
              <Close
                color={"#000000"}
                title={"menu-close"}
                height="35px"
                width="35px"
              />
            ) : (
              <Menu
                color={"#000000"}
                title={"menu-open"}
                height="35px"
                width="35px"
              />
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
                  className="text-gray-800 hover:text-gray-400 duration-500"
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
