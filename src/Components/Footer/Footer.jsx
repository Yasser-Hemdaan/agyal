// import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleNavigation = (sectionId) => {
    navigate(`/fields#${sectionId}`);
  };

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
                  <a
                    href="https://www.facebook.com/agyal.eg/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>
                      <i className="fa-brands fa-facebook-f"></i>
                    </li>
                  </a>
                  <a
                    href="https://wa.me/201507447466"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>
                      <i className="fa-brands fa-whatsapp"></i>
                    </li>
                  </a>
                  <a
                    href="https://www.instagram.com/agyal_8?igsh=MWd0ajF0NDVpNGdtZQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>
                      <i className="fa-brands fa-instagram"></i>
                    </li>
                  </a>
                  <a
                    href="https://www.tiktok.com/@agyal3?_t=8o59avKMCSg&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>
                      <i className="fa-brands fa-tiktok"></i>
                    </li>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/agyal/"
                    target="_blank"
                    rel="noopener noreferrer"
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
                <button
                  onClick={() => handleNavigation("medical")}
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.medical")}
                </button>
                <button
                  onClick={() => handleNavigation("educational")}
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.educational")}
                </button>
                <button
                  onClick={() => handleNavigation("sports")}
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.sports")}
                </button>
                <button
                  onClick={() => handleNavigation("beauty")}
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.beauty")}
                </button>
                <button
                  onClick={() => handleNavigation("restaurant")}
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.restaurant")}
                </button>
                <button
                  onClick={() => handleNavigation("restaurant")}
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.cafe")}
                </button>
                <button
                  onClick={() => handleNavigation("clothes")}
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.clothes")}
                </button>
                <button
                  onClick={() => handleNavigation("beauty")}
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.perfumes")}
                </button>
                <button
                  onClick={() => handleNavigation("various")}
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.various")}
                </button>
                <button
                  onClick={() => handleNavigation("online")}
                  className="btn goldenBtn p-1"
                >
                  {t("footer.fields.pages.online")}
                </button>
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
                  <p>10am - 11pm</p>
                </div>
                <div className="item d-flex gap-4">
                  <h6>{t("footer.openingHours.sunday")}</h6>
                  <p>10am - 11pm</p>
                </div>
                <div className="item d-flex gap-4">
                  <h6>{t("footer.openingHours.monday")}</h6>
                  <p>10am - 11pm</p>
                </div>
                <div className="item d-flex gap-4">
                  <h6>{t("footer.openingHours.tuesday")}</h6>
                  <p>10am - 11pm</p>
                </div>
                <div className="item d-flex gap-4">
                  <h6>{t("footer.openingHours.wednesday")}</h6>
                  <p>10am - 11pm</p>
                </div>
                <div className="item d-flex gap-4">
                  <h6>{t("footer.openingHours.thursday")}</h6>
                  <p>10am - 11pm</p>
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
