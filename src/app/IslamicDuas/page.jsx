"use client";
import { useEffect, useState } from "react";

export default function IslamicDuas() {
  const [data, setData] = useState();
  console.log("hello", process.env.NEXT_PUBLIC_VITE_URL);
  useEffect(() => {
    fetch("http://localhost:9000/catagory")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  console.log(data);

  if (!data) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        loading...........
      </div>
    );
  }

  return (
    <div className="container mx-auto ">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Categories of Islamic Duas</h1>
        <p>Get over 1000 duas with 43+ dua categories.</p>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-3 py-5 px-3">
        {data?.map((item, i) => (
          <div key={i}>
            <div className=" border-2 rounded-md">
              <div className="flex flex-row items-center gap-x-3">
                <img
                  src={item?.image}
                  className="w-20 h-20 rounded-lg btn m-2"
                />
                <div className="w-44">
                  <div>
                    <h1 className="font-bold">{item?.cat_name_en}</h1>
                    <p className="text-xs">{item?.no_of_subcat} subcatagoris</p>
                  </div>
                </div>
                <div className="divider divider-horizontal divider-end"></div>
                <div className="mr-5">
                  <p>Dua</p>
                  <p>{item?.no_of_dua}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

