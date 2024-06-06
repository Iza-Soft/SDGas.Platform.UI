import React from "react";
import style from "./style.module.css";
import { Divider } from "@mui/material";

const WorkspaceHome = (): React.JSX.Element => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {/* <div
          style={{
            border: "1px solid black",

            color: "#0E2E5C",
            width: "200px",
            textAlign: "center",
          }}
        >
          <h2>Why Us</h2>
          <Divider color="#0E2E5C" />
        </div> */}
        <div
          style={{ display: "flex ", border: "0px solid black", width: "100%" }}
        >
          <div style={{ width: "60%" }}>
            <div
              style={{
                border: "0px solid black",
                color: "#0E2E5C",
                width: "200px",
                textAlign: "center",
              }}
            >
              <h2>Why Us</h2>
              <Divider color="#0E2E5C" />
            </div>
            <div className="textarea" style={{ paddingTop: "20px" }}>
              <p>
                Any problems with your gas or heating we are only a phone call
                away, so why not call us now to have an Engineer help you back
                to warmth! Gas and Central Heating Specialists in Yorkshire. If
                you have any enquiries, please get in touch on.
              </p>
            </div>
          </div>
          <div style={{ width: "40%" }}>
            <div
              style={{
                border: "0px solid black",
                color: "#0E2E5C",
                width: "200px",
                textAlign: "center",
                marginLeft: "auto",
              }}
            >
              <h2>Contact Us</h2>
              <Divider color="#0E2E5C" />
            </div>
            <div
              className="textarea"
              style={{
                paddingTop: "20px",
                border: "0px solid black",
                width: "65%",
                marginLeft: "auto",
              }}
            >
              <p>
                Bennochy Road, Kirkcaldy, KY25HD,
                <br />
                United Kingdom
              </p>
              <p>ssdgasservices@gmail.com</p>
              <p>0748 096 9210</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceHome;
