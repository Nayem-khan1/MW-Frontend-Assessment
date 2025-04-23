
import React from "react";

export default function NavBar() {
  return (
    <header className="bg-white sticky top-0 z-[999]">
        <>
          <nav
            className="  sm:px-[30px] xl:px-[50px] 3xl:px-[120px] px-5 flex items-center justify-between xl:py-6 lg:py-4 py-3"
            aria-label="Global"
          >
            <div className=" lg:block xl:pr-8 pr-4 flex  w-[120px] xl:w-[160px] ">
              <a href="https://mediusware.com" className="">
                <span className="sr-only">Mediusware</span>
                <img 
                  className="flex  justify-center items-center "
                  src="/src/assets/brand.svg"
                  alt="Logo"
                  width={160}
                  height={160}
                  style={{ width: "auto", height: "auto" }}
                />
              </a >
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
              <div className="hidden lg:flex xl:gap-x-8 lg:gap-x-6  lg:justify-center items-center">
                <a href="/blogs">
                  <span
                    className={`hover:text-[#00A88E]  text-sm 2xl:text-xl font-medium uppercase relative after:content-[''] after:bg-[#00A88E] after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute hover:after:w-[100%] after:duration-300 `}
                  >
                    Home
                  </span>
                </a>
                <a href="/blogs">
                  <span
                    className={`hover:text-[#00A88E]  whitespace-nowrap w-[250px] text-sm 2xl:text-xl  font-medium uppercase relative after:content-[''] after:bg-[#00A88E] after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute hover:after:w-[100%] after:duration-300 `}
                  >
                    Why Mediusware
                  </span>
                </a>
                {navItems.map((item) => {
                  return (
                    <a
                      href={item.href}
                      key={item.name}
                      className={`hover:text-[#00A88E] whitespace-nowrap flex justify-center items-center text-sm flex-1 2xl:text-xl font-medium uppercase relative after:content-[''] after:bg-[#00A88E] after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute hover:after:w-[100%] after:duration-300`}
                    
                    >
                      {item.name}
                    </a>
                  );
                })}
              
              </div>
            </div>
          </nav>
        </>
    </header>
  );
}
const navItems = [
  {
    name: "Services",
    href: `/blogs`,
  },
  {
    name: "Projects",
    href: `/blogs`,
  },

  {
    name: "Blog",
    href: `/blogs`,
  },
  {
    name: "Our Team",
    href: `/blogs`,
  },
  {
    name: "Academy",
    href: `/blogs`,
  },
  {
    name: "Careers",
    href: "https://job.mediusware.com/",
  },

];
