import Image from "next/image";
import Link from "next/link";

const navIcons = [
  { src: "/assets/icons/search.svg", alt: "search", link: "/" },
  { src: "/assets/icons/black-heart.svg", alt: "heart" },
  { src: "/assets/icons/user.svg", alt: "user" },
];
const Navbar = () => {
  return (
    <header className="w-full bg-white z-10 border rounded-xl border-black	">
      <nav className="flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex itmes-center gap-1">
          <p className="font-spaceGrotesk text-[21px] font-bold">
            Blue<span className="text-primary">Avenir</span>
          </p>
        </Link>
        <div className="flex items-center gap-9">
          <Link href="/">Home</Link>
          <p>About</p>
          <p>Contact</p>
          <Image
            src="/assets/icons/user.svg"
            width={24}
            height={24}
            alt="user"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
