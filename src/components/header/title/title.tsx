import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../images/SDGasLogo.svg";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Title(): React.ReactElement {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.position}>
          <img src={logo} width="150" alt="Logo" />
        </div>
        <div>
          <div className={style.position}>
            <div className={style.question}>
              ARE YOU LOOKING FOR A GAS ENGINEER OR PLUMBER IN FIFE?
            </div>
            <div className={style.call}>CALL US 24x7, SEVEN DAYS A WEEK</div>
          </div>
        </div>
        <div className={style.btn_container}>
          <div className={`${style.position} ${style.btn_wrapper}`}>
            <a href="tel:07480969210" className={style.btn}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: "5px" }} />
              0748 096 9210
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
