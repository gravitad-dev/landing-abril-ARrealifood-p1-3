import data from "@/data/data";
import { Button } from "@/components/ui/button";

function Contact() {
  const { title, email, textButton } = data.section6;

  return (
    <section
      id={"contact"}
      className="flex flex-col gap-[36px] md:gap-[70px] mt-[90px] lg:mt-[120px]"
    >
      {/* sa */}
      <div className="flex flex-col items-center mt-[20px] p-12 rounded-[60px] bg-radial-gradient">
        <div className="flex flex-col gap-4">
          <h4 className="text-center text-[24px] md:text-[36px] text-white font-bold ">
            {title[0]}
          </h4>
          <div className="h-[2px] bg-gradient-to-r from-[#343045] via-[#C0B7E8] to-[#343045]"></div>
          <h4 className="text-[24px] text-center text-white font-thin">
            {title[1]}
          </h4>
        </div>
        <a
          href="https://realifood.blog.jumpylife.com/contacto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="mt-[35px]">{textButton}</Button>
        </a>
      </div>
    </section>
  );
}

export default Contact;
