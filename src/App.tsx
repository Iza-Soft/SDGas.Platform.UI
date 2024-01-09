import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Workspace from "./components/workspace/workspace";

const App = (): React.JSX.Element => {
  return (
    <div className="background">
      <Header />
      <Workspace />
      <Footer />
    </div>
  );
};

export default App;
