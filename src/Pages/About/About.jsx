// import React from 'react'
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// css
import styles from "./About.module.css";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// images
import hero from "../../assets/images/about/hero.jpg";
import save from "../../assets/images/about/save.png";
import offers from "../../assets/images/about/offers.png";
import benefits from "../../assets/images/about/benefits.png";
import city from "../../assets/images/about/city.png";

const About = () => {
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
      <div className={`hero`}>
        <picture>
          <img src={hero} alt="" />
        </picture>
      </div>
      <div className={`${styles.aboutUs} py-3`} id="aboutUs">
        <div className="customContainer py-5">
          <div className={`${styles.aboutUsContent}`}>
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
                {t("home.about.title")}
                <span
                  className="firstLetter"
                  style={i18n.language === "ar" ? { right: 0 } : { left: 0 }}
                ></span>
              </h1>
            </div>
            <p className="mx-auto" data-aos="fade-up" data-aos-duration="750">
              {t("home.about.desc")}
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.whyChooseUs} py-5`}>
        <div className="customContainer">
          <div
            className="specialTitle mt-2 mb-5"
            data-aos="fade-down"
            data-aos-duration="750"
          >
            <h1
              className={`${
                i18n.language === "ar" ? "boldArFont" : "boldEnFont"
              }`}
            >
              {t("about.choose.title")}
              <span
                className="firstLetter"
                style={i18n.language === "ar" ? { right: 0 } : { left: 0 }}
              ></span>
            </h1>
          </div>
          <div className="row justify-content-center g-3 gap-4">
            <div
              className={`${styles.item} col-lg-5 d-flex flex-column align-items-center`}
              data-aos="fade-right"
              data-aos-duration="750"
            >
              <div className={`${styles.itemImg} my-4`}>
                <img src={save} alt="" />
              </div>
              <div className={`${styles.itemContent}`}>
                <h3
                  className={`${
                    i18n.language === "ar" ? "mediumArFont" : "mediumEnFont"
                  }`}
                >
                  {t("about.choose.items.save.title")}
                </h3>
                <p>{t("about.choose.items.save.desc")}</p>
              </div>
            </div>
            <div
              className={`${styles.item} col-lg-5 d-flex flex-column align-items-center`}
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <div className={`${styles.itemImg} my-4`}>
                <img src={offers} alt="" />
              </div>
              <div className={`${styles.itemContent}`}>
                <h3
                  className={`${
                    i18n.language === "ar" ? "mediumArFont" : "mediumEnFont"
                  }`}
                >
                  {t("about.choose.items.offers.title")}
                </h3>
                <p>{t("about.choose.items.offers.desc")}</p>
              </div>
            </div>
            <div
              className={`${styles.item} col-lg-5 d-flex flex-column align-items-center`}
              data-aos="fade-right"
              data-aos-duration="750"
            >
              <div className={`${styles.itemImg} my-4`}>
                <img src={benefits} alt="" />
              </div>
              <div className={`${styles.itemContent}`}>
                <h3
                  className={`${
                    i18n.language === "ar" ? "mediumArFont" : "mediumEnFont"
                  }`}
                >
                  {t("about.choose.items.benefits.title")}
                </h3>
                <p>{t("about.choose.items.benefits.desc")}</p>
              </div>
            </div>
            <div
              className={`${styles.item} col-lg-5 d-flex flex-column align-items-center`}
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <div className={`${styles.itemImg} my-4`}>
                <img src={city} alt="" />
              </div>
              <div className={`${styles.itemContent}`}>
                <h3
                  className={`${
                    i18n.language === "ar" ? "mediumArFont" : "mediumEnFont"
                  }`}
                >
                  {t("about.choose.items.map.title")}
                </h3>
                <p>{t("about.choose.items.map.desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              {t("about.implement.title")}
              <span
                className="firstLetter"
                style={i18n.language === "ar" ? { right: 0 } : { left: 0 }}
              ></span>
            </h1>
          </div>
          <p className="text-center" data-aos="fade-up" data-aos-duration="750">
            {t("about.implement.desc")}
          </p>
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
                {t("about.implement.items.goals.title")}
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
              <ol className="accordion-body">
                <li className="mx-4">
                  {t("about.implement.items.goals.points.point1")}
                </li>
                <li className="mx-4">
                  {t("about.implement.items.goals.points.point2")}
                </li>
                <li className="mx-4">
                  {t("about.implement.items.goals.points.point3")}
                </li>
                <li className="mx-4">
                  {t("about.implement.items.goals.points.point4")}
                </li>
              </ol>
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
                {t("about.implement.items.values.title")}
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
              <ol className="accordion-body">
                <li className="mx-4">
                  {t("about.implement.items.goals.points.point1")}
                </li>
                <li className="mx-4">
                  {t("about.implement.items.goals.points.point2")}
                </li>
                <li className="mx-4">
                  {t("about.implement.items.goals.points.point3")}
                </li>
                <li className="mx-4">
                  {t("about.implement.items.goals.points.point4")}
                </li>
              </ol>
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
                {t("about.implement.items.message.title")}
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
                {t("about.implement.items.message.desc")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
