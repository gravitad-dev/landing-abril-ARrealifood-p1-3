import data from "@/data/data";

function Footer() {
  const { text } = data.section7;
  return (
    <>
      <div className="h-[2px] bg-gradient-to-r from-[#343045] via-[#C0B7E8] to-[#343045] mt-[122px]"></div>

      <footer className="flex justify-center items-center relative  min-h-[84px]">
        <p className=" text-white text-center text-[14px]">{text}</p>
      </footer>
    </>
  );
}

export default Footer;
