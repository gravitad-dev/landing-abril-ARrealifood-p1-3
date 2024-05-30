import SectionTitle from "@/components/SectionTitle";
import data from "@/data/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize({ cards }) {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-[80%] md:w-[92%] lg:w-full"
    >
      <CarouselContent>
        {cards.map((element, index) => (
          <CarouselItem
            key={index}
            className="flex flex-col items-center  text-white w-full md:basis-1/2 lg:basis-1/4"
          >
            <div className="flex justify-center items-center bg-[#0D0D0D50] w-[200px] h-[200px] rounded-full  overflow-hidden">
              <div className="flex justify-center items-center bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] w-[170px] h-[170px] rounded-full">
                <p className="text-[#343045] text-[78px] font-semibold">
                  0{element.id}
                </p>
              </div>
            </div>

            <div className="flex mt-[20px] gap-3 p-0 md:pl-4">
              <div className="w-[40px] pt-1 hidden md:flex">
                <img
                  src="/arrow-r-card.svg"
                  alt=""
                  className="w-full object-contain"
                />
              </div>
              <h4 className="text-center md:text-left text-[24px] font-semibold w-[180px]">
                {element.title}
              </h4>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" flex lg:hidden bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] h-[48px] w-[48px] border-[10px] border-[#252231] " />
      <CarouselNext className=" flex lg:hidden bg-gradient-to-r  from-[#C0B7E8] to-[#8176AF] h-[48px] w-[48px] border-[10px] border-[#252231] " />
    </Carousel>
  );
}

function HowBuild() {
  const { head, cards } = data.section5;

  return (
    <section
      id={"howto"}
      className="relative flex flex-col gap-[40px] md:gap-[70px] mt-[90px] lg:mt-[120px]"
    >
      <SectionTitle headContent={head} />

      {/*
      
      <img
        src="/Centro 3.svg"
        alt=""
        className="absolute top-[40%] hidden lg:flex"
      />

      <div className="flex justify-center z-10">
        <CarouselSize cards={cards} />
      </div>
      */}
    </section>
  );
}

export default HowBuild;
