import React from "react";
import MainMenu from "./menu/main-menu";
import Title from "./title/title";

const Header = (): React.JSX.Element => {
  return (
    <div>
      <Title />
      <MainMenu />
    </div>
  );
};

export default Header;
