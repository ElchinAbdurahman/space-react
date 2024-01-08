import React, { useState } from "react";
import films1 from ".././images/films1.png";
import films2 from ".././images/films2.png";
import films3 from ".././images/films3.png";
import films4 from ".././images/films4.png";
import films5 from ".././images/films5.png";
import films6 from ".././images/films6.png";

const Movies = () => {
  const [filmCount, setFilmCount] = useState(6);

  const filmsMembers = [
    {
      name: "Veriliş adı",
      imageUrl: films1,
    },
    {
      name: "Veriliş adı",
      imageUrl: films2,
    },
    {
      name: "Veriliş adı",
      imageUrl: films3,
    },
    {
      name: "Veriliş adı",
      imageUrl: films4,
    },
    {
      name: "Veriliş adı",
      imageUrl: films5,
    },
    {
      name: "Veriliş adı",
      imageUrl: films6,
    },

    {
      name: "Veriliş adı",
      imageUrl: films1,
    },
    {
      name: "Veriliş adı",
      imageUrl: films2,
    },
    {
      name: "Veriliş adı",
      imageUrl: films3,
    },
    {
      name: "Veriliş adı",
      imageUrl: films4,
    },
    {
      name: "Veriliş adı",
      imageUrl: films5,
    },
    {
      name: "Veriliş adı",
      imageUrl: films6,
    },
  ];

  const showMoreMovies = () => {
    setFilmCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="max-w-[1260px] mx-auto mb-5 ">
      <h1 className="flex flex-start text-[30px] text-[#000000] font-extrabold pt-5 ">
        Filmlər
      </h1>
      <div className="grid grid-cols-3">
        {filmsMembers.slice(0, filmCount).map((filmsMember, index) => (
          <div key={index} className="flex flex-col pt-5 w-[384px]">
            <div>
              <img src={filmsMember.imageUrl} alt="" />
            </div>
            <div className="flex items-center justify-center gap-5 bg-[#2C2C2C] rounded-bl-[10px] rounded-br-[10px]">
              <div className="pl-5 pt-3 pb-3">
                <div>
                  <h1 className="font-bold text-[22px] text-[#fff]">
                    {filmsMember.name}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filmCount < filmsMembers.length && (
        <div className="flex items-center justify-center pt-5">
          <button
            onClick={showMoreMovies}
            className="bg-[#FF5F5F] w-[245px] h-[59px] rounded-[7px] text-white font-bold text-[18px]"
          >
            Daha Çox
          </button>
        </div>
      )}
    </div>
  );
};

export default Movies;
