import React from "react";
import style from "./style.module.css";
import { Divider } from "@mui/material";

const WorkspaceHome = (): React.JSX.Element => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div style={{ border: "0px solid black", width: "100%" }}>
          <div style={{ width: "100%" }}>
            <div
              style={{
                border: "0px solid black",
                color: "#0E2E5C",
                width: "200px",
                textAlign: "center",
                margin: "auto",
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
          <div
            style={{
              display: "flex",
              width: "100%",
              border: "0px solid black",
              marginTop: "100px",
            }}
          >
            <div
              style={{
                width: "20%",
                height: "200px",
                backgroundColor: "#EFEFEF",
                borderRadius: "70px 0px 0px 70px",
              }}
            ></div>
            <div
              style={{
                width: "80%",
                height: "200px",
                backgroundColor: "#EFEFEF",
                borderRadius: "0px 70px 70px 0px",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              border: "0px solid black",
              marginTop: "100px",
            }}
          >
            <div
              style={{
                width: "20%",
                height: "200px",
                backgroundColor: "#EFEFEF",
                borderRadius: "70px 0px 0px 70px",
              }}
            ></div>
            <div
              style={{
                width: "80%",
                height: "200px",
                backgroundColor: "#EFEFEF",
                borderRadius: "0px 70px 70px 0px",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              border: "0px solid black",
              marginTop: "100px",
            }}
          >
            <div
              style={{
                width: "20%",
                height: "200px",
                backgroundColor: "#EFEFEF",
                borderRadius: "70px 0px 0px 70px",
              }}
            ></div>
            <div
              style={{
                width: "80%",
                height: "200px",
                backgroundColor: "#EFEFEF",
                borderRadius: "0px 70px 70px 0px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceHome;
