import React from "react";
import style from "./style.module.css";

const WorkspaceNotFound = (): React.JSX.Element => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>Not Found</div>
    </div>
  );
};

export default WorkspaceNotFound;
