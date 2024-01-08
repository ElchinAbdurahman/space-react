import React from "react";
import td1 from "../images/td1.png";
import lt1 from "../images/lt1.png";
import lt2 from "../images/lt2.png";
import lt3 from "../images/lt3.png";


const broadcasts = [
  {
    id: 1,
    date: "20.05.2023",
    views: 30,
    title: "The Others(2001)",
    image: td1,
  },
  
  {
    id: 2,
    date: "20.05.2023",
    views: 30,
    title: "The Others(2001)",
    image: td1,
  },
  {
    id: 3,
    date: "20.05.2023",
    views: 30,
    title: "The Others(2001)",
    image: td1,
  },
  {
    id: 4,
    date: "20.05.2023",
    views: 30,
    title: "The Others(2001)",
    image: lt1,
  },
  {
    id: 5,
    date: "20.05.2023",
    views: 30,
    title: "The Others(2001)",
    image: lt2,
  },
  {
    id: 6,
    date: "20.05.2023",
    views: 30,
    title: "The Others(2001)",
    image: lt3,
  },
  
];

const LastBroadcast = () => {
  return (
    <div>
      <h1 className="text-black text-[30px] font-bold mt-20">Son buraxılışlar </h1>
      <div className="grid grid-cols-3 gap-5 pt-5">
        {broadcasts.map((broadcast) => (
          <div key={broadcast.id} className="flex flex-col">
            <img src={broadcast.image} alt="" />
            <div className="flex justify-between">
              <div className="pt-2">
                <span className="text-[15px] font-semibold">
                  {broadcast.date}
                </span>
              </div>
              <div className="flex items-center">
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19 12.5C19 14.985 15.866 17 12 17C8.134 17 5 14.985 5 12.5C5 10.015 8.134 8 12 8C15.866 8 19 10.015 19 12.5Z"
                      stroke="#5C5C5C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.75 12.5C13.7716 13.1393 13.4429 13.7395 12.8925 14.0656C12.3422 14.3917 11.6578 14.3917 11.1075 14.0656C10.5571 13.7395 10.2284 13.1393 10.25 12.5C10.2284 11.8607 10.5571 11.2604 11.1075 10.9344C11.6578 10.6083 12.3422 10.6083 12.8925 10.9344C13.4429 11.2604 13.7716 11.8607 13.75 12.5V12.5Z"
                      stroke="#5C5C5C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-[15px] font-semibold">
                    {broadcast.views} baxış
                  </span>
                </div>
              </div>
            </div>
            <h1 className="text-[24px] font-semibold text-black">
              {broadcast.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastBroadcast;
