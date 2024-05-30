import data from "@/data/data";

function Technologies() {
  const { brands, mainImage, title } = data.section4;

  return (
    <section
      id={"technologies"}
      className="flex flex-col gap-[36px] md:gap-[70px] mt-[90px] lg:mt-[120px]"
    >
      <div
        className={`relative flex flex-col justify-center items-center h-[170px] md:h-[300px] w-full  rounded-full overflow-hidden `}
      >
        <h3 className="text-[24px] md:text-[36px] font-semibold text-white z-20">
          {title[0]}
        </h3>
        <p className="text-[24px]  text-center font-thin text-white z-20">
          {title[1]}
        </p>

        <div className="absolute top-0 bg-black/60 backdrop-blur-sm w-full h-full z-10">
          {" "}
        </div>

        <img
          src={mainImage}
          alt=""
          className="absolute top-0 object-cover w-full h-full "
        />
      </div>

      {/* 
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-white mt-[40px]">
        {brands.map((element, index) => (
          <div key={index} className=" flex items-center justify-center ">
            <img src={element} alt="" className="w-[180px]" />
          </div>
        ))}
      </div>
      */}
    </section>
  );
}

export default Technologies;
