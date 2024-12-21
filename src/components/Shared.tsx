/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";

import img1 from "../assets/image/1.png";
import img2 from "../assets/image/2.png";
import img3 from "../assets/image/3.png";
import img4 from "../assets/image/4.png";

export const CardDetails = [
  {
    image: img1,
    startColor: "#2b0163",
    endColor: "#0c0726",
  },
  {
    image: img2,
    startColor: "#f6c427",
    endColor: "#9b3801",
  },
  {
    image: img3,
    startColor: "#ccf57b",
    endColor: "#335326",
  },
  {
    image: img4,
    startColor: "#c89150",
    endColor: "#6d3711",
  },
];

type sharedBgProps = {
  children: React.ReactNode;
  className: string;
  style?: React.CSSProperties;
};

export const SharedBackground = ({
  children,
  className,
  style,
}: sharedBgProps) => {
  return (
    <motion.div className={className} style={style}>
      {children}
    </motion.div>
  );
};

type SharedIamge = {
  src: string;
  className: string;
  swipers: number;
  layoutId?: string;
};

export const SharedImage = ({
  src,
  className,
  swipers,
}: // layoutId,
SharedIamge) => {
  return (
    <motion.div className="justify-center relative items-center flex w-full">
      <motion.p className="absolute text-[15dvw] -z-10 font-black uppercase">
        {swipers === 0
          ? "stylish"
          : swipers === 1
          ? "laugh"
          : swipers === 2
          ? "sports"
          : "laugh"}
      </motion.p>
      <motion.img src={src} alt="sharedImage" className={className} />
    </motion.div>
  );
};
