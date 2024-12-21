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
  const [activeToons, setActiveToons] = useState<number | undefined>();

  console.log(swipers);
  console.log(activeToons);
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
      <motion.div
        layout
        className={`  pt-[16dvh] px-[3dvw] z-50 absolute  ${
          activeToons === swipers
            ? "flex gap-[5rem]"
            : "flex justify-between w-full"
        }`}
      >
        <motion.h1 className="w-32 uppercase ">cartoon character</motion.h1>
        <motion.h4 className="w-1/4 cursor-pointer">
          {activeToons === 0
            ? "A character who is fashionable, trendy, and always dressed in the latest styles. This character is known for their impeccable taste and sense of fashion."
            : activeToons === 1
            ? "A character who is often grumpy, irritable, and easily annoyed. This character might be known for their short temper and frequent complaints."
            : activeToons === 2
            ? "A character who is athletic, active, and passionate about sports. This character is likely to be involved in various physical activities and is known for their competitive spirit."
            : activeToons === 3
            ? "A character who is cheerful, humorous, and always ready to make others laugh. This character is known for their positive attitude and ability to bring joy to those around them."
            : `Discover the amazing world of cartoon characters. Dive into the
          stories, adventures, and fun facts about your favorite animated heroes
          and villains.`}
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
            <SwiperSlide
              key={index}
              className="overflow-hidden  h-[50%] w-full"
            >
              <motion.div className="flex flex-col ">
                <motion.div
                  className="flex justify-center mt-[40dvh] overflow-hidden"
                  onClick={() =>
                    setActiveToons(index === activeToons ? undefined : index)
                  }
                >
                  <SharedImage
                    swipers={swipers}
                    src={CardDetails[swipers].image}
                    className={` object-cover lg:w-[50dvw] h-auto bg-no-repeat hover:cursor-pointer ${
                      activeToons === index
                        ? "scale-150 w-[10dvw]"
                        : "scale-100 absolute"
                    }`}
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
