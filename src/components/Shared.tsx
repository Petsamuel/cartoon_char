/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";

import img1 from "../assets/image/1.png";
import img2 from "../assets/image/2.png";
import img3 from "../assets/image/3.png";
import img4 from "../assets/image/4.png";

export const CardDetails = [
  {
    name: <p>cartoon character</p>,
    short: (
      <p>
        lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        officiis!
      </p>
    ),
    description: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        aspernatur porro mollitia corporis sequi aut odio eveniet, provident
        natus ut at eum commodi dolor consequuntur obcaecati consectetur id
        iusto neque! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Autem harum sequi, distinctio blanditiis dolor neque deleniti tempore,
        a, labore reiciendis quos! Laboriosam quisquam neque quae dolorum ipsa
        nam tenetur. Autem!
      </p>
    ),
    image: img1,
    startColor: "#2b0163",
    endColor: "#0c0726",
  },
  {
    name: <p>cartoon character</p>,

    short: (
      <p>
        lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        officiis!
      </p>
    ),
    description: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut fugit
        nesciunt optio nostrum natus labore, repellendus expedita minus totam
        quibusdam et dolorem enim eveniet alias saepe eaque impedit ipsum
        doloribus?
      </p>
    ),
    image: img2,
    startColor: "#2b0163",
    endColor: "#0c0726",
  },
  {
    name: <p>cartoon character</p>,

    short: (
      <p>
        lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        officiis!
      </p>
    ),
    description: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magnam
        minima molestiae enim necessitatibus ullam, libero accusamus quam. Iste
        laborum officia veritatis ullam officiis corporis autem facilis
        necessitatibus quod ipsam.
      </p>
    ),
    image: img3,
    startColor: "#2b0163",
    endColor: "#0c0726",
  },
  {
    name: <p>cartoon character</p>,

    short: (
      <p>
        lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        officiis!
      </p>
    ),
    description: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        consequuntur neque nemo distinctio totam animi autem hic, possimus alias
        labore ducimus libero quam eum? Rem beatae sequi doloribus recusandae
        tempore!
      </p>
    ),
    image: img4,
    startColor: "#2b0163",
    endColor: "#0c0726",
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
};

export const SharedImage = ({ src, className }: SharedIamge) => {
  return (
    <motion.div>
      <img src={src} alt="sharedImage" className={className} />
    </motion.div>
  );
};
