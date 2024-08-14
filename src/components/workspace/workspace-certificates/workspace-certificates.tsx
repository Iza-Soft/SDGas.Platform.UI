import React from "react";
import style from "./style.module.css";
import { Divider } from "@mui/material";
import gasSafety from "../../../images/gas-safety.png";
import gasCertificate from "../../../images/gas-certificate.jpg";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkspaceCertificates = (): React.JSX.Element => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className="row">
          <div className="row">
            <div className={`${style.heading} pt-20`}>
              <h2>
                Certified Engineer by{" "}
                <span style={{ color: "#e76610" }}>GAS SAFE</span> for gas
                safety check
              </h2>
              <Divider color="#0E2E5C" />
            </div>
          </div>
          <div className="row">
            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "10px" }}>
                <img src={gasSafety} width="300" />
              </div>
              <div>
                <div className="textarea pt-20">
                  <p>
                    Gas safety check is a record issued to landlord after
                    examination of all gas appliances by Gas Safe registered
                    engineer. This document or record is also known as CP12.
                    This report is valid for 12 months. After every 12 months
                    you should call an engineer for gas safety check. According
                    to Gas Safety Regulations 1998, there is responsibility of
                    landlord to ensure that all gas apliances are well
                    maintained and safe to use. We have gas safe registered
                    engineers that will come on your call and issue a gas safety
                    report after all necessary examination.
                  </p>
                </div>
                <div className={`${style.tools} pt-50`}>
                  <a
                    href="tel:07480969210"
                    className="btn"
                    style={{ marginRight: "6px" }}
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{ marginRight: "5px" }}
                    />
                    CALL US NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={`${style.title} pt-60`}>
              <h2>Gas Safety Certificates (CP12)</h2>
              <Divider color="#0E2E5C" />
            </div>
            <div className="textarea pt-20">
              <div
                style={{
                  padding: "10px 0 10px 0",
                  fontWeight: "600",
                  fontStyle: "italic",
                }}
              >
                Landlord Gas Safety Check
              </div>
              <p className=" pt-20">
                We have a vast history of providing Landlord’s Gas Safety Checks
                for our customers in Fife. Our professional Gas Safe engineers
                do many of LLGS checks in Scotland. Landlord’s Gas Safety Check
                Certificate is the report that proves a Gas Safe engineer
                checked all your flues, fittings and gas appliances. The LLGSC
                report lists all the checks carried out in your annual Gas
                Safety Inspection. You will be given a Landlord Gas Safety
                Record or Gas Safety Certificate with details of all the checks
                that were carried out after the completion of the inspection.
              </p>
            </div>
          </div>
          <div className="row">
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <img src={gasCertificate} />
            </div>
          </div>
          <div className="row">
            <div className="textarea pt-20">
              <p>
                Our services come recommended from many past clients and You can
                find a number of their positive review on our{" "}
                <a
                  href="https://www.google.co.uk/maps/place/SD+Gas/@56.1188068,-3.1801092,17z/data=!3m1!4b1!4m6!3m5!1s0x4887b5959f440399:0x69a9d8c2e18ef8b!8m2!3d56.1188068!4d-3.1801092!16s%2Fg%2F11qh8nb44h?entry=ttu"
                  className={`${style.service__link} decoration`}
                  target="_blank"
                >
                  Google page.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceCertificates;
