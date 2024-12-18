import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper as SwiperInstance } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { CardDetails } from "../components/Shared";
import { Navigation, Keyboard, Mousewheel } from "swiper/modules";
import { SharedImage } from "../components/Shared";
export const Home = () => {
  // const [thumbSwiper, setThumbSwiper] = useState<SwiperInstance | null>(null);
  return (
    <div className="h-screen ">
      <Swiper
        direction={"vertical"}
        keyboard={true}
        loop={true}
        spaceBetween={0}
        speed={800}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Keyboard, Mousewheel]}
        className="w-full h-screen overflow-hidden relative flex justify-center"
      >
        {CardDetails.map((val, index) => (
          <div key={index} className="h-screen justify-center flex">
            <SwiperSlide>
              <div className="flex flex-col pt-[20dvh] mx-8">
                <div className="flex justify-between ">
                  <h1 className="w-32 uppercase text-4xl">{val.name}</h1>
                  <h4 className="w-1/4">{val.short}</h4>

                  {/* <div>{val.description}</div> */}
                </div>
                <div className="flex justify-center relative">
                  <p className="absolute text-[10rem] z-10 font-bold uppercase">
                    stylish
                  </p>
                  <SharedImage src={val.image} className="z-20" />
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};
