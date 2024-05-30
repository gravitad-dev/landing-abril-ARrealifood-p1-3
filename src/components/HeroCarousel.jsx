import { useState } from "react";

const HeroCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(slides[0]);

  const prevSlide = () => {
    const currentIndex = slides.findIndex(
      (slide) => slide.title === currentSlide.title
    );

    if (currentIndex >= 0) {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      setCurrentSlide(slides[prevIndex]);
    }
  };

  const nextSlide = () => {
    const currentIndex = slides.findIndex(
      (slide) => slide.title === currentSlide.title
    );

    if (currentIndex >= 0) {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentSlide(slides[nextIndex]);
    }
  };

  return (
    <div className="relative top-[54px] md:top-[-75px] w-full bg-gradient-to-r from-[#211E2E] via-[#3A3456] to-[#211E2E] rounded-[90px] md:h-[168px] overflow-hidden shadow-lg ">
      {/* content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center px-4 md:px-8 h-[110px] md:h-[168px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="hidden lg:flex justify-center items-center gap-5 h-full w-full "
          >
            <div>
              <img
                src={slide.image}
                alt="Slide"
                className="w-[40px] md:w-[44px]"
              />
            </div>
            <div>
              <h3 className="font-semibold text-white text-[20px] lg:text-[24px] ">
                {slide.title}
              </h3>
              <p className="text-white text-[14px]">{slide.text}</p>
            </div>
          </div>
        ))}

        <div className="flex lg:hidden justify-center items-center gap-5 h-full px-8 md:px-0  w-full ">
          <div>
            <img
              src={currentSlide.image}
              alt="Slide"
              className="w-[40px] md:w-[44px]"
            />
          </div>
          <div>
            <h3 className="font-semibold text-white hidden sm:flex text-[18px] md:text-[24px] ">
              {currentSlide.title}
            </h3>
            <p className="text-white text-[14px]">{currentSlide.text}</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="lg:hidden  absolute top-0 bottom-0 left-2 flex items-center justify-center w-8 md:w-12 lg:w-16 text-white text-xl"
      >
        <img src="/left-arrow-carousel.svg" />
      </button>

      <button
        onClick={nextSlide}
        className="lg:hidden  absolute top-0 bottom-0 right-2 flex items-center justify-center w-8 md:w-12 lg:w-16 text-white text-xl"
      >
        <img src="/rigth-arrow-carousel.svg" />
      </button>
    </div>
  );
};

export default HeroCarousel;
