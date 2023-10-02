"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className='px-24 py-6 flex justify-between items-center space-x-6'>
      <Logo name={"mewtwosenpaii"} />
      <div className='flex space-x-8 items-center'>
        <Link
          href='/'
          className={`${
            pathName === "/" && "font-black"
          } hover:scale-125 transition-all ease-in-out duration-200`}>
          Home
        </Link>
        <Link
          href='/register'
          className={`${
            pathName === "/register" && "font-black"
          } hover:scale-125 transition-all ease-in-out duration-200`}>
          Tickets
        </Link>
        <Link
          href='/contact'
          className={`${
            pathName === "/contact" && "font-black"
          } hover:scale-125 transition-all ease-in-out duration-200`}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}
