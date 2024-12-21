// import React from "react";
import { useState } from "react";
import { FaUser, FaBagShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const menu = [
    { name: "home", link: "" },
    { name: "about", link: "" },
    { name: "shop", link: "" },
    { name: "contact", link: "" },
  ];
  const menu2 = [
    { name: "myAccount", icon: <FaUser className="" /> },
    { name: "Cart", icon: <FaBagShopping /> },
  ];
  return (
    <section className="z-50">
      <nav className="flex justify-between mx-8 p-4">
        <ul className="flex space-x-8 ">
          <div className="cursor-pointer font-bold flex items-center gap-4 z-30">
            <p>Cartoonz</p>
            <GiHamburgerMenu
              onClick={() => setToggle(!toggle)}
              className="lg:hidden"
            />
          </div>
          <div className="hidden lg:inline-flex gap-6">
            {menu.map((val, index) => (
              <li key={index}>
                <a className="cursor-pointer capitalize">{val.name}</a>
              </li>
            ))}
          </div>
          {/* mobile */}
          {toggle && (
            <div className="absolute right-0 h-screen top-0 lg:hidden w-1/2 z-30 bg-white p-4">
              {menu.map((val, index) => (
                <li key={index} className="py-6">
                  <a className="cursor-pointer capitalize ">{val.name}</a>
                </li>
              ))}
            </div>
          )}
          {toggle && (
            <span className=" bg-black h-screen absolute right-0 -top-0 w-screen bg-opacity-50 lg:hidden backdrop-blur-md" />
          )}
        </ul>
        <ul className="flex space-x-8 z-30">
          {menu2.map((val, index) => (
            <li key={index} className="flex gap-3 textx-4xl space-x-2">
              <a className="">{val.icon}</a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
