import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { CardDetails, SharedBackground } from "../components/Shared";
import { Navigation, Keyboard, Mousewheel } from "swiper/modules";
import { SharedImage } from "../components/Shared";
import { useEffect, useState } from "react";
import { Swiper as SwiperInstance } from "swiper";
export const Home = () => {
  // const [background, setBackground] = useState<string>(
  //   `radial-gradient(circle, ${CardDetails[1].startColor}, ${CardDetails[1].endColor})`
  // );
  const [swipers, setSwiper] = useState<SwiperInstance | null>(null);
  console.log(swipers?.activeIndex);

  useEffect(() => {
    // if (swipers?.activeIndex !== undefined) {
    //   setBackground(
    //     `radial-gradient(circle, ${
    //       CardDetails[swipers.activeIndex].startColor
    //     }, ${CardDetails[swipers.activeIndex].endColor})`
    //   );
    // }
    console.log(swipers?.activeIndex);
  }, [swipers]);

  return (
    <div
    // style={{
    //   background: background,
    //   transition: "background 0.8s ease",
    // }}
    >
      <Swiper
        direction={"vertical"}
        // loop={true}
        keyboard={true}
        spaceBetween={20}
        speed={800}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Keyboard, Mousewheel]}
        className="w-full h-screen overflow-hidden relative flex justify-center "
        onSlideChange={(swiper) => {
          setSwiper(swiper);
        }}
      >
        {CardDetails.map((val, index) => (
          <SharedBackground
            key={index}
            className="justify-center flex  w-screen h-screen overflow-hidden "
          >
            <SwiperSlide key={index}>
              <div className="flex flex-col pt-[20dvh] mx-8 ">
                <div className="flex justify-between ">
                  <h1 className="w-32 uppercase ">{val.name}</h1>
                  <h4 className="w-1/4">{val.short}</h4>

                  {/* <div>{val.description}</div> */}
                </div>
                <div className="flex justify-center relative">
                  <p className="absolute text-[10rem] -z-10 font-black uppercase">
                    stylish
                  </p>
                  <SharedImage
                    src={val.image}
                    className="z-20 object-cover h-auto"
                  />
                </div>
              </div>
            </SwiperSlide>
          </SharedBackground>
        ))}
      </Swiper>
    </div>
  );
};
