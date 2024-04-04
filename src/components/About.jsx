import { motion } from "framer-motion";

import { styles } from "../styles.js";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn } from "../utils/motion.js";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div
      className={`${styles.paddingX} relative w-full h-screen mx-auto inset-0 top-[120px] 
        max-w-full mx-auto flex flex-col items-start
        `}
    >
      <div className="flex flex-row gap-5 z-10">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 h-full violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {t("greeting")} <span className="text-[#915eff]">Wiktor</span>
          </h1>
          <motion.p
            variants={fadeIn("left", "", 0.5, 2)}
            className={`${styles.heroSubText} mt-4 text-secondary max-w-full leading-[30px]`}
          >
            {t("myDescription")}
          </motion.p>
        </div>
      </div>

      <motion.div
        variants={slideIn("right", "", 2, 2)}
        className=" w-full h-[6600px]"
      >
        <ComputersCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
