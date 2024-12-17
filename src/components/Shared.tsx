import { motion } from "framer-motion";

type sharedBgProps = {
  children: React.ReactNode;
  className: string;
};

export const SharedBackground = ({ children }: sharedBgProps) => {
  return <motion.div>{children}</motion.div>;
};

type SharedIamge = {
  src: string;
};

export const SharedImage = ({ src }: SharedIamge) => {
  return (
    <motion.div>
      <img src={src} alt="sharedImage" />
    </motion.div>
  );
};
