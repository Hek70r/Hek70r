import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import {
  frontendTechnologies,
  backendTechnologies,
  devopsTechnologies,
} from "../constans/index";
import { fadeIn } from "../utils/motion.js";
import { SectionWrapper } from "../hoc";
import { useTranslation } from "react-i18next";

const TechnologyCard = ({ index, name, icon }) => {
  return (
    <>
      <Tilt>
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * (index % 3), 0.75)}
          className="w-full m-auto green-pink-gradient p-[2px] rounded-[28px] shadow-card w-[140px] h-[140px] sm:w-[180px] "
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary min-w-[140px] rounded-[28px] p-2 size-full flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={name} className="size-16 object-contain" />
            <h3 className="text-white text-[18px] font-bold text-center font-mono">
              {name}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};
const Technologies = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>{t("whatImWorkingWith")}</p>
        <h2 className={styles.sectionHeadText}>{t("technologies")}.</h2>
      </motion.div>

      <div className="mt-28 flex flex-wrap gap-10 justify-center">
        {frontendTechnologies.map((tech, index) => (
          <TechnologyCard
            key={`index-${tech.name}`}
            index={index}
            {...tech}
          ></TechnologyCard>
        ))}
      </div>
      <div className="mt-28 flex flex-wrap gap-10 justify-center">
        {backendTechnologies.map((tech, index) => (
          <TechnologyCard
            key={`index-${tech.name}`}
            index={index}
            {...tech}
          ></TechnologyCard>
        ))}
      </div>
      <div className="mt-28 flex flex-wrap gap-10 justify-center">
        {devopsTechnologies.map((tech, index) => (
          <TechnologyCard
            key={`index-${tech.name}`}
            index={index}
            {...tech}
          ></TechnologyCard>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Technologies, "technologies");
