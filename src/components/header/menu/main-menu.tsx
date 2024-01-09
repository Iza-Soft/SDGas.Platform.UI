import React from "react";
import style from "./style.module.css";

const MainMenu = (): React.JSX.Element => {
  function _onMainMenuEvent(obj: string | undefined) {
    console.log("Rise event ... ", obj);
  }
  return (
    <div className={style.wrapper}>
      <nav className={style.navbar}>
        <ul className={style.navbar__menu}>
          <li className={style.navbar__item}>
            <a
              href="#"
              className={style.navbar__link}
              onClick={() => _onMainMenuEvent("Home")}
            >
              <i data-feather="home"></i>
              <span>Home</span>
            </a>
          </li>
          <li className={style.navbar__item}>
            <a
              href="#"
              className={style.navbar__link}
              onClick={() => _onMainMenuEvent("Service")}
            >
              <i data-feather="service"></i>
              <span>Service</span>
            </a>
          </li>
          <li className={style.navbar__item}>
            <a
              href="#"
              className={style.navbar__link}
              onClick={() => _onMainMenuEvent("Certificates")}
            >
              <i data-feather="certificates"></i>
              <span>Certificates</span>
            </a>
          </li>
          <li className={style.navbar__item}>
            <a
              href="#"
              className={style.navbar__link}
              onClick={() => _onMainMenuEvent("Schedule")}
            >
              <i data-feather="schedule"></i>
              <span>Schedule</span>
            </a>
          </li>
          <li className={style.navbar__item}>
            <a
              href="#"
              className={style.navbar__link}
              onClick={() => _onMainMenuEvent("Price")}
            >
              <i data-feather="price"></i>
              <span>Price</span>
            </a>
          </li>

          <li className={style.navbar__item}>
            <a
              href="#"
              className={style.navbar__link}
              onClick={() => _onMainMenuEvent("Gallery")}
            >
              <i data-feather="gallery"></i>
              <span>Gallery</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
