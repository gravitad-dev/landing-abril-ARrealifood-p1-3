function SectionTitle({ headContent }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-white">
      <div className="text-[26px] md:text-[36px]">
        <h2 className="text-center md:text-left font-bold ">
          {headContent.title[0]}
        </h2>
        <div className="flex justify-center md:justify-start items-center font-thin h-12 gap-5">
          <p>{headContent.title[1]}</p>
          <img src="/arrow-large.svg" className="hidden lg:flex" />
        </div>
      </div>
      <div>
        <p className="text-[16px] hidden md:flex">{headContent.text}</p>
      </div>
    </div>
  );
}

export default SectionTitle;
