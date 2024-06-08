"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full z-10 py-8">
      <nav className="flex justify-between items-start px-6 py-4">
        <Link href="/" className="flex itmes-center gap-1">
          <p className="text-[26px] font-bold">Blue Avenir</p>
        </Link>
        <div className="flex gap-8">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <p
                className={`relative pb-3 ${
                  pathname === item.path
                    ? "font-bold text-black"
                    : "text-gray-500"
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-2 h-2 bg-black rounded-full mt-1" />
                )}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-9">
          <Image
            src="/assets/icons/user.svg"
            alt="user"
            width={24}
            height={24}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
