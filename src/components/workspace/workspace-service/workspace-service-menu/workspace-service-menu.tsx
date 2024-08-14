import style from "./style.module.css";
import anualBoilerService from "../../../../images/anual-boiler-service.jpg";
import { Page } from "../../../../models/navigation.model";
import { useState } from "react";

const WorkspaceServiceMenu = ({
  onNavigationAction,
}: {
  onNavigationAction: any;
}): React.JSX.Element => {
  const [active, setActive] = useState<Page>(Page.MAINTENANCE);

  var _onNavigationAction = (_navigation: Page) => {
    setActive(_navigation);
    onNavigationAction(_navigation);
  };

  return (
    <div style={{ width: "22%" }}>
      <div
        className={active === Page.MAINTENANCE ? style.active : style.notactive}
      >
        <a
          href="#"
          className={`${style.service__link} decoration`}
          onClick={() => _onNavigationAction(Page.MAINTENANCE)}
        >
          Boiler Maintenance & Servicing
        </a>
      </div>
      <div
        className={
          active === Page.INSTALLATION ? style.active : style.notactive
        }
      >
        <a
          href="#"
          className={`${style.service__link} decoration`}
          onClick={() => _onNavigationAction(Page.INSTALLATION)}
        >
          Boiler Installation
        </a>
      </div>
      <div className={active === Page.REPAIRS ? style.active : style.notactive}>
        <a
          href="#"
          className={`${style.service__link} decoration`}
          onClick={() => _onNavigationAction(Page.REPAIRS)}
        >
          Boiler Repair
        </a>
      </div>
      <div style={{ marginTop: "10px" }}>
        <img src={anualBoilerService} width="300" />
      </div>
    </div>
  );
};

export default WorkspaceServiceMenu;
