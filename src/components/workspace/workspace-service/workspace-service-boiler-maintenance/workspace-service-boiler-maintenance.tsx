import style from "./style.module.css";

const WorkspaceServiceBoilerMaintenance = (): React.JSX.Element => {
  return (
    <div className={style.panel}>
      <div className="textarea">
        A boiler service gives the engineer the opportunity to identify safety
        issues such as a carbon monoxide leak. Carbon monoxide is an odourless
        and colourless gas which can quickly cause brain damage and, in some
        cases, death. If you’re concerned that your boiler may not be working
        correctly, for example the flame is orange rather than blue, you should
        get in touch with a Gas Safe engineer even if your annual service is not
        yet due.
        <div
          style={{
            padding: "10px 0 10px 0",
            fontWeight: "600",
            fontStyle: "italic",
          }}
        >
          Keep heating bills low.
        </div>
        As a boiler ages it can become less efficient which means it needs to
        use more fuel to heat your home which will cost you more money. An
        annual service will ensure all the components are in the best possible
        condition and deliver a higher level of efficiency for longer.
        <div
          style={{
            padding: "10px 0 10px 0",
            fontWeight: "600",
            fontStyle: "italic",
          }}
        >
          Prevent breakdowns.
        </div>
        It could be easy to put off getting your boiler serviced in the hope of
        saving yourself a bit of money, but in the long run, a boiler service
        will help keep your energy bills down and also spot a potential fault
        before it happens, saving you from a boiler breakdown and a hefty repair
        bill.
        <div
          style={{
            padding: "10px 0 10px 0",
            fontWeight: "600",
            fontStyle: "italic",
          }}
        >
          Warranty.
        </div>
        Your boiler will usually include a manufacturer’s warranty which means
        any faults that develop in that time will be repaired free of charge.
        However, this warranty is only valid as long as you get the boiler
        serviced by a Gas Safe engineer every year.
        <div
          style={{
            padding: "10px 0 10px 0",
            fontWeight: "600",
            fontStyle: "italic",
          }}
        >
          A new energy efficient boiler will help to reduce your heating bills.
        </div>
        Having a new boiler installed within your home ensures that your boiler
        is running to its maximum efficiency. If your boiler is running to its
        maximum efficiency it means that it will be using less fuel to heat your
        home. This will help to keep your heating bills to a minimum. The more
        energy efficient your boiler is the more that can be potentially saved
        from your heating bills.
        <div
          style={{
            padding: "10px 0 10px 0",
            fontWeight: "600",
            fontStyle: "italic",
          }}
        >
          What happens during a boiler service?
        </div>
        Here are some of the practices your engineer may carry out during their
        visit:
        <li style={{ padding: "10px 0 10px 0" }}>Visual inspection -</li>
        <div
          style={{
            padding: "2px 0 20px 30px",
          }}
        >
          Your engineer will check that the boiler still meets current standards
          and requirements and look for any corrosion or leaks. They will also
          visually check the flame in your boiler.
        </div>
        <li style={{ padding: "10px 0 10px 0" }}>
          Removal of the boiler casing -
        </li>
        <div
          style={{
            padding: "2px 0 20px 30px",
          }}
        >
          They will then check the components to ensure everything is working
          correctly and then clean the inside of the boiler. These checks should
          include the heat exchanger, burner, main injector and spark
          probe.(dependent on manufacturer) Flue check – the engineer will
          ensure there are no obstructions in the flue terminals and that the
          flue is safely fitted.
        </div>
        <li style={{ padding: "10px 0 10px 0" }}>Gas pressure check -</li>
        <div
          style={{
            padding: "2px 0 20px 30px",
          }}
        >
          This will ensure your boiler is working at the correct pressure.
        </div>
        <li style={{ padding: "10px 0 10px 0" }}>Boiler fired up -</li>
        <div
          style={{
            padding: "2px 0 0 30px",
          }}
        >
          Allows the engineer to check for any working faults.
        </div>
        <div
          style={{
            padding: "10px 0 10px 0",
            fontWeight: "600",
            fontStyle: "italic",
          }}
        >
          How long does a boiler service take?
        </div>
        A boiler service should take 30-45 minutes, but the time will vary
        depending on the brand and model. Afterwards, the engineer will likely
        give you a service report, explaining what they’ve done. Don’t be afraid
        to ask any questions, you might have regarding the boiler service, we
        will likely be very happy to explain things and advise you
        appropriately.
        <div
          style={{
            padding: "10px 0 10px 0",
            fontWeight: "600",
            fontStyle: "italic",
          }}
        >
          When should I service my boiler?
        </div>
        As we’ve mentioned, any boiler should be serviced annually, this not
        only efficiently but is alsensures that the heating system is running
        safely and o a requirement to keep the warranty valid in many cases. The
        best time of year is during the summer, when there’s less reliance on
        your boiler. This way, you know that your boiler is ready to heat your
        home come the cold winter months. You’ll also find that engineers aren’t
        as busy at this time of year.
        <div className="pt-10">
          If you’re concerned that your boiler may not be working correctly, it
          is advisable to get in touch even if your annual service is not yet
          due as there could be a safety issue.
        </div>
      </div>
    </div>
  );
};

export default WorkspaceServiceBoilerMaintenance;
