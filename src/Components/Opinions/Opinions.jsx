// import React from "react";
import { useTranslation } from "react-i18next";

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

// images
import person1 from "/public/opinions/person.jpg";
import person2 from "/public/opinions/person.jpg";
import person3 from "/public/opinions/person.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  largeTablet: {
    breakpoint: { max: 1200, min: 992 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 992, min: 768 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Opinions = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="opinions py-5" id="opinions">
      <div className="container ">
        <div
          className="specialTitle my-5"
          data-aos="fade-down"
          data-aos-duration="750"
        >
          <h1
            className={`${
              i18n.language === "ar" ? "boldArFont" : "boldEnFont"
            }`}
          >
            {t("home.opinionsWrapper.title")}
            <span
              className="firstLetter"
              style={i18n.language === "ar" ? { right: 0 } : { left: 0 }}
            ></span>
          </h1>
        </div>
        <div className="allOpinions row g-3">
          <div className={`w-100 `}>
            <Carousel
              swipeable={true}
              draggable={true}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={1750}
              removeArrowOnDeviceType={[
                "desktop",
                "largeTablet",
                "tablet",
                "mobile",
              ]}
              responsive={responsive}
              dir={i18n.language === "ar" ? "rtl" : "ltr"}
              className={``}
            >
              <div
                className="item w-100 gap-2"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="300"
              >
                <div className="d-flex text-center align-items-center justify-content-center flex-column">
                  <div className="itemImg mb-3">
                    <img src={person1} alt="" />
                  </div>
                  <div className="itemContent mt-md-0 mt-3">
                    <h6
                      className={`${
                        i18n.language === "ar"
                          ? "semiBoldArFont"
                          : "semiBoldEnFont"
                      }`}
                    >
                      {t("home.opinionsWrapper.opinions.person1.name")}
                    </h6>
                    <p
                      className={`${
                        i18n.language === "ar" ? "mediumArFont" : "mediumEnFont"
                      }`}
                    >
                      {t("home.opinionsWrapper.opinions.person1.jobTitle")}
                    </p>
                  </div>
                </div>
                <div
                  className="mainContent col-12 mx-auto"
                  data-aos="fade-up"
                  data-aos-duration="750"
                >
                  <p className={`${i18n.language === "ar" ? "semiBoldArFont" : "semiBoldEnFont"} text-center w-75  mx-auto my-2`}>
                    {t(
                      "home.opinionsWrapper.opinions.person1.opinionDescription"
                    )}
                  </p>
                </div>
              </div>
              <div
                className="item w-100 gap-2"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="300"
              >
                <div className="d-flex text-center align-items-center justify-content-center flex-column">
                  <div className="itemImg mb-3">
                    <img src={person2} alt="" />
                  </div>
                  <div className="itemContent mt-md-0 mt-3">
                    <h6
                      className={`${
                        i18n.language === "ar"
                          ? "semiBoldArFont"
                          : "semiBoldEnFont"
                      }`}
                    >
                      {t("home.opinionsWrapper.opinions.person1.name")}
                    </h6>
                    <p
                      className={`${
                        i18n.language === "ar" ? "mediumArFont" : "mediumEnFont"
                      }`}
                    >
                      {t("home.opinionsWrapper.opinions.person1.jobTitle")}
                    </p>
                  </div>
                </div>
                <div
                  className="mainContent col-12 mx-auto"
                  data-aos="fade-up"
                  data-aos-duration="750"
                >
                  <p className={`${i18n.language === "ar" ? "semiBoldArFont" : "semiBoldEnFont"} text-center w-75  mx-auto my-2`}>
                    {t(
                      "home.opinionsWrapper.opinions.person1.opinionDescription"
                    )}
                  </p>
                </div>
              </div>
              <div
                className="item w-100 gap-2"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="300"
              >
                <div className="d-flex text-center align-items-center justify-content-center flex-column">
                  <div className="itemImg mb-3">
                    <img src={person3} alt="" />
                  </div>
                  <div className="itemContent mt-md-0 mt-3">
                    <h6
                      className={`${
                        i18n.language === "ar"
                          ? "semiBoldArFont"
                          : "semiBoldEnFont"
                      }`}
                    >
                      {t("home.opinionsWrapper.opinions.person1.name")}
                    </h6>
                    <p
                      className={`${
                        i18n.language === "ar" ? "mediumArFont" : "mediumEnFont"
                      }`}
                    >
                      {t("home.opinionsWrapper.opinions.person1.jobTitle")}
                    </p>
                  </div>
                </div>
                <div
                  className="mainContent col-12 mx-auto"
                  data-aos="fade-up"
                  data-aos-duration="750"
                >
                  <p className={`${i18n.language === "ar" ? "semiBoldArFont" : "semiBoldEnFont"} text-center w-75  mx-auto my-2`}>
                    {t(
                      "home.opinionsWrapper.opinions.person1.opinionDescription"
                    )}
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinions;
