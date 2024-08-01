// import React from "react";

// css
import styles from "./Landing.module.css";

// images
import logo from "/landingLogo.jpg";

const Landing = () => {
  return (
    <div className={`${styles.langding}`}>
      <div className="container-lg">
        <div className={`${styles.landingBody} mx-auto`}>
          <div className={`${styles.image} my-5`}>
            <picture>
              <img src={logo} alt="" />
            </picture>
          </div>
          <ul className={`${styles.list} p-0 mb-3`}>
            <li>
              <a href="https://www.facebook.com/agyal.eg/" target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <i className="fa-brands fa-twitter"></i>
                <span>X-Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/201507447466" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
                <span>whatsapp</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/agyal_8?igsh=MWd0ajF0NDVpNGdtZQ%3D%3D&utm_source=qr"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
                <span>instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@agyal3?_t=8o59avKMCSg&_r=1"
                target="_blank"
              >
                <i className="fa-brands fa-tiktok"></i> <span>tiktok</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/agyal/" target="_blank">
                <i className="fa-brands fa-linkedin-in"></i>
                <span>linkedin</span>
              </a>
            </li>
          </ul>
          <p dir="rtl" className="fw-bold">
            #مــــنـــــك ... لــــيـــــك
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
