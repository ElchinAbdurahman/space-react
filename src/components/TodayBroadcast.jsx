import React from "react";
import td1 from "../images/td1.png";

const TodayBroadcast = () => {
  const broadcasts = [
    { title: "The Others", imageUrl: td1 },
    { title: "The Others", imageUrl: td1 },
    { title: "The Others", imageUrl: td1 },
  ];

  return (
    <div>
      <h1 className="text-black text-[30px] font-bold mt-20">Bu gün </h1>
      <div className="grid grid-cols-3 gap-5 pt-3">
        {broadcasts.map((broadcast, index) => (
          <div key={index} className="flex justify-between">
            <img src={broadcast.imageUrl} alt={broadcast.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayBroadcast;
