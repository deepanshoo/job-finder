import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation("global");

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div
      data-scroll-container
      className="bg-gradient-to-r from-sky-100 to-dkjett absolute p-8 sm:p-28 top-0 left-0 w-full min-h-screen"
    >
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="mt-20 sm:mt-0 text-4xl sm:text-6xl bebas-neue-regular mb-8">
          {t("contact.heading")}
        </h1>
        <ul className="poppins-medium text-lg sm:text-3xl mb-8 mt-4 list-disc list-inside text-left">
          <li className="mt-4">
            <strong>{t("contact.email.label")} :</strong>{" "}
            {t("contact.email.value")}
          </li>
          <li className="mt-4">
            <strong>{t("contact.phone.label")} :</strong>{" "}
            {t("contact.phone.value")}
          </li>
          <li className="mt-4">
            <strong>{t("contact.address.label")} :</strong>{" "}
            {t("contact.address.value")}
          </li>
        </ul>
        <p className="poppins-medium text-lg sm:text-3xl mb-8 mt-8 italic">
          {t("contact.follow")}{" "}
          <a href={t("contact.twitterLink")}>{t("contact.twitter")}</a>{" "}
          {t("contact.follow")}{" "}
          <a href={t("contact.linkedinLink")}>{t("contact.linkedin")}</a>{" "}
          {t("contact.for updates and news.")}
        </p>
      </div>
    </div>
  );
}

export default Contact;
