import React from "react";
import style from "./style.module.css";
import logo from "../../images/SDGasLogo.svg";
import rating from "../../images/SDGasRating.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = (): React.JSX.Element => {
  return (
    <div className={style.footer}>
      {/* <div style={{ display: "flex", gap: "40px" }}>
        <div>
          <img src={logo} width="150" />
        </div>
        <div
          style={{
            padding: "10px 0 0 0",
            width: "8vw",
          }}
        >
          <h2 style={{ color: "#ffa400", fontSize: "20px", margin: "0" }}>
            Quick Links
          </h2>
          <div>
            <a href="#" className={style.navbar__link}>
              Home
            </a>
          </div>
          <div>
            <a href="#" className={style.navbar__link}>
              Service
            </a>
          </div>
          <div>
            <a href="#" className={style.navbar__link}>
              Certificates
            </a>
          </div>
          <div>
            <a href="#" className={style.navbar__link}>
              Schedule
            </a>
          </div>
          <div>
            <a href="#" className={style.navbar__link}>
              Price
            </a>
          </div>
          <div>
            <a href="#" className={style.navbar__link}>
              Terms & Conditions
            </a>
          </div>
        </div>
        <div
          style={{
            padding: "10px 0 0 0",
            width: "10vw",
          }}
        >
          <h2 style={{ color: "#ffa400", fontSize: "20px", margin: "0" }}>
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
                  color: "#ffa400",
                }}
              />
            </div>
            <div>
              <a href="#" className={style.navbar__link} style={{ margin: 0 }}>
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
              <FontAwesomeIcon icon={faPhone} style={{ color: "#ffa400" }} />
            </div>
            <div>
              <a
                href="tel:07480969210"
                className={style.navbar__link}
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
                style={{ color: "#ffa400" }}
              />
            </div>
            <div>
              <a
                href="mailto:ssdgasservices@gmail.com"
                className={style.navbar__link}
                style={{ margin: 0 }}
              >
                ssdgasservices@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "10px 0 0 0",
            width: "7vw",
          }}
        >
          <h2 style={{ color: "#ffa400", fontSize: "20px", margin: "0" }}>
            Our Services
          </h2>
          <div>
            <a href="#" className={style.navbar__link}>
              Boiler Servicing
            </a>
          </div>
          <div>
            <a href="#" className={style.navbar__link}>
              Boiler Repairs
            </a>
          </div>
          <div>
            <a href="#" className={style.navbar__link}>
              Boiler Installation
            </a>
          </div>
        </div>
        <div
          style={{
            width: "15vw",
          }}
        >
          <h2 style={{ color: "#ffa400", fontSize: "20px", margin: "0" }}>
            <a
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48795e35dc08d873:0x254b33aacf3e73d3?source=g.page.m.we"
              target="_blank"
            >
              <img src={rating} width="200" />
            </a>
          </h2>
          <div style={{ fontStyle: "italic" }}>
            Our services come recommended from many past clients and You can
            find a number of their positive review on our
            <a
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48795e35dc08d873:0x254b33aacf3e73d3?source=g.page.m.we"
              style={{
                color: "#fff",
                textDecoration: "none",
                paddingRight: "5px",
              }}
              target="_blank"
            >
              Google
            </a>
            page.
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
