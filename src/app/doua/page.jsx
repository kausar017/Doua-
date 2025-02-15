"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaHome, FaSms } from "react-icons/fa";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { FaFont, FaJar, FaLanguage, FaLocationDot } from "react-icons/fa6";
import { BsBook, BsBookmark } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";

export default function Douapage() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:9000/douas")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data.length);

  if (!data) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const link = (
    <>
      <div className="btn btn-ghost hover:bg-transparent cursor-no-drop max-sm:hidden"></div>
      <Link className="btn max-sm:btn-sm" href={"/"}>
        <FaHome size={20} />
      </Link>
      <Link className="btn max-sm:btn-sm" href={"/"}>
        <TfiLayoutGrid2 size={20} />
      </Link>
      <Link className="btn max-sm:btn-sm" href={"/"}>
        <FaLocationDot size={20} />
      </Link>
      <Link className="btn max-sm:btn-sm" href={"/"}>
        <BsBookmark size={20} />
      </Link>
      <Link className="btn max-sm:btn-sm" href={"/"}>
        <FaJar size={20} />
      </Link>
      <Link className="btn max-sm:btn-sm" href={"/"}>
        <FaSms size={20} />
      </Link>
      <Link className="btn max-sm:btn-sm" href={"/"}>
        <BsBook size={20} />
      </Link>
      <button className="btn max-sm:btn-sm btn-success text-white">
        <FaHandHoldingHeart size={20} />
      </button>
    </>
  );
  const links = (
    <>
      <div className="space-y-4 flex flex-col">
        <Link href={"/"} className="btn btn-sm">
          <FaLanguage size={20} />
          Language Settings
        </Link>
        <Link href={"/"} className="btn btn-sm">
          <FiSettings size={20} />
          General Settings
        </Link>
        <Link href={"/"} className="btn btn-sm">
          <FaFont size={20} />
          Font Settings
        </Link>
        <Link href={"/"} className="btn btn-sm">
          <FaLanguage size={20} />
          Appearance Settings
        </Link>
      </div>
    </>
  );
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="">
        <div className="navbar  mx-auto">
          <div className="flex-1">
            <img className="max-sm:w-14 md:w-24" src="/logo.png" alt="" />
            <Link href={"/"} className="btn btn-ghost text-xl">
              Dua Page
            </Link>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <div className="dropdown dropdown-end xl:hidden md:block ">
              <div tabIndex={0} role="button" className="">
                <TbWorld />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-56 p-2  shadow"
              >
                {links}
              </ul>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-9/12  mx-auto bg-[#F0F7F0] rounded-md my-5 card-body">
      <h1 className="text-gray-700 font-bold text-lg">Islamic Duas</h1>
        <div className=" text-[#40b540]">total {data.length} duas</div>
      </div>
      <div className="grid grid-cols-12">
        <div className="hidden lg:block ">
          <div className="col-span-1 flex flex-col space-y-5 items-center bg-white mx-2 rounded-xl py-5 ">
            {link}
          </div>
        </div>
        <div className="lg:hidden md:block max-sm:block">
          <div className="fixed w-full flex justify-around z-10  bottom-0 space-y-5 items-center bg-white mx-2 rounded-xl py-5 px-2">
            {link}
          </div>
        </div>
        <div className="col-span-9">
          <div></div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-2 px-2 ">
            {data?.map((item, i) => (
              <div key={i}>
                <Link
                  href={`doua/${item?.id}`}
                  className="card-body border border-gray-600 rounded-md"
                >
                  {item?.dua_name_en}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <div className="space-y-3 hidden xl:block bg-white px-3 h-96 rounded-md">
            <h1 className="text-2xl font-bold text-center">Settings</h1>
            {links}
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Night Mode</span>
                <input type="checkbox" className="toggle" defaultChecked />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
