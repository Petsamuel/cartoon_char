import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { CardDetails, SharedBackground } from "../components/Shared";
import { Navigation, Keyboard, Mousewheel } from "swiper/modules";
import { SharedImage } from "../components/Shared";
import { useState } from "react";
export const Home = () => {
  // const [thumbSwiper, setThumbSwiper] = useState<SwiperInstance | null>(null);
  const [background, setBackground] = useState(
    `radial-gradient(circle, ${CardDetails[0].startColor}, ${CardDetails[0].endColor})`
  );

  console.log(background);
  return (
    <div
      style={{
        background: background,
        transition: "background 0.8s ease",
      }}
    >
      <Swiper
        direction={"vertical"}
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
          const cardDetail = CardDetails[swiper.realIndex];
          if (cardDetail) {
            setBackground(
              `radial-gradient(circle, ${cardDetail.startColor}, ${cardDetail.endColor})`
            );
          } else {
            console.error(`CardDetails[${swiper.realIndex}] is undefined`);
          }
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
                  <h1 className="w-32 uppercase text-2xl">{val.name}</h1>
                  <h4 className="w-1/4">{val.short}</h4>

                  {/* <div>{val.description}</div> */}
                </div>
                <div className="flex justify-center relative">
                  <p className="absolute text-[10rem] -z-10 font-bold uppercase">
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
