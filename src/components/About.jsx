import SectionTitle from "@/components/SectionTitle";
import data from "@/data/data";
//import { Button } from "@/components/ui/button";

function About() {
  const { head, content } = data.section2;

  return (
    <section
      id={"about"}
      className="flex flex-col gap-[36px] md:gap-[70px] mt-[140px] md:mt-[20px]"
    >
      <SectionTitle headContent={head} />

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="bg-gray-400 overflow-hidden w-full h-min md:max-w-[90%]  xl:max-w-[524px]  rounded-tr-[20%] rounded-bl-[20%] rounded-tl-[40%] rounded-br-[40%] shadow-lg">
          <img src="/img/2.png" className="h-full object-cover" />
        </div>

        <div className="flex flex-col items-center md:items-start  mt-[32px] md:mt-0 text-white">
          <div className="hidden md:flex flex-col  text-[24px] lg:text-[36px] mb-4 lg:my-[42px]">
            <h3 className="font-bold">{content.title[0]}</h3>
            <p className="font-thin">{content.title[1]}</p>
          </div>

          <p className="mb-[28px]">{content.text}</p>

          {/* <Button className="w-min">{content.textButton}</Button> */}
        </div>
      </div>
    </section>
  );
}

export default About;
