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
        transition: "background 0.8s ease",
      }}
    >
      {/* new */}
      <motion.div className="flex justify-between  py-[16dvh] px-[3dvw]">
        <h1 className="w-32 uppercase ">cartoon character</h1>
        <h4 className="w-1/4">
          lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          officiis!
        </h4>

        {/* <div>{val.description}</div> */}
      </motion.div>
      <Swiper
        direction={"vertical"}
        // loop={true}
        keyboard={true}
        spaceBetween={20}
        speed={900}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Keyboard, Mousewheel]}
        className="w-full h-screen overflow-hidden relative flex justify-center"
        onSlideChange={(swiper) => {
          setSwiper(swiper.activeIndex);
        }}
        slidesPerView={1}
      >
        {CardDetails.map((_, index) => (
          <SharedBackground
            key={index}
            className="justify-center flex  w-screen overflow-hidden relative"
          >
            <SwiperSlide key={index}>
              <div className="flex flex-col mx-8 overflow-hidden">
                <motion.div className="flex justify-center">
                  <SharedImage
                    swipers={swipers}
                    src={CardDetails[swipers].image}
                    className="z-20 object-cover  w-[30dvw] bg-no-repeat"
                  />
                </motion.div>
              </div>
            </SwiperSlide>
          </SharedBackground>
        ))}
      </Swiper>
    </div>
  );
};
