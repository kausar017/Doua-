"use client";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoFlashSharp } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { IoBookOutline } from "react-icons/io5";
import { GiLifeSupport } from "react-icons/gi";
import { useState, useEffect } from "react";
import { BsBookmarkDashFill } from "react-icons/bs";

import moment from "moment-hijri";

export default function Bannar() {
  const [time, setTime] = useState(null);
  const [date, setDate] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const today = new Date();
    const hijriDate = moment(today).format("iMMMM iD, iYYYY AH");
    setDate(hijriDate);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isMounted]);

  const prayerTimes = {
    Fajr: "05:16 AM",
    Dhuhur: "12:18 PM",
    Asr: "03:28 PM",
    Maghrib: "05:56 PM",
    Isha: "07:10 PM",
  };

  if (!isMounted) return null;

  return (
    <div className="min-h-screen place-content-center">
      <div className="text-center space-y-5 px-3">
        <div className="space-y-5">
          <h1 className="text-4xl font-bold text-gray-700">
            Masnoon Duas & Ruqyah Collection
          </h1>
          <p className="text-gray-400">
            Read and Learn Quranic Duas & Powerful Ruqiyah Shariah
          </p>
        </div>
        <div className="xl:w-7/12 lg:w-10/12 mx-auto">
          <div className="md:flex gap-5">
            <div className="card-body space-y-10 w-full bg-[#E7F2E7] shadow-md rounded-md">
              <div className="flex text-start space-x-3">
                <div className="btn rounded-2xl bg-[#D9E7D4]">
                  <FaLocationDot color="#40725F" size={20} />
                </div>
                <div>
                  <p className="text-gray-500">Dhaka, Bangladesh</p>
                  <h1 className="font-bold text-xl">
                    {time ? time.toLocaleTimeString() : "Loading..."}
                  </h1>
                </div>
              </div>
              <div className="flex text-start space-x-3">
                <div className="btn rounded-2xl bg-[#D9E7D4]">
                  <FaCalendarAlt color="#40725F" size={20} />
                </div>
                <div>
                  <p className="text-gray-600">February 14, 2025</p>
                  <h1 className="font-bold text-xl">
                    <p className="text-lg font-bold">{date}</p>
                  </h1>
                </div>
              </div>
            </div>
            <div className="card-body w-full bg-[#E7F2E7] shadow-md rounded-md">
              <div className="grid grid-cols-2 items-center">
                <div
                  className="radial-progress text-[#40725F]"
                  style={{
                    "--value": "70",
                    "--size": "8rem",
                    "--thickness": "8px",
                  }}
                  role="progressbar"
                >
                  {" "}
                  {time ? time.toLocaleTimeString() : "Loading..."}
                </div>
                <ul>
                  {Object.entries(prayerTimes).map(([name, time]) => (
                    <li key={name} className="flex justify-between py-2">
                      <span className="font-semibold">{name}</span>
                      <span>{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:w-7/12 lg:w-10/12 px-3  mx-auto mt-5">
        <div className="flex lg:flex-row md:flex-wrap max-sm:flex-wrap justify-around rounded-md bg-[#E7F2E7] shadow mb-5">
          <div className="p-2 flex flex-col items-center">
            <div className="btn bg-[#D9E7D4] rounded-full">
              <IoFlashSharp size={20} />
            </div>
            <div className="stat-title">Ruqyah</div>
          </div>

          <div className="p-2 flex flex-col items-center">
            <div className="btn bg-[#D9E7D4] rounded-full">
              <BsBookmarkDashFill size={20} />
            </div>
            <div className="stat-title">Bookmark</div>
          </div>

          <div className="p-2 flex flex-col items-center">
            <div className="btn bg-[#D9E7D4] rounded-full">
              <IoBookOutline size={20} />
            </div>
            <div className="stat-title">Book</div>
          </div>
          <div className="p-2 flex flex-col items-center">
            <div className="btn bg-[#D9E7D4] rounded-full">
              <FaRegComments size={20} />
            </div>
            <div className="stat-title">Dua Info</div>
          </div>

          <div className="p-2 flex flex-col items-center">
            <div className="btn bg-[#D9E7D4] rounded-full">
              <TfiLayoutGrid2 size={20} />
            </div>
            <div className="stat-title">Duas</div>
          </div>

          <div className="p-2 flex flex-col items-center">
            <div className="btn bg-[#D9E7D4] rounded-full">
              <GiLifeSupport />
            </div>
            <div className="stat-title">Support Us</div>
          </div>
        </div>
      </div>
    </div>
  );
}
