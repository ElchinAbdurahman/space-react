import React from "react";
import structor1 from "../../images/structor1.png";

const Structure = () => {
  const teamMembers = [
    {
      name: "Mikayıl Qarayev",
      title: "Baş Direktor",
      email: "mikayilcabbar@gmail.com",
    },
    {
      name: "Mikayıl Qarayev",
      title: "Baş Direktor",
      email: "mikayilcabbar@gmail.com",
    },
    {
      name: "Mikayıl Qarayev",
      title: "Baş Direktor",
      email: "mikayilcabbar@gmail.com",
    },
    {
      name: "Mikayıl Qarayev",
      title: "Baş Direktor",
      email: "mikayilcabbar@gmail.com",
    },
    {
      name: "Mikayıl Qarayev",
      title: "Baş Direktor",
      email: "mikayilcabbar@gmail.com",
    },
    {
      name: "Mikayıl Qarayev",
      title: "Baş Direktor",
      email: "mikayilcabbar@gmail.com",
    },
    {
      name: "Mikayıl Qarayev",
      title: "Baş Direktor",
      email: "mikayilcabbar@gmail.com",
    },
    {
      name: "Mikayıl Qarayev",
      title: "Baş Direktor",
      email: "mikayilcabbar@gmail.com",
    },
  ];

  return (
    <div className="max-w-[1260px] mx-auto mb-5 ">
      <h1 className="flex flex-start text-[30px] text-[#000000] font-extrabold pt-5 ">
        Struktor
      </h1>
      <div className="grid grid-cols-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col pt-5 w-[264px]">
            <div>
              <img src={structor1} alt="" />
            </div>
            <div className="flex items-center gap-5 bg-[#2C2C2C] rounded-bl-[10px] rounded-br-[10px]">
              <div className="pl-5 pt-3 pb-3">
                <div>
                  <h1 className="font-bold text-[20px] text-[#fff]">
                    {member.name}
                  </h1>
                  <p className="font-semibold text-[14px] text-[#FF5F5F]">
                    {member.title}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5003 3.76956C11.5101 4.04553 11.7418 4.26128 12.0178 4.25145C12.2938 4.24163 12.5095 4.00994 12.4997 3.73398L11.5003 3.76956ZM8.7855 0.751771V1.25177C8.79107 1.25177 8.79664 1.25168 8.8022 1.25149L8.7855 0.751771ZM3.9645 0.751771L3.9478 1.25149C3.95336 1.25168 3.95893 1.25177 3.9645 1.25177V0.751771ZM0.250317 3.73398C0.24049 4.00994 0.456239 4.24163 0.732207 4.25145C1.00817 4.26128 1.23986 4.04553 1.24968 3.76956L0.250317 3.73398ZM12.5 3.75177C12.5 3.47563 12.2761 3.25177 12 3.25177C11.7239 3.25177 11.5 3.47563 11.5 3.75177H12.5ZM12 8.25177L12.4997 8.26956C12.4999 8.26363 12.5 8.2577 12.5 8.25177H12ZM8.7855 11.2518L8.8022 10.752C8.79664 10.7519 8.79107 10.7518 8.7855 10.7518V11.2518ZM3.9645 11.2518V10.7518C3.95893 10.7518 3.95336 10.7519 3.9478 10.752L3.9645 11.2518ZM0.75 8.25177H0.25C0.25 8.2577 0.250106 8.26363 0.250317 8.26956L0.75 8.25177ZM1.25 3.75177C1.25 3.47563 1.02614 3.25177 0.75 3.25177C0.473858 3.25177 0.25 3.47563 0.25 3.75177H1.25ZM12.2522 4.18351C12.4906 4.04422 12.571 3.73801 12.4317 3.49957C12.2924 3.26113 11.9862 3.18075 11.7478 3.32004L12.2522 4.18351ZM8.052 6.05802L7.79979 5.62627L7.79564 5.62874L8.052 6.05802ZM4.698 6.05802L4.95438 5.62872L4.9502 5.62629L4.698 6.05802ZM1.0022 3.32004C0.76376 3.18075 0.457552 3.26113 0.318265 3.49957C0.178979 3.73801 0.259359 4.04422 0.497799 4.18351L1.0022 3.32004ZM12.4997 3.73398C12.4288 1.74319 10.7597 0.185506 8.7688 0.25205L8.8022 1.25149C10.242 1.20337 11.449 2.32986 11.5003 3.76956L12.4997 3.73398ZM8.7855 0.251771H3.9645V1.25177H8.7855V0.251771ZM3.9812 0.25205C1.99026 0.185506 0.321207 1.74319 0.250317 3.73398L1.24968 3.76956C1.30095 2.32986 2.50798 1.20337 3.9478 1.25149L3.9812 0.25205ZM11.5 3.75177V8.25177H12.5V3.75177H11.5ZM11.5003 8.23398C11.449 9.67368 10.242 10.8002 8.8022 10.752L8.7688 11.7515C10.7597 11.818 12.4288 10.2604 12.4997 8.26956L11.5003 8.23398ZM8.7855 10.7518H3.9645V11.7518H8.7855V10.7518ZM3.9478 10.752C2.50798 10.8002 1.30095 9.67368 1.24968 8.23398L0.250317 8.26956C0.321207 10.2604 1.99026 11.818 3.9812 11.7515L3.9478 10.752ZM1.25 8.25177V3.75177H0.25V8.25177H1.25ZM11.7478 3.32004L7.7998 5.62629L8.3042 6.48976L12.2522 4.18351L11.7478 3.32004ZM7.79564 5.62874C6.92062 6.1513 5.82937 6.1513 4.95436 5.62874L4.44164 6.4873C5.63245 7.19845 7.11755 7.19845 8.30836 6.4873L7.79564 5.62874ZM4.9502 5.62629L1.0022 3.32004L0.497799 4.18351L4.4458 6.48976L4.9502 5.62629Z"
                      fill="white"
                    />
                  </svg>

                  <p className="font-medium text-[14px] text-[#fff]">
                    {member.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Structure;
