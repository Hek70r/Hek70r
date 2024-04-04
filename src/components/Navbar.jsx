import { useEffect, useState } from "react";
import { styles } from "../styles.js";
import { navLinks } from "../constans";
import { menu } from "../assets";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { plFlag, enFlag } from "../assets/index.js";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [toggleLang, setToggleLang] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const { t, i18n } = useTranslation();

  const languages = [
    { id: "en", flag: enFlag, name: "English" },
    { id: "pl", flag: plFlag, name: "Polski" },
  ];

  // Setting user's default language as language displayed
  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith("en")) {
      setCurrentLang("en");
    } else if (userLang.startsWith("pl")) {
      setCurrentLang("pl");
    } else {
      setCurrentLang("en");
    }
  }, []);

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setToggleLang(false);
  };

  const dropdownContent = (
    <div className="w-60 xl:w-56 py-3 px-5 bg-tertiary text-secondary ">
      <ul className="w-full gap-5 flex flex-col ">
        {languages.map((lang) => (
          <li
            key={lang.id}
            onClick={() => {
              changeLanguage(lang.id);
              setCurrentLang(lang.id);
            }}
            className={`${lang.id == currentLang ? "text-white" : "text-secondary"} font-mono flex  align-bottom gap-3`}
          >
            <img
              src={lang.flag}
              alt={`${lang.name} flag`}
              className="w-[45px] h-[30px]"
            />
            {lang.name}
          </li>
        ))}
      </ul>
    </div>
  );

  const languageDropdown = (
    <li
      className={`${toggleLang ? "text-white" : "text-secondary"} font-medium text-xl  xl:text-2xl cursor-pointer font-mono relative`}
      onMouseEnter={() => setToggleLang(true)}
      onMouseLeave={() => setToggleLang(false)}
    >
      // {t("language")}
      <AnimatePresence>
        {toggleLang && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-16 bg-white text-black"
          >
            <div className="absolute -top-10 left-0 right-0 h-10 bg-transparent " />
            <div className="absolute left-[60%] top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-tertiary rounded-md" />
            {dropdownContent}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );

  const largeScreenNavBar = (
    <>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${active === link.title ? "text-white" : "text-secondary"} font-medium md:text-xl xl:text-2xl cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            setToggle(!toggle);
          }}
        >
          <a href={`#${link.id}`} className="font-mono">
            // {t(link.title)}
          </a>
        </li>
      ))}
      {languageDropdown}
    </>
  );

  const smallScreenNavBar = (
    <>
      <img
        src={menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      />

      <div
        className={`${!toggle ? "hidden" : "flex"} p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
      >
        <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`
                      ${active === link.title ? "text-white" : "text-secondary"}
                      font-bold
                      cursor-pointer 
                      text-[19px]
                      `}
              onClick={() => {
                setActive(link.title);
                setToggle(!toggle);
              }}
            >
              <a href={`#${link.id}`} className="font-mono">
                // {t(link.title)}
              </a>
            </li>
          ))}
          {languageDropdown}
        </ul>
      </div>
    </>
  );

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary relative`}
    >
      <div className="w-full flex justify-center items-center max-w-7xl mx-auto">
        <ul className="list-none hidden lg:flex flex-row gap-12">
          {largeScreenNavBar}
        </ul>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          {smallScreenNavBar}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
