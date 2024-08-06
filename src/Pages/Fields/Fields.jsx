// import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

// css
import styles from "./Fields.module.css";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// images
import hero from "../../assets/images/fields/hero.jpg";

const medicalBrands = [
  {
    src: "cates/medical/1.jpg",
    commentKey: "fields.category.medical.brands.brand1.comment",
  },
  {
    src: "cates/medical/2.jpg",
    commentKey: "fields.category.medical.brands.brand2.comment",
  },
  {
    src: "cates/medical/3.jpg",
    commentKey: "fields.category.medical.brands.brand3.comment",
  },
  {
    src: "cates/medical/4.jpg",
    commentKey: "fields.category.medical.brands.brand4.comment",
  },
  {
    src: "cates/medical/5.jpg",
    commentKey: "fields.category.medical.brands.brand5.comment",
  },
  {
    src: "cates/medical/6.jpg",
    commentKey: "fields.category.medical.brands.brand6.comment",
  },
  {
    src: "cates/medical/7.jpg",
    commentKey: "fields.category.medical.brands.brand7.comment",
  },
  {
    src: "cates/medical/8.jpg",
    commentKey: "fields.category.medical.brands.brand8.comment",
  },
  {
    src: "cates/medical/9.jpg",
    commentKey: "fields.category.medical.brands.brand9.comment",
  },
  {
    src: "cates/medical/10.jpg",
    commentKey: "fields.category.medical.brands.brand10.comment",
  },
  {
    src: "cates/medical/11.jpg",
    commentKey: "fields.category.medical.brands.brand11.comment",
  },
  {
    src: "cates/medical/12.jpg",
    commentKey: "fields.category.medical.brands.brand12.comment",
  },
  {
    src: "cates/medical/13.jpg",
    commentKey: "fields.category.medical.brands.brand13.comment",
  },
  {
    src: "cates/medical/14.jpg",
    commentKey: "fields.category.medical.brands.brand14.comment",
  },
  {
    src: "cates/medical/15.jpg",
    commentKey: "fields.category.medical.brands.brand15.comment",
  },
  {
    src: "cates/medical/16.jpg",
    commentKey: "fields.category.medical.brands.brand16.comment",
  },
  {
    src: "cates/medical/17.jpg",
    commentKey: "fields.category.medical.brands.brand17.comment",
  },
];

const educationalBrands = [
  {
    src: "cates/edu/1.jpg",
    commentKey: "fields.category.educational.brands.brand1.comment",
  },
  {
    src: "cates/edu/2.jpg",
    commentKey: "fields.category.educational.brands.brand2.comment",
  },
  {
    src: "cates/edu/3.jpg",
    commentKey: "fields.category.educational.brands.brand3.comment",
  },
  {
    src: "cates/edu/4.jpg",
    commentKey: "fields.category.educational.brands.brand4.comment",
  },
];

const sportsBrands = [
  {
    src: "cates/sport/1.jpg",
    commentKey: "fields.category.sports.brands.brand1.comment",
  },
  {
    src: "cates/sport/2.jpg",
    commentKey: "fields.category.sports.brands.brand2.comment",
  },
  {
    src: "cates/sport/3.jpg",
    commentKey: "fields.category.sports.brands.brand3.comment",
  },
  {
    src: "cates/sport/4.jpg",
    commentKey: "fields.category.sports.brands.brand4.comment",
  },
];

const perfumesBeautyBrands = [
  {
    src: "cates/beauty/1.jpg",
    commentKey: "fields.category.perfumesBeauty.brands.brand1.comment",
  },
  {
    src: "cates/beauty/2.jpg",
    commentKey: "fields.category.perfumesBeauty.brands.brand2.comment",
  },
  {
    src: "cates/beauty/3.jpg",
    commentKey: "fields.category.perfumesBeauty.brands.brand3.comment",
  },
  {
    src: "cates/beauty/4.jpg",
    commentKey: "fields.category.perfumesBeauty.brands.brand4.comment",
  },
  {
    src: "cates/beauty/5.jpg",
    commentKey: "fields.category.perfumesBeauty.brands.brand5.comment",
  },
  {
    src: "cates/beauty/6.jpg",
    commentKey: "fields.category.perfumesBeauty.brands.brand6.comment",
  },
  {
    src: "cates/beauty/7.jpg",
    commentKey: "fields.category.perfumesBeauty.brands.brand7.comment",
  },
  {
    src: "cates/beauty/8.jpg",
    commentKey: "fields.category.perfumesBeauty.brands.brand8.comment",
  },
];

const cafeRestaurantBrands = [
  {
    src: "cates/resturant/1.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand1.comment",
  },
  {
    src: "cates/resturant/2.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand2.comment",
  },
  {
    src: "cates/resturant/3.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand3.comment",
  },
  {
    src: "cates/resturant/4.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand4.comment",
  },
  {
    src: "cates/resturant/5.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand5.comment",
  },
  {
    src: "cates/resturant/6.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand6.comment",
  },
  {
    src: "cates/resturant/7.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand7.comment",
  },
  {
    src: "cates/resturant/8.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand8.comment",
  },
  {
    src: "cates/resturant/9.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand9.comment",
  },
  {
    src: "cates/resturant/10.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand10.comment",
  },
  {
    src: "cates/resturant/11.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand11.comment",
  },
  {
    src: "cates/resturant/12.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand12.comment",
  },
  {
    src: "cates/resturant/13.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand13.comment",
  },
  {
    src: "cates/resturant/14.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand14.comment",
  },
  {
    src: "cates/resturant/15.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand15.comment",
  },
  {
    src: "cates/resturant/16.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand16.comment",
  },
  {
    src: "cates/resturant/17.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand17.comment",
  },
  {
    src: "cates/resturant/18.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand18.comment",
  },
  {
    src: "cates/resturant/19.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand19.comment",
  },
  {
    src: "cates/resturant/20.jpg",
    commentKey: "fields.category.cafeRestaurant.brands.brand20.comment",
  },
];

const clothesBrands = [
  {
    src: "cates/clothes/1.jpg",
    commentKey: "fields.category.clothes.brands.brand1.comment",
  },
  {
    src: "cates/clothes/2.jpg",
    commentKey: "fields.category.clothes.brands.brand2.comment",
  },
  {
    src: "cates/clothes/3.jpg",
    commentKey: "fields.category.clothes.brands.brand3.comment",
  },
  {
    src: "cates/clothes/4.jpg",
    commentKey: "fields.category.clothes.brands.brand4.comment",
  },
  {
    src: "cates/clothes/5.jpg",
    commentKey: "fields.category.clothes.brands.brand5.comment",
  },
  {
    src: "cates/clothes/6.jpg",
    commentKey: "fields.category.clothes.brands.brand6.comment",
  },
  {
    src: "cates/clothes/7.jpg",
    commentKey: "fields.category.clothes.brands.brand7.comment",
  },
  {
    src: "cates/clothes/8.jpg",
    commentKey: "fields.category.clothes.brands.brand8.comment",
  },
  {
    src: "cates/clothes/9.jpg",
    commentKey: "fields.category.clothes.brands.brand9.comment",
  },
];

const variousBrands = [
  {
    src: "cates/various/1.jpg",
    commentKey: "fields.category.various.brands.brand1.comment",
  },
  {
    src: "cates/various/2.jpg",
    commentKey: "fields.category.various.brands.brand2.comment",
  },
  {
    src: "cates/various/3.jpg",
    commentKey: "fields.category.various.brands.brand3.comment",
  },
  {
    src: "cates/various/4.jpg",
    commentKey: "fields.category.various.brands.brand4.comment",
  },
  {
    src: "cates/various/5.jpg",
    commentKey: "fields.category.various.brands.brand5.comment",
  },
  {
    src: "cates/various/6.jpg",
    commentKey: "fields.category.various.brands.brand6.comment",
  },
  {
    src: "cates/various/7.jpg",
    commentKey: "fields.category.various.brands.brand7.comment",
  },
  {
    src: "cates/various/8.jpg",
    commentKey: "fields.category.various.brands.brand8.comment",
  },
  {
    src: "cates/various/9.jpg",
    commentKey: "fields.category.various.brands.brand9.comment",
  },
  {
    src: "cates/various/10.jpg",
    commentKey: "fields.category.various.brands.brand10.comment",
  },
  {
    src: "cates/various/11.jpg",
    commentKey: "fields.category.various.brands.brand11.comment",
  },
  {
    src: "cates/various/12.jpg",
    commentKey: "fields.category.various.brands.brand12.comment",
  },
  {
    src: "cates/various/13.jpg",
    commentKey: "fields.category.various.brands.brand13.comment",
  },
];

const onlineBrands = [
  {
    src: "cates/online/1.jpg",
    commentKey: "fields.category.online.brands.brand1.comment",
  },
  {
    src: "cates/online/2.jpg",
    commentKey: "fields.category.online.brands.brand2.comment",
  },
  {
    src: "cates/online/3.jpg",
    commentKey: "fields.category.online.brands.brand3.comment",
  },
];

const Fields = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // Scroll to the top when the component is mounted or re-rendered
    AOS.init({
      easing: "linear",
      delay: 300,
      duration: 600,
    });
    const hash = location.hash.replace("#", "");
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`${
        i18n.language === "ar" ? "regularArFont" : "regularEnFont"
      }`}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <Helmet>
        <title>Fields</title>
      </Helmet>
      <div className="hero">
        <picture>
          <img src={hero} alt="" />
        </picture>
      </div>

      <div className={`${styles.allFields} py-5`}>
        <div className="customContainer">
          {/* medical */}
          <div className={`${styles.fieldItem} my-5 pt-5`} id="medical">
            <div
              className="specialTitle mt-2 mb-5"
              data-aos="fade-down"
              data-aos-duration="750"
            >
              <h1
                className={`h2 ${
                  i18n.language === "ar" ? "boldArFont" : "boldEnFont"
                }`}
              >
                {t("fields.category.medical.title")}
                <span
                  className="firstLetter"
                  style={i18n.language === "ar" ? { right: 0 } : { left: 0 }}
                ></span>
              </h1>
              <p
                className={`${
                  i18n.language === "ar" ? "mediumArFont" : "mediumEnFont"
                } mt-4`}
              >
                {t("fields.category.medical.desc")}
              </p>
              <div className={`${styles.fieldBody} row my-5 g-0`}>
                {medicalBrands.map((brand, index) => (
                  <div
                    key={index}
                    className={`${styles.brand} col-lg-4 col-md-6`}
                  >
                    <img src={brand.src} className="w-100 d-block" alt="" />
                    <div className={`${styles.brandBody} p-5`}>
                      <p>{t(brand.commentKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Educational */}
          <div className={`${styles.fieldItem} my-5 pt-5`} id="educational">
            <div
              className="specialTitle mt-2 mb-5"
              data-aos="fade-down"
              data-aos-duration="750"
            >
              <h1
                className={`h2 ${
                  i18n.language === "ar" ? "boldArFont" : "boldEnFont"
                }`}
              >
                {t("fields.category.educational.title")}
                <span
                  className="firstLetter"
                  style={i18n.language === "ar" ? { right: 0 } : { left: 0 }}
                ></span>
              </h1>
              <p
                className={`${
                  i18n.language === "ar" ? "mediumArFont" : "mediumEnFont"
                } mt-4`}
              >
                {t("fields.category.educational.desc")}
              </p>
              <div className={`${styles.fieldBody} row my-5 g-0`}>
                {educationalBrands.map((brand, index) => (
                  <div
                    key={index}
                    className={`${styles.brand} col-lg-4 col-md-6`}
                  >
                    <img src={brand.src} className="w-100 d-block" alt="" />
                    <div className={`${styles.brandBody} p-5`}>
                      <p>{t(brand.commentKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Sports */}
          <div className={`${styles.fieldItem} my-5 pt-5`} id="sports">
            <div
              className="specialTitle mt-2 mb-5"
              data-aos="fade-down"
              data-aos-duration="750"
            >
              <h1
                className={`h2 ${
                  i18n.language === "ar" ? "boldArFont" : "boldEnFont"
                }`}
              >
                {t("fields.category.sports.title")}
                <span
                  className="firstLetter"
                  style={i18n.language === "ar" ? { right: 0 } : { left: 0 }}
                ></span>
              </h1>
              <p
                className={`${
                  i18n.language === "ar" ? "mediumArFont" : "mediumEnFont"
                } mt-4`}
              >
                {t("fields.category.sports.desc")}
              </p>
              <div className={`${styles.fieldBody} row my-5 g-0`}>
                {sportsBrands.map((brand, index) => (
                  <div
                    key={index}
                    className={`${styles.brand} col-lg-4 col-md-6`}
                  >
                    <img src={brand.src} className="w-100 d-block" alt="" />
                    <div className={`${styles.brandBody} p-5`}>
                      <p>{t(brand.commentKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Beauty and Perfumes */}
          <div className={`${styles.fieldItem} my-5 pt-5`} id="beauty">
            <div
              className="specialTitle mt-2 mb-5"
              data-aos="fade-down"
              data-aos-duration="750"
            >
              <h1
                className={`h2 ${
                  i18n.language === "ar" ? "boldArFont" : "boldEnFont"
                }`}
              >
                {t("fields.category.perfumesBeauty.title")}
                <span
                  className="firstLetter"
                  style={i18n.language === "ar" ? { right: 0 } : { left: 0 }}
                ></span>
              </h1>
              <p
                className={`${
                  i18n.language === "ar" ? "mediumArFont" : "mediumEnFont"
                } mt-4`}
              >
                {t("fields.category.perfumesBeauty.desc")}
              </p>
              <div className={`${styles.fieldBody} row my-5 g-0`}>
                {perfumesBeautyBrands.map((brand, index) => (
                  <div
                    key={index}
                    className={`${styles.brand} col-lg-4 col-md-6`}
                  >
                    <img src={brand.src} className="w-100 d-block" alt="" />
                    <div className={`${styles.brandBody} p-5`}>
                      <p>{t(brand.commentKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Restaurant and Cafe */}
          <div className={`${styles.fieldItem} my-5 pt-5`} id="restaurant">
            <div
              className="specialTitle mt-2 mb-5"
              data-aos="fade-down"
              data-aos-duration="750"
            >
              <h1
                className={`h2 ${
                  i18n.language === "ar" ? "boldArFont" : "boldEnFont"
                }`}
              >
                {t("fields.category.cafeRestaurant.title")}
                <span
                  className="firstLetter"
                  style={i18n.language === "ar" ? { right: 0 } : { left: 0 }}
                ></span>
              </h1>
              <p
                className={`${
                  i18n.language === "ar" ? "mediumArFont" : "mediumEnFont"
                } mt-4`}
              >
                {t("fields.category.cafeRestaurant.desc")}
              </p>
              <div className={`${styles.fieldBody} row my-5 g-0`}>
                {cafeRestaurantBrands.map((brand, index) => (
                  <div
                    key={index}
                    className={`${styles.brand} col-lg-4 col-md-6`}
                  >
                    <img src={brand.src} className="w-100 d-block" alt="" />
                    <div className={`${styles.brandBody} p-5`}>
                      <p>{t(brand.commentKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Clothes */}
          <div className={`${styles.fieldItem} my-5 pt-5`} id="clothes">
            <div
              className="specialTitle mt-2 mb-5"
              data-aos="fade-down"
              data-aos-duration="750"
            >
              <h1
                className={`h2 ${
                  i18n.language === "ar" ? "boldArFont" : "boldEnFont"
                }`}
              >
                {t("fields.category.clothes.title")}
                <span
                  className="firstLetter"
                  style={i18n.language === "ar" ? { right: 0 } : { left: 0 }}
                ></span>
              </h1>
              <p
                className={`${
                  i18n.language === "ar" ? "mediumArFont" : "mediumEnFont"
                } mt-4`}
              >
                {t("fields.category.clothes.desc")}
              </p>
              <div className={`${styles.fieldBody} row my-5 g-0`}>
                {clothesBrands.map((brand, index) => (
                  <div
                    key={index}
                    className={`${styles.brand} col-lg-4 col-md-6`}
                  >
                    <img src={brand.src} className="w-100 d-block" alt="" />
                    <div className={`${styles.brandBody} p-5`}>
                      <p>{t(brand.commentKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Various */}
          <div className={`${styles.fieldItem} my-5 pt-5`} id="various">
            <div
              className="specialTitle mt-2 mb-5"
              data-aos="fade-down"
              data-aos-duration="750"
            >
              <h1
                className={`h2 ${
                  i18n.language === "ar" ? "boldArFont" : "boldEnFont"
                }`}
              >
                {t("fields.category.various.title")}
                <span
                  className="firstLetter"
                  style={i18n.language === "ar" ? { right: 0 } : { left: 0 }}
                ></span>
              </h1>
              <p
                className={`${
                  i18n.language === "ar" ? "mediumArFont" : "mediumEnFont"
                } mt-4`}
              >
                {t("fields.category.various.desc")}
              </p>
              <div className={`${styles.fieldBody} row my-5 g-0`}>
                {variousBrands.map((brand, index) => (
                  <div
                    key={index}
                    className={`${styles.brand} col-lg-4 col-md-6`}
                  >
                    <img src={brand.src} className="w-100 d-block" alt="" />
                    <div className={`${styles.brandBody} p-5`}>
                      <p>{t(brand.commentKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Online */}
          <div className={`${styles.fieldItem} my-5 pt-5`} id="online">
            <div
              className="specialTitle mt-2 mb-5"
              data-aos="fade-down"
              data-aos-duration="750"
            >
              <h1
                className={`h2 ${
                  i18n.language === "ar" ? "boldArFont" : "boldEnFont"
                }`}
              >
                {t("fields.category.online.title")}
                <span
                  className="firstLetter"
                  style={i18n.language === "ar" ? { right: 0 } : { left: 0 }}
                ></span>
              </h1>
              <p
                className={`${
                  i18n.language === "ar" ? "mediumArFont" : "mediumEnFont"
                } mt-4`}
              >
                {t("fields.category.online.desc")}
              </p>
              <div className={`${styles.fieldBody} row my-5 g-0`}>
                {onlineBrands.map((brand, index) => (
                  <div
                    key={index}
                    className={`${styles.brand} col-lg-4 col-md-6`}
                  >
                    <img src={brand.src} className="w-100 d-block" alt="" />
                    <div className={`${styles.brandBody} p-5`}>
                      <p>{t(brand.commentKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fields;
