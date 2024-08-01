/* eslint-disable react/no-unescaped-entities */
// import React from "react";

import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// css
import styles from "./Home.module.css";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// images
import hero from "../../assets/images/home/hero.jpg";
import doctor from "/public/fields/doctor.png";
import book from "/public/fields/book.png";
import sport from "/public/fields/sport.png";
import cosmetics from "/public/fields/cosmetics.png";
import restaurant from "/public/fields/restaurant.png";
import cafe from "/public/fields/cafe.png";
import clothes from "/public/fields/clothes.png";
import perfumes from "/public/fields/perfumes.png";
import shop from "/public/fields/shop.png";
import online from "/public/fields/online.png";

/*

1- مستشفى روڤان
2-مستشفى دار الشفاء 
3-مستشفى 12 خطوه
4-معامل سيدار
5-صيدليات اسامه عبد البديع
6-مركز نفادى للأشعه
7-سمارت سكان
8-محارب جيم
9-MB
10-اسلام ستور
11-فلاورز بيوتى سنتر  
12-Skin care house
13-سيلا
14-تشيكن وينز
15-دابل ديز
16-هيلث لايف
17-بيلا
18-رشة كنافه
19-Green Eyes 
20-هانيبال 
21-رويال چيت  
22-Silver Store 
23-Bun & Beat
24-السلطان ايوب
25-ستيكا
26-اكاديميه بيرفكت
27-مكتبه بنسلز
28-مكتبات البيان
29-موبيليات القاضى
30-قاعة لاڤيستا
31-////// ايڤيت
32-لولى بوب
33-Bets & Bets
34-////// صاحب السعاده
35-كراكيب
36-اكسسوارات المستر

*/

// parteners
import partener1 from "/public/parteners/1.jpg";
import partener2 from "/public/parteners/2.jpg";
import partener3 from "/public/parteners/3.jpg";
import partener4 from "/public/parteners/4.jpg";
import partener5 from "/public/parteners/5.jpg";
import partener6 from "/public/parteners/6.jpg";
import partener7 from "/public/parteners/7.jpg";
import partener8 from "/public/parteners/8.jpg";
import partener9 from "/public/parteners/9.jpg";
import partener10 from "/public/parteners/10.jpg";
import partener11 from "/public/parteners/11.jpg";
import partener12 from "/public/parteners/12.jpg";
import partener13 from "/public/parteners/13.jpg";
import partener14 from "/public/parteners/14.jpg";
import partener15 from "/public/parteners/15.jpg";
import partener16 from "/public/parteners/16.jpg";
import partener17 from "/public/parteners/17.jpg";
import partener18 from "/public/parteners/18.jpg";
import partener19 from "/public/parteners/19.jpg";
import partener20 from "/public/parteners/20.jpg";
import partener21 from "/public/parteners/21.jpg";
import partener22 from "/public/parteners/22.jpg";
import partener23 from "/public/parteners/23.jpg";
import partener24 from "/public/parteners/24.jpg";
import partener25 from "/public/parteners/25.jpg";
import partener26 from "/public/parteners/26.jpg";
import partener27 from "/public/parteners/27.jpg";
import partener28 from "/public/parteners/28.jpg";
import partener29 from "/public/parteners/29.jpg";
import partener30 from "/public/parteners/30.jpg";
import partener31 from "/public/parteners/x.jpg";
import partener32 from "/public/parteners/32.jpg";
import partener33 from "/public/parteners/33.jpg";
import partener34 from "/public/parteners/x.jpg";
import partener35 from "/public/parteners/35.jpg";
import partener36 from "/public/parteners/36.jpg";

const partners = [
  partener1,
  partener2,
  partener3,
  partener4,
  partener5,
  partener6,
  partener7,
  partener8,
  partener9,
  partener10,
  partener11,
  partener12,
  partener13,
  partener14,
  partener15,
  partener16,
  partener17,
  partener18,
  partener19,
  partener20,
  partener21,
  partener22,
  partener23,
  partener24,
  partener25,
  partener26,
  partener27,
  partener28,
  partener29,
  partener30,
  partener31,
  partener32,
  partener33,
  partener34,
  partener35,
  partener36,

  // ... add all partner image variables here
];
// carousrel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// components
import Opinions from "../../Components/Opinions/Opinions";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  largeTablet: {
    breakpoint: { max: 1200, min: 992 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 992, min: 768 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Home = () => {
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
      <div className={`${styles.aboutUs}`} id="aboutUs">
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

            <div
              className="goldenBtn"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <NavLink to="/about">
                <button className="btn m-auto my-4">{t("buttons.more")}</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.fields} py-5`} id="fields">
        <div className="customContainer">
          <div className={`${styles.allFields} my-3`}>
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
                {t("home.fields.title")}
                <span
                  className="firstLetter"
                  style={i18n.language === "ar" ? { right: 0 } : { left: 0 }}
                ></span>
              </h1>
            </div>
          </div>
        </div>

        <div className={`${styles.fieldsBody} w-100 row g-4`}>
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
            className={`${styles.opinionWrapper}`}
          >
            <div
              className={`${styles.item} d-flex flex-column align-items-center gap-3`}
              data-aos-delay="300"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <img src={doctor} alt="" />
              <h4
                className={`${
                  i18n.language === "ar" ? "semiBoldArFont" : "semiBoldEnFont"
                }`}
              >
                {t("home.fields.fieldsItems.medicalItem.title")}
              </h4>
              <p className="text-center">
                {t("home.fields.fieldsItems.medicalItem.desc")}
              </p>
            </div>
            <div
              className={`${styles.item} d-flex flex-column align-items-center gap-3`}
              data-aos-delay="600"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <img src={book} alt="" />
              <h4
                className={`${
                  i18n.language === "ar" ? "semiBoldArFont" : "semiBoldEnFont"
                }`}
              >
                {t("home.fields.fieldsItems.educationalItem.title")}
              </h4>
              <p className="text-center">
                {t("home.fields.fieldsItems.educationalItem.desc")}
              </p>
            </div>
            <div
              className={`${styles.item} d-flex flex-column align-items-center gap-3`}
              data-aos-delay="400"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <img src={sport} alt="" />
              <h4
                className={`${
                  i18n.language === "ar" ? "semiBoldArFont" : "semiBoldEnFont"
                }`}
              >
                {t("home.fields.fieldsItems.sportsItem.title")}
              </h4>
              <p className="text-center">
                {t("home.fields.fieldsItems.sportsItem.desc")}
              </p>
            </div>
            <div
              className={`${styles.item} d-flex flex-column align-items-center gap-3`}
              data-aos-delay="500"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <img src={cosmetics} alt="" />
              <h4
                className={`${
                  i18n.language === "ar" ? "semiBoldArFont" : "semiBoldEnFont"
                }`}
              >
                {t("home.fields.fieldsItems.beautyItem.title")}
              </h4>
              <p className="text-center">
                {t("home.fields.fieldsItems.beautyItem.desc")}
              </p>
            </div>
            <div
              className={`${styles.item} d-flex flex-column align-items-center gap-3`}
              data-aos-delay="500"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <img src={restaurant} alt="" />
              <h4
                className={`${
                  i18n.language === "ar" ? "semiBoldArFont" : "semiBoldEnFont"
                }`}
              >
                {t("home.fields.fieldsItems.restaurantItem.title")}
              </h4>
              <p className="text-center">
                {t("home.fields.fieldsItems.restaurantItem.desc")}
              </p>
            </div>
            <div
              className={`${styles.item} d-flex flex-column align-items-center gap-3`}
              data-aos-delay="500"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <img src={cafe} alt="" />
              <h4
                className={`${
                  i18n.language === "ar" ? "semiBoldArFont" : "semiBoldEnFont"
                }`}
              >
                {t("home.fields.fieldsItems.cafeItem.title")}
              </h4>
              <p className="text-center">
                {t("home.fields.fieldsItems.cafeItem.desc")}
              </p>
            </div>
            <div
              className={`${styles.item} d-flex flex-column align-items-center gap-3`}
              data-aos-delay="500"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <img src={clothes} alt="" />
              <h4
                className={`${
                  i18n.language === "ar" ? "semiBoldArFont" : "semiBoldEnFont"
                }`}
              >
                {t("home.fields.fieldsItems.clothesItem.title")}
              </h4>
              <p className="text-center">
                {t("home.fields.fieldsItems.clothesItem.desc")}
              </p>
            </div>
            <div
              className={`${styles.item} d-flex flex-column align-items-center gap-3`}
              data-aos-delay="500"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <img src={perfumes} alt="" />
              <h4
                className={`${
                  i18n.language === "ar" ? "semiBoldArFont" : "semiBoldEnFont"
                }`}
              >
                {t("home.fields.fieldsItems.perfumesItem.title")}
              </h4>
              <p className="text-center">
                {t("home.fields.fieldsItems.perfumesItem.desc")}
              </p>
            </div>
            <div
              className={`${styles.item} d-flex flex-column align-items-center gap-3`}
              data-aos-delay="700"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <img src={shop} alt="" />
              <h4
                className={`${
                  i18n.language === "ar" ? "semiBoldArFont" : "semiBoldEnFont"
                }`}
              >
                {t("home.fields.fieldsItems.variousItem.title")}
              </h4>
              <p className="text-center">
                {t("home.fields.fieldsItems.variousItem.desc")}
              </p>
            </div>
            <div
              className={`${styles.item} d-flex flex-column align-items-center gap-3`}
              data-aos-delay="700"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <img src={online} alt="" />
              <h4
                className={`${
                  i18n.language === "ar" ? "semiBoldArFont" : "semiBoldEnFont"
                }`}
              >
                {t("home.fields.fieldsItems.onlineItem.title")}
              </h4>
              <p className="text-center">
                {t("home.fields.fieldsItems.onlineItem.desc")}
              </p>
            </div>
          </Carousel>
        </div>

        <div
          className="goldenBtn"
          data-aos="fade-up"
          data-aos-duration="750"
          data-aos-delay="300"
        >
          <NavLink to="/fields">
            <button className="btn m-auto my-4">{t("buttons.more")}</button>
          </NavLink>
        </div>
      </div>
      <div className={`${styles.parteners}`}>
        <div className="customContainer py-5">
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
              {t("home.parteners.title")}
              <span
                className="firstLetter"
                style={i18n.language === "ar" ? { right: 0 } : { left: 0 }}
              ></span>
            </h1>
          </div>
          <div className={`${styles.allparteners} row g-2`}>
            {partners.map((partner, index) => (
              <div className="col-4 col-sm-2 col-lg-1" key={index}>
                <picture>
                  <img
                    src={partner}
                    className="w-100"
                    alt={`Partner ${index + 1}`}
                  />
                </picture>
              </div>
            ))}
          </div>

          <div className="goldenBtn" data-aos="fade-up" data-aos-duration="750">
            <NavLink to="/about">
              <button className="btn m-auto my-4">{t("buttons.more")}</button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className={`${styles.statistics} py-5`}>
        <div className="container">
          <div
            className="specialTitle mb-5"
            data-aos="fade-down"
            data-aos-duration="750"
          >
            <h1
              className={`${
                i18n.language === "ar" ? "boldArFont" : "boldEnFont"
              }`}
            >
              {t("home.statistics.title")}
              <span
                className="firstLetter"
                style={i18n.language === "ar" ? { right: 0 } : { left: 0 }}
              ></span>
            </h1>
          </div>
          <div className={`${styles.allStatistics} row g-5`}>
            <div
              className={`${styles.item} col-md-4 d-flex flex-column align-items-center justify-content-center`}
              data-aos-delay="300"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <div className={`${styles.number} d-flex align-items-end gap-1`}>
                <h1>{t("home.statistics.items.surveyItem.number")}</h1>
              </div>
              <p>{t("home.statistics.items.surveyItem.title")}</p>
            </div>
            <div
              className={`${styles.item} col-md-4 d-flex flex-column align-items-center justify-content-center`}
              data-aos-delay="400"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <div className={`${styles.number} d-flex align-items-end gap-1`}>
                <h1>{t("home.statistics.items.partenersItem.number")}</h1>
              </div>
              <p>{t("home.statistics.items.partenersItem.title")}</p>
            </div>
            <div
              className={`${styles.item} col-md-4 d-flex flex-column align-items-center justify-content-center`}
              data-aos-delay="600"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <div className={`${styles.number} d-flex align-items-end gap-1`}>
                <h1>{t("home.statistics.items.servicesItem.number")}</h1>
              </div>
              <p>{t("home.statistics.items.servicesItem.title")}</p>
            </div>
          </div>
        </div>
      </div>
      <Opinions />
      <div
        className="goldenBtn mb-5"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <NavLink to="/testmonials">
          <button className="btn m-auto my-4">{t("buttons.more")}</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
