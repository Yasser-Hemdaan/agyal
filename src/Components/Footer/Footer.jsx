// import React from 'react'

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`${
        i18n.language === "ar" ? "regularArFont" : "regularEnFont"
      }`}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="footer py-5">
        <div className="customContainer">
          <div className="allFooter row g-5">
            <div className="aboutFooter col-xl-3 col-lg-6 col-sm-6">
              <div className="footerHeader">
                <h5
                  className={`${
                    i18n.language === "ar" ? "boldArFont" : "boldEnFont"
                  }`}
                >
                  {t("footer.main.title")}
                </h5>
              </div>
              <p>{t("footer.main.description")}</p>
              <div className="socialMediaIcons">
                <ul className="d-flex gap-3 p-0">
                  <a href="https://www.facebook.com/agyal.eg/" target="_blank">
                    <li>
                      <i className="fa-brands fa-facebook-f"></i>
                    </li>
                  </a>

                  <a href="https://wa.me/201507447466" target="_blank">
                    <li>
                      <i className="fa-brands fa-whatsapp"></i>
                    </li>
                  </a>
                  <a
                    href="https://www.instagram.com/agyal_8?igsh=MWd0ajF0NDVpNGdtZQ%3D%3D&utm_source=qr"
                    target="_blank"
                  >
                    <li>
                      <i className="fa-brands fa-instagram"></i>
                    </li>
                  </a>
                  <a href="https://www.tiktok.com/@agyal3?_t=8o59avKMCSg&_r=1">
                    <li>
                      <i className="fa-brands fa-tiktok"></i>
                    </li>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/agyal/"
                    target="_blank"
                  >
                    <li>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="categoriesFooter col-xl-3 col-lg-6 col-sm-6">
              <div className="footerHeader">
                <h5
                  className={`${
                    i18n.language === "ar" ? "boldArFont" : "boldEnFont"
                  }`}
                >
                  {t("footer.quickLinks.title")}
                </h5>
              </div>
              <ul className="p-0">
                <li>
                  <NavLink to="/">{t("footer.quickLinks.pages.home")}</NavLink>
                </li>
                <li>
                  <NavLink to="/about">
                    {t("footer.quickLinks.pages.about")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/fields">
                    {t("footer.quickLinks.pages.fields")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/testmonials">
                    {t("footer.quickLinks.pages.testmonials")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">
                    {t("footer.quickLinks.pages.contact")}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="fieldsFooter col-xl-3 col-lg-6 col-sm-6">
              <div className="footerHeader">
                <h5
                  className={`${
                    i18n.language === "ar" ? "boldArFont" : "boldEnFont"
                  }`}
                >
                  {t("footer.fields.title")}
                </h5>
              </div>
              <div className="fieldsFooterBtn d-flex gap-1 flex-wrap">
                <NavLink
                  to="/fields"
                  type="button"
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.medical")}
                </NavLink>
                <NavLink
                  to="/fields"
                  type="button"
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.educational")}
                </NavLink>
                <NavLink
                  to="/fields"
                  type="button"
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.sports")}
                </NavLink>
                <NavLink
                  to="/fields"
                  type="button"
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.beauty")}
                </NavLink>
                <NavLink
                  to="/fields"
                  type="button"
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.resturant")}
                </NavLink>
                <NavLink
                  to="/fields"
                  type="button"
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.cafe")}
                </NavLink>
                <NavLink
                  to="/fields"
                  type="button"
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.clothes")}
                </NavLink>
                <NavLink
                  to="/fields"
                  type="button"
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.perfumes")}
                </NavLink>
                <NavLink
                  to="/fields"
                  type="button"
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.various")}
                </NavLink>
                <NavLink
                  to="/fields"
                  type="button"
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.online")}
                </NavLink>
              </div>
            </div>
            <div className="dayFooter col-xl-3 col-lg-6 col-sm-6">
              <div className="footerHeader">
                <h5
                  className={`${
                    i18n.language === "ar" ? "boldArFont" : "boldEnFont"
                  }`}
                >
                  {t("footer.openingHours.title")}
                </h5>
              </div>
              <div className="allDays">
                <div className="item d-flex gap-4">
                  <h6>{t("footer.openingHours.saturday")}</h6>
                  <p>9am - 10pm</p>
                </div>
                <div className="item d-flex gap-4">
                  <h6>{t("footer.openingHours.sunday")}</h6>
                  <p>9am - 10pm</p>
                </div>
                <div className="item d-flex gap-4">
                  <h6>{t("footer.openingHours.monday")}</h6>
                  <p>9am - 10pm</p>
                </div>
                <div className="item d-flex gap-4">
                  <h6>{t("footer.openingHours.tuesday")}</h6>
                  <p>9am - 10pm</p>
                </div>
                <div className="item d-flex gap-4">
                  <h6>{t("footer.openingHours.wednesday")}</h6>
                  <p>9am - 10pm</p>
                </div>
                <div className="item d-flex gap-4">
                  <h6>{t("footer.openingHours.thursday")}</h6>
                  <p>9am - 10pm</p>
                </div>
                <div className="item d-flex gap-4">
                  <h6>{t("footer.openingHours.friday")}</h6>
                  <p>11am - 10pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// كل يوم
