import React from "react";
import style from "./style.module.css";
import { Divider } from "@mui/material";
import { PiWarningFill, PiDropFill } from "react-icons/pi";
import { GiAutoRepair } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";

const WorkspaceHome = (): React.JSX.Element => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className="row">
          <div className="row">
            <div className={style.heading}>
              <h2>Why Us</h2>
              <Divider color="#0E2E5C" />
            </div>
            <div className="textarea pt-20">
              <p>
                Choose us for our Gas Safe and Refcom certifications, ensuring
                compliance and safety in every project. We guarantee quality
                service by adhering to industry standards for gas safety and
                refrigeration. With us, you can trust that your facilities are
                in expert hands, with safety and regulatory compliance a
                priority Any problems with your gas or heating we are only a
                phone call away, so why not call us now to have an Engineer help
                you back to warmth! Gas and Central Heating Specialists in
                Yorkshire. If you have any enquiries, please get in touch on.
              </p>
            </div>
          </div>
          <div className="row">
            <div className={`${style.heading} pt-40`}>
              <h2>Our Service</h2>
              <Divider color="#0E2E5C" />
            </div>
          </div>
          <div className={style.card}>
            <div className={style.head}>
              <div className={style.wrapper}>
                <PiWarningFill size="100" className={style.icon} color="#fff" />
              </div>
            </div>
            <div className={style.body}>
              <div className={style.wrapper}>
                <div className={style.title}>Emergency Engineer call outs</div>
                <div className={`${style.content}`}>
                  For urgent issues like thermostat failure to boilers not
                  heating up, call us and we will provide you our best and
                  certified heating engineer at the same day.
                </div>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.head}>
              <div className={style.wrapper}>
                <PiDropFill size="100" className={style.icon} color="#fff" />
              </div>
            </div>
            <div className={style.body}>
              <div className={style.wrapper}>
                <div className={style.title}>Boiler Installation</div>
                <div className={style.content}>
                  Whether a new build or upgrading an old boiler, our engineers
                  can help you make an informed decision about the,place of
                  installation, make, model, type and importantly the power of
                  the right boiler for your home.
                </div>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.head}>
              <div className={style.wrapper}>
                <GiAutoRepair size="100" className={style.icon} color="#fff" />
              </div>
            </div>
            <div className={style.body}>
              <div className={style.wrapper}>
                <div className={style.title}>Boiler Repair</div>
                <div className={style.content}>
                  We are able to repair boilers installed at your home. Our
                  experienced engineers will come at your door step and diagnose
                  the issue and repair it .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceHome;
