// import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// images
import logo from "/public/icon.png";

const Header = () => {
  const { t, i18n } = useTranslation();

  const [navigationAndSciIsActive, setNavigationAndSciIsActive] = useState("");
  const [isBurgerChecked, setIsBurgerChecked] = useState(false);

  function handleClick() {
    if (window.innerWidth < 992) {
      setNavigationAndSciIsActive(!navigationAndSciIsActive);
      handleCheck();
    }
  }

  function handleCheck() {
    !isBurgerChecked
      ? setNavigationAndSciIsActive("active")
      : setNavigationAndSciIsActive("");
    setIsBurgerChecked(!isBurgerChecked);
  }

  const switchLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    handleClick();
  };
  return (
    <div
      className={`${
        i18n.language === "ar" ? "regularArFont" : "regularEnFont"
      }`}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="headerWrapper">
        <div className="customContainer">
          <div className="headerBody">
            <div className="logo">
              <picture>
                <img src={logo} alt="" />
              </picture>
            </div>
            <ul className={`navigation ${navigationAndSciIsActive} m-0 p-0`}>
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  {t("header.home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  {t("header.about")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/fields"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  {t("header.fields")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/testmonials"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  {t("header.testmonials")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  {t("header.contact")}
                </NavLink>
              </li>
              <li
                className={`${
                  i18n.language === "ar" ? "regularEnFont" : "regularArFont"
                }`}
              >
                <NavLink onClick={switchLanguage}>
                  {t("header.language")}
                </NavLink>
              </li>
            </ul>
            <div className="burger">
              <input
                id="checkbox2"
                checked={isBurgerChecked}
                onChange={handleCheck}
                type="checkbox"
              />
              <label className="toggle toggle2" htmlFor="checkbox2">
                <div id="bar4" className="bars"></div>
                <div id="bar5" className="bars"></div>
                <div id="bar6" className="bars"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
