"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, FC } from "react";

const Navbar: FC = () => {
  // Get the current pathname for active link highlighting
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // List of navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "#" },
    { name: "Contact", path: "#" },
    { name: "Account", path: "#" },
  ];

  return (
    <header className="sticky top-0 bg-white w-full z-10 py-5 ">
      <nav className="flex justify-between items-start px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <p className="text-[26px] font-bold">Blue Avenir</p>
        </Link>
        <div>
          {/* Desktop Navigation */}
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
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={toggleSidebar}>
              <Image
                src={"/assets/icons/hamburger.svg"}
                alt="Hamburger Icon"
                width={25}
                height={25}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-white z-20 flex flex-col items-center p-4 md:hidden">
          <div className="flex justify-end w-full px-12 py-12">
            <button onClick={toggleSidebar}>
              <Image
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
