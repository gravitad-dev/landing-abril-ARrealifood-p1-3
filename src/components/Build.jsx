import SectionTitle from "@/components/SectionTitle";
import data from "@/data/data";
//import { Button } from "@/components/ui/button";

function Build() {
  const { head, cards } = data.section3;

  return (
    <section
      id={"services"}
      className="flex flex-col gap-[36px] md:gap-[70px] mt-[90px] lg:mt-[120px]"
    >
      <SectionTitle headContent={head} />

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  gap-4 text-white">
        {cards.map((element, index) => (
          <div
            key={index}
            className=" flex flex-col items-center bg-radial-gradient rounded-[40px] p-9"
          >
            <div className="bg-gray-500 w-[190px] h-[190px] rounded-full border-8 border-[#2b273a] overflow-hidden">
              <img src={element.image} alt="" />
            </div>

            <div className="flex flex-col items-center mt-[20px]">
              <h4 className="text-center text-[24px] border-b border-[#C0B7E830] h-12 w-[180px]">
                {element.title}
              </h4>
              <p className="text-[12px] mt-[20px]">{element.text}</p>
              {/*  <Button className="mt-[35px]">{element.textButton}</Button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Build;
