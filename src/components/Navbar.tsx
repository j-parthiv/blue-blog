"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Account", path: "/account" },
  ];

  return (
    <header className="w-full z-10 py-8">
      <nav className="flex justify-between items-start px-2 py-4">
        <Link href="/" className="flex items-center gap-1">
          <p className="text-[26px] font-bold">Blue Avenir</p>
        </Link>

        <div>
          <ul className="hidden md:flex flex-1 justify-center items-center gap-16">
            {navItems.map((item, index) => {
              const href = item.path;
              return (
                <li key={index}>
                  <Link
                    href={href}
                    className={`relative pb-2 hover:text-black ${
                      pathname === href
                        ? "font-bold text-black"
                        : "text-gray-500"
                    }`}
                  >
                    {item.name}
                    {pathname === href && (
                      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-2 h-2 bg-black rounded-full mt-1" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="md:hidden">
            <button onClick={toggleSidebar}>
              <img
                src={"/assets/icons/hamburger.svg"}
                alt="Hamburger Icon"
                width={25}
                height={25}
              />
            </button>
          </div>
        </div>
      </nav>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-white z-20 flex flex-col items-center p-4 md:hidden">
          <div className="flex justify-end w-full px-12 py-12">
            <button onClick={toggleSidebar}>
              <img
                src={"/assets/icons/x-close.svg"}
                alt="Close Icon"
                width={25}
                height={25}
              />
            </button>
          </div>
          <ul className="mt-6">
            {navItems.map((item, index) => {
              const href = item.path;
              return (
                <li
                  key={index}
                  className={`text-xl mb-12 text-center hover:text-black ${
                    pathname === href ? "font-bold text-black" : "text-gray-500"
                  }`}
                >
                  <Link href={href} onClick={toggleSidebar}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
