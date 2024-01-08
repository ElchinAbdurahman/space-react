import React from "react";

const projectsData = [
  {
    title: "SEVİMLİ SHOW",
  },
  {
    title: "GƏL DANIŞ ",
  },
  {
    title: "YAXŞIYA DOĞRU",
  },
  {
    title: "GÜL KİMİ SHOW",
  },
  {
    title: "GÜL KİMİ SHOW",
  },
  {
    title: "SEVİMLİ SHOW",
  },
  {
    title: "GƏL DANIŞ ",
  },
  {
    title: "YAXŞIYA DOĞRU",
  },
  {
    title: "GÜL KİMİ SHOW",
  },
  {
    title: "GÜL KİMİ SHOW",
  },
];

const Projects = () => {
  return (
    <div className=" bg-black mt-20">
      <div className="flex flex-col items-center justify-center pt-10">
        <div>
          <h1 className="text-[40px] font-semibold text-white">
            Space TV-nin layihələri
          </h1>
        </div>
        <div>
          <p className="text-[28px] font-normal text-white">
            {" "}
            2022-2023 mövsümü üçün
          </p>
        </div>
      </div>
      <div className="max-w-[1260px] mx-auto grid grid-cols-5 gap-5 pt-10 pb-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white h-[212px] rounded-3xl font-extrabold "
          >
            <h1>{project.title}</h1>
          </div>
        ))}
      </div>
      <div className="max-w-[1260px] mx-auto border-b-4 pt-20 border-red-500 "></div>
    </div>
  );
};

export default Projects;
