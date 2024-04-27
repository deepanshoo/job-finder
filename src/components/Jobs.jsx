import { useState, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
function Jobs() {
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

  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    fetch("db.json")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data.jobs);
        setFilteredJobs(data.jobs);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const titleMatch = job.title
        .toLowerCase()
        .includes(titleFilter.toLowerCase());
      const locationMatch = job.location
        .toLowerCase()
        .includes(locationFilter.toLowerCase());
      return titleMatch && locationMatch;
    });
    setFilteredJobs(filtered);
  }, [jobs, titleFilter, locationFilter]);

  return (
    <div
      data-scroll-container
      className="bg-gradient-to-r from-sky-100 to-dkjett absolute p-8 sm:p-28 top-0 left-0 w-full"
    >
      <motion.h1
        whileHover={{ textPosition: "200% 0%", scale: 1.05 }}
        transition={{ type: "tween", duration: 0.45 }}
        className="bebas-neue-regular mt-12 text-4xl p-2 sm:text-6xl font-bold text-center mb-4"
      >
        {t("jobs.title")}
      </motion.h1>
      <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
        <motion.input
          type="text"
          placeholder={t("jobs.filterByJob")}
          whileHover={{ scale: 1.1 }}
          value={titleFilter}
          onChange={(e) => setTitleFilter(e.target.value)}
          className="mb-4 sm:mb-0 mr-0 sm:mr-4 p-2 poppins-medium rounded-md shadow-xl"
        />
        <motion.input
          type="text"
          whileHover={{ scale: 1.1 }}
          placeholder={t("jobs.filterByLocation")}
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="p-2 poppins-medium rounded-md shadow-xl"
        />
      </div>
      <Link to="/about" onClick={scrollToTop}>
        <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1">
          {filteredJobs.map((job, index) => (
            <Link key={job.id} to="/" className="relative">
              <motion.div
                whileHover={{ backgroundPosition: "200% 0%", scale: 1.05 }}
                transition={{ type: "tween", duration: 0.45 }}
                className="z-4 poppins-medium shadow-lg m-2 bg-gradient-to-r from-white to-white text-black text-left p-4 border rounded-lg"
                style={{
                  background: "linear-gradient(to right, #219ebc,#ffffff )",
                  backgroundSize: "200% 100%",
                }}
              >
                <h2 className="text-lg mb-2">
                  <strong>{t("jobs.post")} :</strong>{" "}
                  {t(`jobs.job.${index + 1}.title`)}
                </h2>
                <p className="text-lg mb-2">
                  <strong>{t("jobs.company")} :</strong>
                  {t(`jobs.job.${index + 1}.company`)}
                </p>
                <p className="text-lg mb-2">
                  <strong>{t("jobs.location")} :</strong>
                  {t(`jobs.job.${index + 1}.location`)}
                </p>
                <p className="text-lg mb-2">
                  <strong>{t("jobs.jobDescription")} :</strong>{" "}
                  {t(`jobs.job.${index + 1}.description`)}
                </p>
                <p className="text-lg">
                  <strong>{t("jobs.datePosted")} :</strong>{" "}
                  {t(`jobs.job.${index + 1}.date_posted`)}
                </p>
                <hr className="my-4" />
              </motion.div>
            </Link>
          ))}
        </div>
      </Link>
    </div>
  );
}

export default Jobs;
