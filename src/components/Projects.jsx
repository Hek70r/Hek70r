import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles.js";
import { SectionWrapper } from "../hoc/index.js";
import { projects } from "../constans/index.js";
import { textVariant } from "../utils/motion.js";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ project, t }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: project.iconBg }}
      icon={
        <div className="flex justify-center items-center size-full">
          <img
            src={project.icon}
            alt={`project-${project.title}`}
            className="object-contain size-[90%] rounded-b-full"
          />
        </div>
      }
    >
      <div className="flex flex-col  justify-center">
        <motion.h3
          className="text-white text-[24px] font-bold hover:cursor-pointer"
          whileHover={{
            color: "#A152F0",
            paddingLeft: "3px",
            transition: { duration: 0.25 },
          }}
        >
          <a href={project.link} target="_blank" className="flex items-center">
            {project.title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </a>
        </motion.h3>

        <p className="mt-2  text-secondary">{t(project.description)}</p>

        <ul className="mt-2 w-full flex flex-wrap gap-1">
          {project.technologies.map((tech, index) => {
            return (
              <li
                key={`index-${tech}`}
                className="mr-1.5 mt-2 bg-teal-400/10 rounded-full"
              >
                <div className="flex items-center px-3 py-1 text-xs font-medium text-teal-300">
                  {tech}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("whatIHaveCreatedSoFar")}</p>
        <h2 className={styles.sectionHeadText}>{t("myProjects")}</h2>
      </motion.div>

      <div className="my-10 flex flex-col">
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ProjectCard key={`experience-${index}`} project={project} t={t} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
