import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import samurai from "../../public/samurai.png";
import art1 from "../../public/art1.webp";
import ramen from "../../public/ramen.png";
import sushi from "../../public/sushi.png";

function Culture() {
  const { t } = useTranslation("global");
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

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
      className="bg-gradient-to-r from-sky-100 to-dkjett absolute top-0 left-0 w-full px-4 sm:px-8 py-8"
    >
      <h1
        className="mt-8 sm:mt-20 sm:py-12 bebas-neue-regular text-4xl sm:text-7xl font-bold text-center mb-8"
        data-scroll
        data-scroll-speed="-.15"
      >
        {t("culture.heading")}
      </h1>

      <div data-scroll
        data-scroll-speed="-.2" className="flex flex-col sm:flex-row items-center justify-center my-16">
        <div className="flex-1 mb-8 sm:mb-0">
          <img src={samurai} alt="Samurai" className="max-w-full h-auto" />
        </div>
        <div className="flex-1 px-4 sm:px-0">
          <h2 className="text-3xl sm:py-12 sm:text-5xl bebas-neue-regular font-bold mb-4">
            {t("culture.samurai.heading")}
          </h2>
          <p className="poppins-medium sm:ml-4 sm:text-left text-lg sm:text-2xl mb-6">
            {t("culture.samurai.content")}
          </p>
        </div>
      </div>

      <div data-scroll
        data-scroll-speed="-.15" className="flex flex-col sm:flex-row items-center justify-center my-16">
        <div className="flex-1 px-4 sm:px-0">
          <h2 className="text-3xl sm:py-12 sm:text-5xl bebas-neue-regular font-bold mb-4">
            {t("culture.cuisine.heading")}
          </h2>
          <p className="poppins-medium sm:text-left text-lg sm:text-2xl mb-6">
            {t("culture.cuisine.content")}
          </p>
        </div>
        <div className="flex-1">
          <div className="flex-1 mb-8 sm:mb-0">
            <img src={sushi} alt="Sushi" />
          </div>
          <div>
            <img src={ramen} alt="Ramen" />
          </div>
        </div>
      </div>

      <div data-scroll
        data-scroll-speed="-.25" className="my-16 sm:p-20">
        <h2 className="text-3xl sm:text-5xl sm:py-12 bebas-neue-regular sm:px-28 font-bold mb-4">
          {t("culture.heritage.heading")}
        </h2>
        <p className="poppins-medium sm:text-left text-lg sm:text-2xl mb-6">
          {t("culture.heritage.content")}
        </p>
      </div>

      <div data-scroll
        data-scroll-speed="-.15" className="flex flex-col sm:flex-row my-16">
        <div className="flex-1 mb-8 sm:mb-0">
          <img src={art1} alt="Art" className="max-w-full h-auto" />
        </div>
        <div className="flex-1 px-4 sm:px-0">
          <h2 className="text-3xl bebas-neue-regular sm:text-5xl font-bold mb-4">
            {t("culture.arts.heading")}
          </h2>
          <p className="poppins-medium sm:ml-4 sm:text-left text-lg sm:text-2xl mb-6">
            {t("culture.arts.content")}
          </p>
        </div>
      </div>

      <div className="my-16 sm:px-20 sm:pt-20">
        <h2 className="text-3xl bebas-neue-regular sm:text-5xl font-bold mb-4">
          {t("culture.innovation.heading")}
        </h2>
        <p className="poppins-medium sm:py-12 sm:text-left text-lg sm:text-2xl">
          {t("culture.innovation.content")}
        </p>
      </div>

      <div className="text-center mt-8">
        <Link to="/" className="relative" onClick={scrollToTop}>
          <button className="bg-gradient-to-r from-sky-300 to-sky-700 hover:from-sky-500 hover:to-sky-900 text-white text-lg sm:text-2xl font-medium py-4 px-8 sm:px-12 rounded-lg shadow-lg">
            {t("culture.button")}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Culture;
