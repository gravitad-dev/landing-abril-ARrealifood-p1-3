import { Button } from "@/components/ui/button";
import HeroCarousel from "@/components/HeroCarousel";
import { Line, Line2 } from "@/components/svg";
import data from "@/data/data";

const styledText =
  "bg-gradient-to-r from-[#8176AF]  to-[#C0B7E8]  inline-block text-transparent bg-clip-text";

// ----------- Main ------------
function Hero() {
  const { content, slides } = data.section1;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  h-auto md:h-[840px]">
        {/* Text Hero */}
        <div className="relative col-span-1 flex flex-col  md:justify-center items-center md:items-start order-2 md:order-1 w-full  md:max-w-[580px] z-10">
          <h1 className="text-white text-[32px] md:text-[46px]  font-semibold md:font-bold text-center md:text-left mb-[36px]">
            <span className={styledText}>{content.title[0]}</span>{" "}
            {content.title[1]}{" "}
            <span className={styledText}>{content.title[2]}</span>
          </h1>

          <p className="hidden md:flex text-white  mb-[60px] text-center md:text-left">
            {content.text}
          </p>

          <div className="flex gap-[40px]">
            <Button className="w-[292px] md:w-min">{content.textButton}</Button>
            <img src="/right-arrow.svg" className="hidden md:flex w-[40px]" />
          </div>

          <div className="hidden lg:flex absolute w-[238px] pt-32 left-[-24%]">
            <Line2 />
          </div>
        </div>

        {/* Object Image */}
        <div className="col-span-1 w-full order-1 md:order-2 pt-[140px] pb-[40px] md:py-0">
          <div className="relative flex justify-center md:justify-end items-center h-[45vh] md:h-full">
            <div className="absolute right-[-35%] sm:right-[-2%] md:right-[-10%]  lg:right-[10%] pb-24 lg:w-[617px]">
              <Line />
            </div>

            <div className="w-[530px] h-[460px] max-h-[78vw] md:max-h-[42vw] lg:max-h-[468px] relative">
              <div className="absolute bg-black/20 backdrop-blur-sm w-full h-full  rounded-t-[22%] rounded-br-[22%] rounded-bl-[52%] p-5">
                <div className="w-full h-full  rounded-t-[21%] rounded-br-[21%] rounded-bl-[53%] overflow-hidden">
                  <img
                    src="/img/1.png"
                    alt=""
                    className=" object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroCarousel slides={slides} />
    </>
  );
}

export default Hero;
