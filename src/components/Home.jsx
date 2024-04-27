import { useEffect } from "react";
import { Link } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import { useTranslation } from "react-i18next";

const Home = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    return () => {
      scroll.destroy();
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const { t } = useTranslation("global");

  return (
    <div
      data-scroll-container
      className="bg-gradient-to-r top-0 left-0 from-sky-100 to-dkjett min-h-screen absolute w-full"
    >
      <div
        data-scroll
        data-scroll-speed="-0.6"
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between mx-4 sm:mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16"
      >
        <div className="flex flex-col mt-4 sm:m-12 sm:mb-0">
          <p className="bebas-neue-regular text-left font-bold mt-4 text-4xl sm:text-8xl">
            {t("home.para1")}
          </p>
          <p className="bebas-neue-regular text-left font-bold mt-4 text-4xl sm:text-8xl">
            {t("home.para2")}
          </p>
          <p className="bebas-neue-regular text-left font-bold mt-4 text-4xl sm:text-8xl">
            {t("home.para3")}
          </p>
          <p className="bebas-neue-regular text-left font-bold mt-4 text-4xl sm:text-8xl">
            {t("home.para4")}
          </p>
        </div>
        <Link to="/login" className="relative" onClick={scrollToTop}>
          <button className="bg-gradient-to-r from-sky-300 to-sky-700 hover:from-sky-500 hover:to-sky-900 text-white text-sm sm:text-2xl font-medium p-2 sm:p-4 rounded-lg shadow-lg ml-40 sm:mt-0">
            {t("home.button1")}
          </button>
        </Link>
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1599173705513-0880f530cd3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Job Search"
          className="w-full mt-32 h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="bebas-neue-regular text-2xl sm:text-6xl capitalize text-white font-bold mt-8">
            {t("home.heading")}
          </h1>
          <Link to="/jobs" onClick={scrollToTop}>
            <button className="bg-gradient-to-r from-sky-300 to-sky-700 mt-4 hover:from-sky-500 hover:to-sky-900 text-white text-sm sm:text-2xl font-medium p-2 sm:p-4 rounded-lg shadow-lg sm:mt-8">
              {t("home.button2")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
