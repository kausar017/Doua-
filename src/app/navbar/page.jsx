"use client";
import Link from "next/link";
import { TiThLarge } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";
import { TbLocationFilled } from "react-icons/tb";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const patname = usePathname();
  // console.log(patname.includes("doua"));

  const link = (
    <div className="flex lg:flex-row md:flex-col max-sm:flex-col space-x-2 text-[#487866] text-start">
      <Link href={"/doua"} className="btn btn-sm btn-ghost">
        Duas
      </Link>
      <Link href={"/"} className="btn btn-sm btn-ghost">
        Books
      </Link>
      <Link href={"/"} className="btn btn-sm btn-ghost">
        Ruqyah
      </Link>
      <Link href={"/"} className="btn btn-sm btn-ghost">
        Bookmark
      </Link>
      <Link href={"/"} className="btn btn-sm btn-ghost">
        Dua Info
      </Link>
    </div>
  );

  if (patname.includes("doua")) {
    return <></>;
  } else {
    return (
      <div className={`fixed w-full backdrop-blur-sm z-10 `}>
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <Link href="/" className="flex items-center">
              <img
                className="w-full max-w-16"
                src="https://i.postimg.cc/Pq1R1hs4/logo.png"
                alt="https://i.postimg.cc/Pq1R1hs4/logo.png"
              />
              <span>
                <h1>
                  <span className="text-xl font-bold text-black">Dua</span>{" "}
                  <span className="text-[#40725F]">&</span>{" "}
                  <span className="text-xl font-bold text-black">Ruqyah</span>
                </h1>
                <p className="text-xs">Hisnul Muslim</p>
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{link}</ul>
          </div>
          <div className="navbar-end flex items-center space-x-3">
            <div>
              <FiSearch size={20} />
            </div>
            <div>
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <TiThLarge size={20} />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  {link}
                </ul>
              </div>
            </div>
            <button className="btn btn-sm rounded-full bg-[#40725F] font-bold text-md text-white">
              Support Us
              <span className="rotate-45">
                <TbLocationFilled />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
}
