import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { CardDetails, SharedBackground } from "../components/Shared";
import { Navigation, Keyboard, Mousewheel } from "swiper/modules";
import { SharedImage } from "../components/Shared";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { Swiper as SwiperInstance } from "swiper";
export const Home = () => {
  const [background, setBackground] = useState<string>();
  const [swipers, setSwiper] = useState(0);
  console.log(swipers);

  useEffect(() => {
    setBackground(
      `radial-gradient(circle, ${CardDetails[swipers].startColor} 0%, ${CardDetails[swipers].endColor} 100%)`
    );
  }, [swipers]);

  return (
    <div
      style={{
        background: background,
        transition: "background 0.8s ease-in-out",
      }}
      className="h-screen relative w-full"
    >
      <motion.div className="flex justify-between  pt-[16dvh] px-[3dvw] z-50 absolute w-full">
        <h1 className="w-32 uppercase ">cartoon character</h1>
        <motion.h4 className="w-1/4 cursor-pointer">
          lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          officiis!
        </motion.h4>
      </motion.div>
      <Swiper
        direction={"vertical"}
        keyboard={true}
        spaceBetween={20}
        speed={400}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Keyboard, Mousewheel]}
        className="w-full h-screen   flex justify-center"
        onSlideChange={(swiper) => {
          setSwiper(swiper.activeIndex);
        }}
        slidesPerView={1}
      >
        {CardDetails.map((_, index) => (
          <SharedBackground
            key={index}
            className="justify-center flex relative"
          >
            <SwiperSlide key={index} className="overflow-hidden  h-[50%]">
              <motion.div className="flex flex-col  mx-8  ">
                <motion.div className="flex justify-center mt-[40dvh] overflow-hidden">
                  <SharedImage
                    swipers={swipers}
                    src={CardDetails[swipers].image}
                    className="z-20 object-cover lg:w-[50dvw] h-auto bg-no-repeat hover:cursor-pointer absolute"
                    handleClick={() => {}}
                  />
                </motion.div>
              </motion.div>
            </SwiperSlide>
          </SharedBackground>
        ))}
      </Swiper>
    </div>
  );
};
