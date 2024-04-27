import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation("global");

  const handleChangeLanguage = () => {
    const newLang = i18n.language === "en" ? "jp" : "en";
    i18n.changeLanguage(newLang);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const menuItems = [
    { key: "displayName1", routeName: "jobs" },
    { key: "displayName2", routeName: "culture" },
    { key: "displayName3", routeName: "about" },
    { key: "displayName4", routeName: "contact" },
  ];
  console.log("Navbar title:", t("navbar.title"));
  console.log("Navbar translate:", t("navbar.translate"));
  menuItems.forEach((item, index) => {
    console.log(`Menu item ${index + 1}:`, t(`navbar.menuItems.${item.key}`));
  });
  return (
    <div className="fixed top-0 left-0 w-full backdrop-blur-sm z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" onClick={scrollToTop}>
              <motion.div
                whileHover={{ textPosition: "200% 0%", scale: 1.05 }}
                transition={{ type: "tween", duration: 0.45 }}
                className="text-dkjett text-lg pl-4 sm:p-4 sm:text-5xl hover:text-ult font-bold bebas-neue-regular"
              >
                {t("navbar.title")}
              </motion.div>
            </Link>
          </div>
          <div className="hidden sm:flex items-center poppins-medium">
            {menuItems.map((item, index) => (
              <Link
                onClick={scrollToTop}
                key={index}
                to={`/${item.routeName}`}
                className="transition-transform transform hover:scale-110 text-white hover:text-blue-800 px-3 py-2 mr-4 text-xl font-medium capitalize"
              >
                {t(`navbar.menuItems.${item.key}`)}
              </Link>
            ))}
            <button
              onClick={handleChangeLanguage}
              className="text-white text-lg bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-dkjett transition-colors"
            >
              {t("navbar.translate")}
            </button>
          </div>
          <div className="sm:hidden mr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden ">
            <div className="flex flex-col items-center poppins-medium">
              {menuItems.map((item, index) => (
                <Link
                  onClick={scrollToTop}
                  key={index}
                  to={`/${item.routeName}`}
                  className="text-white  hover:text-blue-800 px-3 py-1 text-xs font-medium capitalize"
                >
                  {t(`navbar.menuItems.${item.key}`)}
                </Link>
              ))}
              <button
                onClick={handleChangeLanguage}
                className="text-xs text-white bg-transparent border border-white px-2 rounded-lg hover:bg-white hover:text-dkjett transition-colors"
              >
                {t("navbar.translate")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
