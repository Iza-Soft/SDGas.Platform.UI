import style from "./style.module.css";

const WorkspaceServiceBoilerRepair = (): React.JSX.Element => {
  return (
    <div className={style.panel}>
      <div className="textarea">
        Know your boiler is the most essential appliance in your home. It is
        therefore essential that your boiler is kept working at its best level
        of performance. You rely on your boiler for providing hot water and
        central heating but give it little more than a second thought until it
        goes wrong. If you’re unlucky enough to have your boiler fail
        unexpectedly, the impact on your family can be severe. With no hot water
        or central heating, a speedy and effective repair is essential.
        <div
          style={{
            padding: "10px 0 10px 0",
            fontWeight: "600",
            fontStyle: "italic",
          }}
        >
          Signs your boiler may need repairing.
        </div>
        <div
          style={{
            padding: "10px 0 10px 0",
            fontWeight: "600",
            fontStyle: "italic",
          }}
        >
          The following list includes common signs suggesting your boiler may
          need a repair:
        </div>
        Unusual sounds such as kettling, banging or rattling. These issues are
        caused by a range of problems and can be fixed in a range of different
        ways
        <div className="pt-10">
          Strange smells (in particular, egg as this is associated with carbon
          monoxide gas). If you smell this in your home, you should call out a
          gas engineer ASAP.
        </div>
        <div className="pt-10">
          Your water or radiators take too long to heat up. You may have gotten
          used to your boiler heating up slowly, but our team can get this
          problem sorted out for you.
        </div>
        <div className="pt-10">
          Your pilot light has gone out. This may seem easy to fix yourself but
          you should never attempt to relight it, as the gas can still be
          present.
        </div>
        <div className="pt-10">
          Your boiler pressure drops regularly. If your boiler pressure
          regularly reads below 1, you may need to get it looked at by a
          professional.
        </div>
        <div className="pt-10">
          Your boiler switches itself off unexpectedly. This can be caused by a
          range of issues, so you should call out a gas engineer today.
        </div>
      </div>
    </div>
  );
};

export default WorkspaceServiceBoilerRepair;
