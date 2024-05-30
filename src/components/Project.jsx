import SectionTitle from "@/components/SectionTitle";
import data from "@/data/data";
import { Button } from "@/components/ui/button";

function Project() {
  const { head } = data.project;

  return (
    <section
      id={"project"}
      className="flex flex-col gap-[36px] md:gap-[70px] mt-[90px] lg:mt-[120px] "
    >
      <SectionTitle headContent={head} />

      <div className="grid grid-cols-1  gap-4 text-white">
        <div className=" flex flex-col md:flex-row gap-8  items-center bg-radial-gradient rounded-[40px] p-9">
          <div className="bg-gray-500 min-w-[300px] min-h-[300px] w-[300px] h-[300px] rounded-l-[20%] rounded-tr-[20%] rounded-br-[50%]  border-8 border-[#2b273a] overflow-hidden">
            <img
              src={"img/1.png"}
              alt=""
              className=" object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col items-center md:items-start h-full w-full">
            <h4 className=" text-[24px] mb-4  w-full text-center md:text-start ">
              AUGMENTED REALITY APPLIED TO FOOD WASTE REDUCTION
            </h4>
            <div className=" flex md:hidden   h-[2px] w-full bg-gradient-to-r from-[#343045] via-[#C0B7E8] to-[#343045]">
              {" "}
            </div>
            <div className=" hidden md:flex   h-[2px] w-full bg-gradient-to-r from-[#C0B7E8] to-[#343045]">
              {" "}
            </div>
            <p className="text-[16px] mt-[20px] text-center md:text-left">
              This project harnesses augmented reality technology to tackle the
              issue of food waste. By integrating AR into various stages of the
              food supply chain, from production to consumption, it aims to
              increase awareness, improve efficiency, and empower consumers to
              make informed decisions that contribute to reducing food waste.
            </p>
            <a href="#contact">
              <Button className="mt-[35px]">MORE INFO</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
