import style from "./style.module.css";

const WorkspaceServiceBoilerInstallation = (): React.JSX.Element => {
  return (
    <div className={style.panel}>
      <div className="textarea">
        Are you looking for a highly qualified team of local boiler specialists
        to work on your next project?
        <div className="pt-10">
          High efficiency boilers installed to a high level of quality &
          expertise. We have many satisfied and returning customers because we
          provide the best and most comprehensive heating engineering services,
          with a friendly service from start to completion, and a time served
          and highly skilled team, you can rest assured that you are getting
          both excellent value for money and a personal service at each and
          every job we attend.
        </div>
        <div className="pt-10">
          Book your quote and one of the SD GAS installation engineers will
          visit you to discuss all options available.
        </div>
        <div className="pt-10">
          Our company offer only quality products with an installation to suit
          any situation. SD GAS friendly engineers will guide you through the
          process from the moment we arrive to give a free quotation to the
          completion of your installation when the engineer will hand over your
          new boiler and explain its controls.
        </div>
      </div>
    </div>
  );
};

export default WorkspaceServiceBoilerInstallation;
