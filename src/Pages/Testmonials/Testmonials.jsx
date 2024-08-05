// import React from 'react'
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// components
import Opinions from "../../Components/Opinions/Opinions";

// images
import hero from "../../assets/images/testmonials/hero.jpg";

const Testmonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Scroll to the top when the component is mounted or re-rendered
    AOS.init({
      easing: "linear",
      delay: 300,
      duration: 600,
    });
  }, []);
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`${
        i18n.language === "ar" ? "regularArFont" : "regularEnFont"
      }`}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <Helmet>
        <title>Testmonials</title>
      </Helmet>
      <div className={`hero`}>
        <picture>
          <img src={hero} alt="" />
        </picture>
      </div>

      <Opinions />

      <div className={`py-5`}>
        <div className="customContainer">
          <div
            className="specialTitle my-2"
            data-aos="fade-down"
            data-aos-duration="750"
          >
            <h1
              className={`${
                i18n.language === "ar" ? "boldArFont" : "boldEnFont"
              }`}
            >
              {t("testmonials.FAQ.title")}
              <span
                className="firstLetter"
                style={i18n.language === "ar" ? { right: 0 } : { left: 0 }}
              ></span>
            </h1>
          </div>
        </div>
        <div className="accordion customContainer my-5" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className={`${
                  i18n.language === "ar" ? "semiBoldArFont" : "semiBoldEnFont"
                } accordion-button`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {t("testmonials.FAQ.items.q1.title")}
                <span>
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <p className="mx-4 my-3">
                {t("testmonials.FAQ.items.q1.answer")}
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className={`${
                  i18n.language === "ar" ? "semiBoldArFont" : "semiBoldEnFont"
                } accordion-button collapsed`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                {t("testmonials.FAQ.items.q2.title")}
                <span>
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <p className="mx-4 my-3">
                {t("testmonials.FAQ.items.q2.answer")}
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className={`${
                  i18n.language === "ar" ? "semiBoldArFont" : "semiBoldEnFont"
                } accordion-button collapsed`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                {t("testmonials.FAQ.items.q3.title")}
                <span>
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="mx-4 my-3">
                  {t("testmonials.FAQ.items.q3.answer")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
