import React from "react";

const TopHeader = () => {
  return (
    <div>
      <div className="bg-primary-1">
        <div className="flex justify-between container text-white py-[13px]">
          {/* left  */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3 md:w-4 md:h-4"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <a
              href="tel:+880 1750 020408"
              className="lg:text-xs text-[10px] lg:text-[14px] font-[450] ml-1 text-white"
            >
              +880 1750 020408
            </a>

            <span className="text-xs lg:mx-3 mx-1">|</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3 md:w-4 md:h-4"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>

            <a
              href="mailto:contact@mediusware.com"
              className="lg:text-xs text-[10px] lg:text-[14px] font-[450] ml-1 text-white"
            >
              contact@mediusware.com
            </a>
          </div>

          {/* right */}
          <div className="flex">
            <a href="https://www.facebook.com/mediusware/" target="_blank">
              <img
                src="/src/assets/Header/facebook.svg"
                className="lg:mr-2 mr-1"
                alt="Facebook Logo - Link to Mediusware Facebook Page"
                height={17}
                width={17}
              />
            </a>

            <a
              href="https://www.linkedin.com/company/mediusware-ltd/"
              target="_blank"
            >
              <img
                src="/src/assets/Header/linkedin.svg"
                className="lg:mr-2 mr-1"
                alt="Linkedin Logo - Link to Mediusware Linkedin Profile"
                height={17}
                width={17}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
