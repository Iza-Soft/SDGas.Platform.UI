import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import DrawerMenu from "../drawer/drawer-menu";

const MainMenu = (): React.JSX.Element => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <nav className={style.navbar}>
          <ul className={style.navbar__menu}>
            <li className={style.navbar__item}>
              <Link to="/home" className={style.navbar__link}>
                <i data-feather="home"></i>
                <span>Home</span>
              </Link>
            </li>
            <li className={style.navbar__item}>
              <Link to="/service" className={style.navbar__link}>
                <i data-feather="service"></i>
                <span>Service</span>
              </Link>
            </li>
            <li className={style.navbar__item}>
              <Link to="/certificates" className={style.navbar__link}>
                <i data-feather="certificates"></i>
                <span>Certificates</span>
              </Link>
            </li>
            <li className={style.navbar__item}>
              <Link to="/schedule" className={style.navbar__link}>
                <i data-feather="schedule"></i>
                <span>Schedule</span>
              </Link>
            </li>
            {/* <li className={style.navbar__item}>
              <Link to="/price" className={style.navbar__link}>
                <i data-feather="price"></i>
                <span>Price</span>
              </Link>
            </li>

            <li className={style.navbar__item}>
              <Link to="/gallery" className={style.navbar__link}>
                <i data-feather="gallery"></i>
                <span>Gallery</span>
              </Link>
            </li> */}
          </ul>
        </nav>
        <DrawerMenu />
      </div>
    </div>
  );
};

export default MainMenu;
