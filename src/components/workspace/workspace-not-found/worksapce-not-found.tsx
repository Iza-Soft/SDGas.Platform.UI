import React from "react";
import style from "./style.module.css";
import underConstruction from "../../../images/under-construction.jpg";

const WorkspaceNotFound = (): React.JSX.Element => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={`${style.panel} row`}>
          <img
            src={underConstruction}
            width="750"
            alt="Under Construction"
            className={style.pic}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkspaceNotFound;
