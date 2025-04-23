import Button from "./Button";

const BlogHero = () => {
  return (
    <>
      <div className="  bg-gradient-to-l from-[#EEF4F9] from-10% via-[#EAF7F5] via-30% to-[#EEF4F9] to-90% lg:pt-[60px] pt-10 lg:pb-[100px] md:pb-[60px] pb-10">
        <div className="container">
          <div>
            <h2 className=" text-[#002B4F] xl:text-[80px] md:text-[60px] !text-8 text-center lg:mt-[76px] md:mt-[60px] mt-0 md:leading-[90px] sm:leading-7 leading-11 text-center font-bold">
              READ INSIGHTFUL <span className="text-[#00A88E]">ARTICLES</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHero;
