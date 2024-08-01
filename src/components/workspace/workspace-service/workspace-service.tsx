import React, { useState } from "react";
import style from "./style.module.css";
import WorkspaceServiceMenu from "./workspace-service-menu/workspace-service-menu";
import WorkspaceServiceBoilerMaintenance from "./workspace-service-boiler-maintenance/workspace-service-boiler-maintenance";
import { Page } from "../../../models/navigation.model";
import WorkspaceServiceBoilerRepair from "./workspace-service-boiler-repair/workspace-service-boiler-repair";
import WorkspaceServiceBoilerInstallation from "./workspace-service-boiler-installation/workspace-service-boiler-installation";

const WorkspaceService = (): React.JSX.Element => {
  const [navigation, setNavigation] = useState<Page>(Page.MAINTENANCE);

  var _onNavigationAction = (_navigation: Page) => {
    setNavigation(_navigation);
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className="row">
          <div style={{ display: "flex" }}>
            <WorkspaceServiceMenu onNavigationAction={_onNavigationAction} />

            <div
              className={style.content}
              style={
                navigation === Page.MAINTENANCE
                  ? {
                      borderRadius: "0 15px 15px 15px",
                    }
                  : { borderRadius: "15px 15px 15px 15px" }
              }
            >
              {navigation === Page.MAINTENANCE && (
                <WorkspaceServiceBoilerMaintenance />
              )}
              {navigation === Page.REPAIRS && <WorkspaceServiceBoilerRepair />}
              {navigation === Page.INSTALLATION && (
                <WorkspaceServiceBoilerInstallation />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceService;
