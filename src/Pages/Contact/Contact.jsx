// import React from 'react'
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";

// css
import styles from "./Contact.module.css";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// images
import hero from "../../assets/images/contact/hero.jpg";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Scroll to the top when the component is mounted or re-rendered
    AOS.init({
      easing: "linear",
      delay: 300,
      duration: 600,
    });
  }, []);

  const form = useRef();

  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSuccessMessage(true);

    setUserName("");
    setPhone("");
    setEmail("");
    setMessage("");

    emailjs
      .sendForm(
        "service_ejxnsdf",
        "template_9parp7j",
        form.current,
        "JR9tVyoPLDJWeTjlV"
      )
      .then(
        () => {},
        () => {}
      );
    setTimeout(function () {
      setIsSuccessMessage(false);
    }, 5000);
  };

  const { t, i18n } = useTranslation();
  return (
    <div
      className={`${
        i18n.language === "ar" ? "regularArFont" : "regularEnFont"
      }`}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <Helmet>
        <title>Contact</title>
      </Helmet>

      {isSuccessMessage && (
        <div className={styles.successMessage}>
          <p>Your email is sent</p>
          <i className="fa-regular fa-circle-check"></i>
        </div>
      )}

      <div className={`hero`}>
        <picture>
          <img src={hero} alt="" />
        </picture>
      </div>
      <div className="customContainer my-5">
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
            {t("contact.title")}
            <span
              className="firstLetter"
              style={i18n.language === "ar" ? { right: 0 } : { left: 0 }}
            ></span>
          </h1>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
          data-aos-delay="250"
          className={`${styles.allContactInputs} row g-3 my-4`}
        >
          <input
            data-aos="fade-left"
            data-aos-duration="750"
            data-aos-delay="300"
            type="text"
            className="form-control"
            placeholder={t("contact.form.name")}
            aria-label="Name"
            aria-describedby="basic-addon1"
            pattern="^[a-zA-Z]{3,}(?:[a-zA-Z]+)?$"
            name="from_Uname"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-delay="400"
            type="tel"
            className="form-control"
            placeholder={t("contact.form.phone")}
            aria-label="Phone"
            aria-describedby="basic-addon1"
            pattern="^(?:\+\d{1,3})?(?:\s?\(\d{3}\)\s?|\d{3}[-\s]?)\d{3}[-\s]?\d{4}$"
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
            name="from_phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            data-aos="fade-left"
            data-aos-duration="750"
            data-aos-delay="600"
            type="email"
            className="form-control"
            placeholder={t("contact.form.email")}
            aria-label="Email"
            aria-describedby="basic-addon1"
            pattern="^\w{3,}@([a-zA-Z]{3,})((\.[a-zA-Z]{2,})+)$"
            name="from_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-delay="700"
            className="form-control"
            rows="7"
            aria-label="With textarea"
            placeholder={t("contact.form.message")}
            pattern="^[\w]{2,}(?:[\w]+)?$"
            name="from_message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <div
            className="submitBtn p-0 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-duration="750"
            data-aos-delay="700"
          >
            <button className="btn goldenBtn px-4 py-2" type="submit">
              {t("contact.form.send")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
