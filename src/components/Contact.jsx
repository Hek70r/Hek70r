import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion.js";
import EarthCanvas from "./canvas/Earth";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setFrom] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFrom({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const {
      VITE_SERVICE_ID,
      VITE_TEMPLATE_ID,
      VITE_MY_EMAIL,
      VITE_PUBLIC_KEY,
    } = import.meta.env;

    emailjs
      .send(
        VITE_SERVICE_ID,
        VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Wiktor B)",
          from_email: form.email,
          to_email: VITE_MY_EMAIL,
          message: form.message,
        },
        VITE_PUBLIC_KEY,
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setFrom({
          name: "",
          email: "",
          message: "",
        });
      }),
      (error) => {
        setLoading(false);
        console.log(error);
        alert("Something went wrong.");
      };
  };

  return (
    <div className="flex-col-reverse flex gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{t("getInTouch")}</p>
        <h3 className={styles.sectionHeadText}>{t("contact")}.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white fonr-medium mb-4">{t("yourName")}</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("namePlaceholder")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white fonr-medium mb-4">
              {t("yourEmail")}
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("emailPlaceholder")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white fonr-medium mb-4">
              {t("yourMessage")}
            </span>
            <textarea
              name="message"
              rows="7"
              value={form.message}
              onChange={handleChange}
              placeholder={t("messagePlaceholder")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-5 outline-none w-fit shadow-md text-white shadow-primary rounded-xl"
          >
            {loading ? t("sending") : t("send")}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
