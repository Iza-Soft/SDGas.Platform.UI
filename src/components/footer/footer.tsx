import React from "react";
import style from "./style.module.css";
import rating from "../../images/SDGasRating.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FaPhone } from "react-icons/fa6";

const Footer = (): React.JSX.Element => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={`${style.title}`}>
            <div style={{ padding: "10px 0 0 0" }}>
              <a href="tel:07480969210" style={{ textDecoration: "none" }}>
                <FaPhone
                  size="65"
                  className={style.icon}
                  color="#ffb814"
                  style={{ marginRight: "20px" }}
                />
              </a>
            </div>
            <div>
              <div className="textarea">
                Call for specialized Heating & Plumbing services
              </div>
              <div
                style={{
                  fontSize: "50px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                <a
                  href="tel:07480969210"
                  style={{ textDecoration: "none", color: "#ffb814" }}
                >
                  0748 096 9210
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={style.wrapper}>
          <div
            style={{
              border: "0px solid white",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ border: "0px solid white", width: "100%" }}>
              <h2
                style={{
                  color: "#ffb814",
                  fontSize: "20px",
                  marginBottom: "10px",
                }}
              >
                Contact Us
              </h2>
              <div
                style={{
                  display: "flex",
                  paddingLeft: "3px",
                  paddingBottom: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{
                      color: "#ffb814",
                    }}
                  />
                </div>
                <div>
                  <a
                    href="#"
                    className={`${style.navbar__link} decoration`}
                    style={{ margin: 0 }}
                  >
                    Bennochy Road, Kirkcaldy, KY2 5, United Kingdom
                  </a>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  paddingLeft: "3px",
                  paddingBottom: "10px",
                }}
              >
                <div>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#ffb814" }}
                  />
                </div>
                <div>
                  <a
                    href="tel:07480969210"
                    className={`${style.navbar__link} decoration`}
                    style={{ margin: 0 }}
                  >
                    0748 096 9210
                  </a>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  paddingLeft: "3px",
                  paddingBottom: "10px",
                }}
              >
                <div>
                  <FontAwesomeIcon
                    icon={faEnvelopeOpen}
                    style={{ color: "#ffb814" }}
                  />
                </div>
                <div>
                  <a
                    href="mailto:ssdgasservices@gmail.com"
                    className={`${style.navbar__link} decoration`}
                    style={{ margin: 0 }}
                  >
                    ssdgasservices@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                border: "0px solid white",
                width: "100%",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  color: "#ffb814",
                  fontSize: "20px",
                  marginBottom: "10px",
                }}
              >
                Quick Links
              </h2>
              <div className="pb-5">
                <a href="#" className={`${style.navbar__link} decoration`}>
                  Home
                </a>
              </div>
              <div className="pb-5">
                <a href="#" className={`${style.navbar__link} decoration`}>
                  Service
                </a>
              </div>
              <div className="pb-5">
                <a href="#" className={`${style.navbar__link} decoration`}>
                  Certificates
                </a>
              </div>
              <div className="pb-5">
                <a href="#" className={`${style.navbar__link} decoration`}>
                  Schedule
                </a>
              </div>
              <div className="pb-5">
                <a href="#" className={`${style.navbar__link} decoration`}>
                  Terms & Conditions
                </a>
              </div>
            </div>
            <div style={{ border: "0px solid white", width: "100%" }}>
              <h2 style={{ color: "#ffa400", fontSize: "20px", margin: "0" }}>
                <a
                  href="https://www.google.co.uk/maps/place/SD+Gas/@56.1188068,-3.1801092,17z/data=!3m1!4b1!4m6!3m5!1s0x4887b5959f440399:0x69a9d8c2e18ef8b!8m2!3d56.1188068!4d-3.1801092!16s%2Fg%2F11qh8nb44h?entry=ttu"
                  target="_blank"
                >
                  <img src={rating} width="200" />
                </a>
              </h2>
              <div style={{ fontStyle: "italic" }}>
                Our services come recommended from many past clients and You can
                find a number of their positive review on our
                <a
                  href="https://www.google.co.uk/maps/place/SD+Gas/@56.1188068,-3.1801092,17z/data=!3m1!4b1!4m6!3m5!1s0x4887b5959f440399:0x69a9d8c2e18ef8b!8m2!3d56.1188068!4d-3.1801092!16s%2Fg%2F11qh8nb44h?entry=ttu"
                  className={`${style.navbar__link} decoration`}
                  target="_blank"
                >
                  Google page.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
