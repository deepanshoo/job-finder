import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function About() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    return () => {
      scroll.destroy();
    };
  }, []);
  const { t } = useTranslation("global");

  const sections = t("about.sections", { returnObjects: true });

  return (
    <div
      data-scroll-container
      className="bg-gradient-to-r from-sky-100 to-dkjett absolute p-8 sm:p-20 top-0 left-0 w-full"
    >
      {Object.keys(sections).map((sectionKey, index) => (
        <div
          key={index}
          className="mb-8 mt-8 py-8 sm:py-36 sm:mb-16"
          data-scroll
          data-scroll-speed="-.4"
        >
          <h1 className="transition-transform transform hover:scale-110 bebas-neue-regular text-4xl sm:text-6xl font-bold mb-4">
            {sections[sectionKey].title}
          </h1>
          {sections[sectionKey].listItems ? (
            <ul className=" poppins-medium text-md sm:text-3xl mb-6 mt-4 list-disc list-inside">
              {Object.keys(sections[sectionKey].listItems).map(
                (itemKey, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="mt-4 sm:p-4 transition-transform transform hover:scale-105"
                  >
                    {sections[sectionKey].listItems[itemKey]}
                  </li>
                )
              )}
            </ul>
          ) : (
            <p className="transition-transform transform hover:scale-105 poppins-medium text-lg sm:text-3xl mb-6">
              {sections[sectionKey].content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default About;
