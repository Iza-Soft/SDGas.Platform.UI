import React from "react";
import style from "./style.module.css";
import { Divider } from "@mui/material";
import { PiWarningFill, PiDropFill } from "react-icons/pi";
import { GiAutoRepair } from "react-icons/gi";
import { FaCertificate } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { ImCoinPound } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import { FaDigitalOcean } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import boilerInstallation from "../../../images/boiler-installation.jpg";
import boilerRepair from "../../../images/boiler-repair.jpg";
import boilerMaintenance from "../../../images/boiler-maintenance.jpg";

const WorkspaceHome = (): React.JSX.Element => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className="row">
          <div className="row">
            <div className="textarea pt-20">
              <p>
                We are a small reputable, established company based in Fife. We
                cover all Fife area and provide all aspects of Domestic
                Central Heating & Gas work. We are a Gas Safe registered company
                who strive for a quality finish. We can be trusted to carry out
                almost any job to the highest standards. Carrying out
                Installations, servicing and repairs of all types of heating
                systems means that we are able to provide the complete start to
                finish service to our clients.
              </p>
            </div>
          </div>
          <div className="row">
            <div className={`${style.heading} pt-20`}>
              <h2>Our Service</h2>
              <Divider color="#0E2E5C" />
            </div>
          </div>
          <div className={style.card}>
            <div className={style.head}>
              <div className={style.wrapper}>
                <PiWarningFill
                  size="100"
                  className={style.icon}
                  color="#ffb814"
                />
              </div>
            </div>
            <div className={style.body}>
              <div className={style.wrapper}>
                <div>
                  <div className={style.title}>
                    Boiler Maintenance & Servicing
                  </div>
                  <div className={`${style.content}`}>
                    Boiler maintenance is never on anyone high priority list,
                    however, it is important to have your boiler serviced every
                    year to ensure that it is safe and not putting you and your
                    family in danger. It is also a requirement by the boiler
                    manufacturers in order to keep the warranty valid.
                  </div>
                  <div className={`${style.tools} pt-20`}>
                    <a href="#" className="btn">
                      For more
                    </a>
                  </div>
                </div>
              </div>
              <div className={style.image}>
                <img
                  src={boilerMaintenance}
                  width="250"
                  alt="Logo"
                  className={style.pic}
                />
              </div>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.head}>
              <div className={style.wrapper}>
                <PiDropFill size="100" className={style.icon} color="#ffb814" />
              </div>
            </div>
            <div className={style.body}>
              <div className={style.wrapper}>
                <div>
                  <div className={style.title}>Boiler Installation</div>
                  <div className={style.content}>
                    Whether a new build or upgrading an old boiler, our
                    engineers can help you make an informed decision about
                    the,place of installation, make, model, type and importantly
                    the power of the right boiler for your home.
                  </div>
                  <div className={`${style.tools} pt-20`}>
                    <a href="#" className="btn">
                      For more
                    </a>
                  </div>
                </div>
              </div>
              <div className={style.image}>
                <img
                  src={boilerInstallation}
                  width="250"
                  alt="Logo"
                  className={style.pic}
                />
              </div>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.head}>
              <div className={style.wrapper}>
                <GiAutoRepair
                  size="100"
                  className={style.icon}
                  color="#ffb814"
                />
              </div>
            </div>
            <div className={style.body}>
              <div className={style.wrapper}>
                <div>
                  <div className={style.title}>Boiler Repair</div>
                  <div className={style.content}>
                    We are able to repair boilers installed at your home. Our
                    experienced engineers will come at your door step and
                    diagnose the issue and repair it .
                  </div>
                  <div className={`${style.tools} pt-20`}>
                    <a href="#" className="btn">
                      For more
                    </a>
                  </div>
                </div>
              </div>
              <div className={style.image}>
                <img
                  src={boilerRepair}
                  width="250"
                  alt="Logo"
                  className={style.pic}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className={`${style.heading} pt-40`}>
              <h2>Why Us</h2>
              <Divider color="#0E2E5C" />
            </div>
            <div className="textarea pt-20">
              <p>
                Choose us for our Gas Safe ensuring
                compliance and safety in every project. We guarantee quality
                service by adhering to industry standards for gas safety and
                refrigeration. With us, you can trust that your facilities are
                in expert hands, with safety and regulatory compliance a
                priority Any problems with your gas or heating we are only a
                phone call away, so why not call us now to have an Engineer help
                you back to warmth! Gas and Central Heating Specialists in
               Fife. If you have any enquiries, please get in touch on.
              </p>
            </div>
          </div>
          <div className="row pt-40">
            <div
              style={{
                border: "0px solid black",
                width: "90%",
                margin: "auto",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ border: "0px solid black" }}>
                <div
                  style={{
                    backgroundColor: "#e76610",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50px",
                    position: "relative",
                    margin: "auto",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                  }}
                >
                  <FaCertificate
                    size="70"
                    className={style.icon}
                    color="#fff"
                    style={{
                      position: "absolute",
                      margin: "auto",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      left: "0",
                    }}
                  />
                </div>
                <div className="textarea" style={{ textAlign: "center" }}>
                  Certified Engineer
                </div>
              </div>

              <div style={{ border: "0px solid black" }}>
                <div
                  style={{
                    backgroundColor: "#e76610",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50px",
                    position: "relative",
                    margin: "auto",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                  }}
                >
                  <FaTools
                    size="70"
                    className={style.icon}
                    color="#fff"
                    style={{
                      position: "absolute",
                      margin: "auto",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      left: "0",
                    }}
                  />
                </div>
                <div className="textarea" style={{ textAlign: "center" }}>
                  Efficient Work
                </div>
              </div>

              <div style={{ border: "0px solid black" }}>
                <div
                  style={{
                    backgroundColor: "#e76610",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50px",
                    position: "relative",
                    margin: "auto",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                  }}
                >
                  <AiFillLike
                    size="70"
                    className={style.icon}
                    color="#fff"
                    style={{
                      position: "absolute",
                      margin: "auto",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      left: "0",
                    }}
                  />
                </div>
                <div className="textarea" style={{ textAlign: "center" }}>
                  Trusted Company
                </div>
              </div>

              <div style={{ border: "0px solid black" }}>
                <div
                  style={{
                    backgroundColor: "#e76610",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50px",
                    position: "relative",
                    margin: "auto",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                  }}
                >
                  <ImCoinPound
                    size="70"
                    className={style.icon}
                    color="#fff"
                    style={{
                      position: "absolute",
                      margin: "auto",
                      top: "0",
                      right: "0",
                      bottom: "2",
                      left: "5",
                    }}
                  />
                </div>
                <div className="textarea" style={{ textAlign: "center" }}>
                  Cost Effective
                </div>
              </div>
            </div>
            <div
              className="pt-40  pb-60"
              style={{
                border: "0px solid black",
                width: "90%",
                margin: "auto",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ border: "0px solid black" }}>
                <div
                  style={{
                    backgroundColor: "#e76610",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50px",
                    position: "relative",
                    margin: "auto",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                  }}
                >
                  <FaPhone
                    size="70"
                    className={style.icon}
                    color="#fff"
                    style={{
                      position: "absolute",
                      margin: "auto",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      left: "0",
                    }}
                  />
                </div>
                <div className="textarea" style={{ textAlign: "center" }}>
                  Emergency Service
                </div>
              </div>

              <div style={{ border: "0px solid black" }}>
                <div
                  style={{
                    backgroundColor: "#e76610",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50px",
                    position: "relative",
                    margin: "auto",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                  }}
                >
                  <FaDigitalOcean
                    size="70"
                    className={style.icon}
                    color="#fff"
                    style={{
                      position: "absolute",
                      margin: "auto",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      left: "0",
                    }}
                  />
                </div>
                <div className="textarea" style={{ textAlign: "center" }}>
                  We are Digital
                </div>
              </div>

              <div style={{ border: "0px solid black" }}>
                <div
                  style={{
                    backgroundColor: "#e76610",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50px",
                    position: "relative",
                    margin: "auto",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                  }}
                >
                  <img
                    decoding="async"
                    width="70"
                    height="70"
                    src="https://rmzheating.co.uk/wp-content/uploads/2022/09/kisspng-gas-safe-register-logo-gas-safety-installation-an-my-intergas-registration-5b6eb6f4426751.424659081533982452272.png"
                    style={{ margin: "10px" }}
                  />
                </div>
                <div className="textarea" style={{ textAlign: "center" }}>
                  Trusted Company
                </div>
              </div>

              <div style={{ border: "0px solid black" }}>
                <div
                  style={{
                    backgroundColor: "#e76610",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50px",
                    position: "relative",
                    margin: "auto",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                  }}
                >
                  <FaStar
                    size="70"
                    className={style.icon}
                    color="#fff"
                    style={{
                      position: "absolute",
                      margin: "auto",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      left: "0",
                    }}
                  />
                </div>
                <div className="textarea" style={{ textAlign: "center" }}>
                  5 Star Rating
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className={`${style.carousel} pb-40`}>
              <div>
                <div className={style.content}></div>
              </div>
              <div>
                <div className={style.content}></div>
              </div>
              <div>
                <div className={style.content}></div>
              </div>
              <div>
                <div className={style.content}></div>
              </div>
              <div>
                <div className={style.content}></div>
              </div>
              <div>
                <div className={style.content}></div>
              </div>
              <div>
                <div className={style.content}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceHome;
