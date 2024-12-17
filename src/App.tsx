import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import { Layout } from "./components/Layout";
import { Home } from "./Pages/Home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.div
        key={location.pathname}
        // custom={{ direction: path === "/" ? -1 : 1 }}
        // variants={swiperTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Layout>
          <Routes location={location.pathname}>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
};
function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatedRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
