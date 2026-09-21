import maintenanceImg from '../assets/boiler-maintenance.jpg'
import installationImg from '../assets/boiler-installation.jpg'
import repairImg from '../assets/boiler-repair.jpeg'
import legionellaImg from '../assets/hero-bg.jpg'
import plumbingImg from '../assets/plumbing.jpg'
import heatPumpImg from '../assets/heat-pump.jpg'

export interface ServiceBulletGroup {
  heading: string
  items: string[]
}

export interface ServiceInfo {
  slug: string
  title: string
  image: string
  imageAlt: string
  summary: string
  details: string[]
  bulletGroups?: ServiceBulletGroup[]
}

export const SERVICES: ServiceInfo[] = [
  {
    slug: 'maintenance',
    title: 'Boiler Service',
    image: maintenanceImg,
    imageAlt: "An engineer adjusting a boiler's control panel with a screwdriver during a service",
    summary:
      'An annual service is the simplest way to keep your boiler safe, efficient, and running exactly as it should through another Fife winter.',
    details: [
      "An annual service isn't just a box-ticking exercise — it's the main opportunity for a Gas Safe engineer to catch a safety issue such as a carbon monoxide leak before it puts you or your family at risk. Carbon monoxide is invisible and odourless, and exposure can cause serious harm surprisingly quickly, so if you ever notice your boiler's flame burning orange instead of a crisp blue, don't wait for your next scheduled service — get it checked straightaway.",
      "Servicing also protects your wallet in two ways. An older, neglected boiler gradually loses efficiency and burns more fuel to produce the same amount of heat, so a proper service keeps every component working as it should and your bills lower for longer. It also means small issues, like a worn part or a developing pressure fault, get caught and fixed while they're still cheap, rather than turning into a full breakdown and a much bigger repair bill. And because most manufacturers only honour a boiler's warranty if it's serviced annually by a Gas Safe registered engineer, keeping up with servicing is often what keeps that cover valid in the first place.",
      "Most services take around 30 to 45 minutes, though this varies by brand and model, and you'll get a written service report afterwards explaining exactly what was done — ask us anything you're unsure about while we're on site. The best time to book is over summer, when demand is lower and you're not relying on the boiler day to day, so everything's ready before the cold sets in. That said, if you're ever concerned your boiler isn't working correctly, it's worth getting it looked at regardless of where you are in the annual cycle.",
    ],
    bulletGroups: [
      {
        heading: 'What we check during a service',
        items: [
          'A full visual inspection, confirming the boiler still meets current standards and checking for corrosion, leaks, or an unusual flame colour.',
          'The casing removed so we can inspect and clean the key components inside — typically the heat exchanger, burner, main injector, and spark probe, depending on the manufacturer.',
          "The flue, checked for obstructions and to confirm it's fitted and sealed safely.",
          'Gas pressure, tested to confirm the boiler is running at the correct setting.',
          "A full fire-up test, so we can catch any working faults while we're still there.",
        ],
      },
    ],
  },
  {
    slug: 'installation',
    title: 'Boiler Installation',
    image: installationImg,
    imageAlt: 'An engineer wiring the inside of a newly installed boiler',
    summary:
      'From choosing the right boiler for your home to a fully commissioned, Gas Safe registered installation — we handle the whole job.',
    details: [
      "Replacing an old boiler or installing one for the first time is a big decision, so we start by talking through your household's hot water and heating demand, the space you have available, and your budget. That way you're not paying for more boiler than you need, and you're never left short of hot water on a cold morning.",
      "Our engineers handle the complete installation from start to finish: removing the old unit where applicable, fitting new pipework, flue, and controls, and mounting the new boiler securely and in line with current Building Regulations. We work carefully and tidily, and we protect your floors and furniture while the job is underway.",
      "A newer, correctly sized boiler also runs more efficiently than an ageing one, using less fuel to produce the same heat — so alongside the safety and warranty benefits, a fresh installation can make a real difference to your ongoing heating bills.",
      "Every installation is fully commissioned and pressure-tested before we leave, and registered with Gas Safe on your behalf so your paperwork and any manufacturer warranty are in order from day one. We'll also walk you through your new controls and thermostat so you feel confident using the system straight away.",
    ],
  },
  {
    slug: 'repair',
    title: 'Boiler Repair',
    image: repairImg,
    imageAlt: "An engineer's gloved hands using pliers on boiler pipework during a repair",
    summary:
      "No heating or hot water? We diagnose the fault fast and, in most cases, get it fixed the same visit.",
    details: [
      "A boiler breakdown rarely happens at a convenient time, which is why we prioritise getting an engineer to your door quickly to diagnose the fault. Most call-outs cover common issues such as a loss of system pressure, a faulty thermostat or valve, unusual noises, leaks, or a boiler that won't ignite or keeps cutting out mid-cycle.",
      "We carry a range of common parts on the van so that, wherever possible, we can complete the repair on the same visit rather than leaving you waiting on an order. If a specialist part is needed, we'll explain exactly what's wrong in plain terms, agree a fair price before doing any work, and source the part as quickly as we can.",
      "Once the repair is finished, we test the whole system — pressure, ignition, and safety checks — before we consider the job done, so you're not left wondering whether the same fault will come back a week later.",
    ],
  },
  {
    slug: 'plumbing',
    title: 'Plumbing',
    image: plumbingImg,
    imageAlt: 'A plumber fitting a radiator pipe with a wrench',
    summary:
      "From a dripping tap to a leaking pipe, our engineers handle general plumbing around the home — not just the parts connected to the boiler.",
    details: [
      "Not every plumbing problem is boiler-related, and you shouldn't need to ring around for a separate plumber every time a tap won't stop dripping or a radiator valve seizes up. Because our engineers are trained across both gas and general plumbing work, we can sort day-to-day household issues on the same visit as anything heating-related, or as a job on its own.",
      "Typical call-outs cover leaking or burst pipes, dripping taps and worn washers, blocked or slow-draining sinks, running or faulty toilet cisterns, radiator valves that won't turn or won't seal, and fitting or replacing basins, taps, and other fixtures. If water's pooling somewhere it shouldn't, or a fitting's corroded and needs replacing, we can usually diagnose it quickly and sort it on the spot.",
      "As with all our work, we test everything before we leave — checking for leaks under pressure, confirming drainage runs clear, and making sure taps and valves operate smoothly — so you're not left wondering whether the fix will hold.",
    ],
  },
  {
    slug: 'heat-pump',
    title: 'Heat Pump Service',
    image: heatPumpImg,
    imageAlt: 'A technician inspecting an outdoor heat pump unit with a torch',
    summary:
      "Heat pumps need less looking after than a boiler, but a yearly check keeps yours running efficiently and catches small issues before they affect your heating.",
    details: [
      "Heat pumps are built to run with minimal fuss, but that doesn't mean they're maintenance-free. An annual check keeps the system working as efficiently as it was designed to, and picks up on small issues — a blocked airflow path, a struggling fan, a condensate drain that's started to clog — before they turn into a system working harder than it needs to, or one that stops working altogether.",
      "Because a heat pump's outdoor unit sits outside all year round, it's exposed to leaves, debris, frost, and general weather in a way a boiler never is. We check that airflow around the unit isn't restricted, that the condensate drain is clear and draining properly, and that the defrost cycle is working as it should through the colder months — all things that quietly affect performance if left unchecked.",
      "We also check the electrical connections and controls, test the system's overall performance against its expected output, and clean or replace filters where fitted. As with all our work, you'll get a written record of what was checked and any recommendations, so you know exactly where your system stands going into the next heating season.",
    ],
    bulletGroups: [
      {
        heading: 'What we check during a service',
        items: [
          'The outdoor unit and surrounding area, cleared of leaves, debris, and anything restricting airflow.',
          'The condensate drain, checked and cleared so water can drain away properly.',
          'Electrical connections and controls, tested for safe and correct operation.',
          'System performance, checked against expected output to catch efficiency drops early.',
          'Filters, cleaned or replaced where fitted, to keep airflow and efficiency up.',
        ],
      },
    ],
  },
  {
    slug: 'legionella',
    title: 'Legionella Risk Assessment',
    image: legionellaImg,
    imageAlt: 'Abstract graphic of water and flame representing hot water and heating systems',
    summary:
      'A structured review of your water systems to identify and control the risk of Legionella bacteria, keeping your property safe and legally compliant.',
    details: [
      "A Legionella risk assessment is a structured review of the water systems in a building, carried out to work out whether conditions could allow Legionella bacteria to grow and spread. We look at how water is stored, the temperatures it's held and moved at, how the system is designed, how often outlets are used, and how the system is currently maintained — all factors that influence whether bacteria can take hold.",
      "As part of the assessment, we also consider who could be exposed if a problem went unnoticed, and how serious the consequences could be, so any control measures we recommend are proportionate to the actual risk rather than a generic checklist. At the end of the assessment, you'll have a clear picture of where your water systems stand, what — if anything — needs to change, and the paperwork to show you're meeting your legal duty of care.",
    ],
  },
]
