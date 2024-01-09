import React from "react";
import style from "./style.module.css";
import logo from "../../images/SDGasLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import MainMenu from "./menu/main-menu";

const Header = (): React.JSX.Element => {
  return (
    <div className={style.background}>
      <div className={style.block}></div>
      <MainMenu />
      <div
        style={{
          display: "inline",
          top: "100px",
          position: "relative",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              color: "#fff",
              fontSize: "20px",
              margin: "0",
              fontWeight: "500",
            }}
          >
            ARE YOU LOOKING FOR A GAS ENGINEER OR PLUMBER IN FIFE, HARROGATE OR
            WAKEFIELD?
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ height: "220px" }}>
            <img src={logo} width="300" />
          </div>
          <div
            style={{
              height: "220px",
              paddingLeft: "20px",
            }}
          >
            <div style={{ padding: "10px 0 0 0" }}>
              <h2 style={{ color: "#ffa400", fontSize: "52px", margin: "0" }}>
                SD Gas Service
              </h2>
            </div>
            <div style={{ padding: "10px 0 0 0" }}>
              <h2
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  margin: "0",
                }}
              >
                CALL US 24x7, SEVEN DAYS A WEEK
              </h2>
            </div>
            <div>
              <div style={{ padding: "40px 0 0 0" }}>
                <a href="tel:07480969210" className={style.elementskit_btn}>
                  <FontAwesomeIcon icon={faPhone} />
                  0748 096 9210
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
