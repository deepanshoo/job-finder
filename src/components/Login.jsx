import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation("global");
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <>
      <div className="bg-gradient-to-r from-sky-100 to-dkjett h-screen hover:bg-blend-darken absolute py-8 sm:py-24 top-0 left-0 w-full flex flex-col justify-center items-center">
        <div className="sm:w-full sm:max-w-md">
          <h2 className="poppins-medium capitalize mt-4 sm:mt-10 text-center text-xl sm:text-2xl font-bold leading-9 text-sky-900">
            {t("login.heading")}
          </h2>
        </div>

        <div className="mt-8 sm:mt-10 sm:w-full sm:max-w-md">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 text-left"
              >
                {t("login.label1")}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {t("login.label2")}
                </label>
                <div className="text-sm">
                  <Link
                    onClick={scrollToTop}
                    to="/"
                    className="font-semibold text-sky-900 hover:text-white"
                  >
                    {t("login.forgot")}
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <Link to="/jobs" className="w-full" onClick={scrollToTop}>
              <button
                type="submit"
                className="bg-gradient-to-r mt-8 from-sky-300 to-sky-700 hover:from-sky-500 hover:to-sky-900 flex justify-center rounded-md bg-sky-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full"
              >
                {t("login.button1")}
              </button>
            </Link>
          </form>

          <p className="mt-8 sm:mt-10 text-center text-sm text-gray-500">
            {t("login.para")}{" "}
            <Link
              to="/"
              onClick={scrollToTop}
              className="font-semibold leading-6 text-sky-700 hover:text-white"
            >
              {t("login.trial")}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
