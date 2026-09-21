import maintenanceImg from '../assets/boiler-maintenance.jpg'
import installationImg from '../assets/boiler-installation.jpg'
import heatPumpImg from '../assets/heat-pump.jpg'
import repairImg from '../assets/boiler-repair.jpeg'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  imageAlt: string
  body: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-often-service-boiler',
    title: 'How Often Should You Service Your Boiler?',
    excerpt:
      'An annual service is the standard advice — here\'s why it matters, what it actually involves, and what happens if you skip it.',
    date: '2026-01-15',
    readTime: '4 min read',
    image: maintenanceImg,
    imageAlt: "An engineer adjusting a boiler's control panel with a screwdriver during a service",
    body: [
      "Most boiler manufacturers recommend a service once a year, and most manufacturer warranties make it a condition of staying covered. Skip a service and you can find a warranty claim refused even if the fault has nothing to do with maintenance — so from a purely financial point of view, an annual service is usually the cheapest insurance you can buy for an expensive appliance.",
      "A proper service covers more than a quick look. It typically includes a visual inspection of the boiler and its flue, a check of the gas pressure and burner performance, a combustion analysis to make sure the boiler is burning gas cleanly and safely, and a check of any safety devices and controls. If anything looks like it's wearing out, that's the point where it gets flagged — usually well before it causes a breakdown.",
      "The other reason an annual service matters is safety. A boiler that isn't burning gas properly can produce carbon monoxide, a gas with no smell or colour that can be fatal in a poorly ventilated space. A service checks for exactly that risk, alongside general safety and efficiency.",
      "If it's been over a year since your last service, or you're not sure when it last happened, that's a reasonable point to book one in — ideally before winter, when your boiler is working hardest and a breakdown is most inconvenient.",
    ],
  },
  {
    slug: 'signs-of-a-gas-leak',
    title: 'Signs of a Gas Leak: What to Do',
    excerpt:
      'Gas leaks are rare but serious. Here are the warning signs to know, and the steps to take if you suspect one.',
    date: '2026-02-03',
    readTime: '3 min read',
    image: repairImg,
    imageAlt: "An engineer's gloved hands using pliers on boiler pipework during a repair",
    body: [
      "Natural gas is odourless on its own, so suppliers add a distinctive smell — often described as like rotten eggs or sulphur — specifically so a leak is noticeable. If you smell that anywhere in or around your home, take it seriously. Other signs include a hissing sound near a gas pipe or appliance, dead or discoloured vegetation over an underground gas line, or bubbles in standing water near a suspected leak outdoors.",
      "Carbon monoxide is a separate but related risk, produced when gas doesn't burn properly — for example in a boiler with a fault or a blocked flue. Unlike a raw gas leak, carbon monoxide has no smell at all, which is why a working carbon monoxide alarm in the same room as any gas appliance is so important. Symptoms of exposure include headaches, dizziness, nausea, and tiredness — often mistaken for flu or tiredness, especially if everyone in the house feels it at the same time.",
      "If you suspect a gas leak: don't smoke, don't use light switches or anything that could create a spark, turn off the gas supply at the meter if it's safe to reach, open doors and windows, leave the property, and call the National Gas Emergency line on 0800 111 999 from outside. That number is free, available 24 hours a day, and is the right first call for a suspected leak — not a general call-out to a gas engineer, since it's a safety emergency line staffed specifically for this.",
      "Once the immediate danger is dealt with, a Gas Safe registered engineer can identify and fix the underlying fault so you can safely use gas again.",
    ],
  },
  {
    slug: 'boiler-vs-heat-pump',
    title: 'Boiler vs Heat Pump: Which Is Right for Your Home?',
    excerpt:
      "Heat pumps are becoming more common in the UK, but they're not a like-for-like swap for a gas boiler in every home. Here's what to weigh up.",
    date: '2026-03-10',
    readTime: '5 min read',
    image: heatPumpImg,
    imageAlt: 'A technician inspecting an outdoor heat pump unit with a torch',
    body: [
      "A gas boiler heats water by burning gas directly, producing high-temperature heat quickly on demand. A heat pump instead extracts heat from the outside air (or ground, for some systems) and concentrates it to a usable temperature — more like a fridge working in reverse. Because it's moving heat rather than generating it from combustion, a heat pump can be far more efficient over a year, but it typically produces lower flow temperatures, which changes how well it suits a given home.",
      "The biggest factor is insulation. A heat pump works best in a well-insulated home with radiators (or underfloor heating) sized for lower flow temperatures. A poorly insulated older property with small radiators designed around a hot gas boiler may need radiator upgrades or better insulation to get comparable comfort from a heat pump — which affects the overall cost of switching.",
      "Upfront cost is another consideration. A heat pump installation is generally more expensive than a straight boiler swap, though government schemes have at times offered grants to offset some of that cost, and running costs can be lower depending on your electricity and gas prices. Running costs vary from property to property, so a proper assessment of your home is worth more than a generic average.",
      "For most homes right now, a straightforward, well-maintained gas boiler is still the simpler and often cheaper option, especially in an older property without major insulation work already done. A heat pump makes most sense either in a newer, well-insulated home, or where a homeowner is planning wider energy efficiency upgrades anyway. If you're weighing it up, an on-site assessment is the only reliable way to know which makes sense for your specific property.",
    ],
  },
  {
    slug: 'preparing-heating-for-winter',
    title: 'Preparing Your Heating System for Winter',
    excerpt:
      "A few simple checks in autumn can be the difference between a warm winter and an emergency call-out in the cold.",
    date: '2026-09-01',
    readTime: '4 min read',
    image: installationImg,
    imageAlt: 'An engineer wiring the inside of a newly installed boiler',
    body: [
      "Boilers get far more use in winter, and faults that were minor in summer — a slow drip, an intermittent fault code, a radiator that's been cold at the top for months — tend to turn into full breakdowns exactly when you need heating most. Booking a service in autumn, before the cold weather starts, means any issues get caught and fixed while it's still a routine job rather than an emergency.",
      "Bleeding your radiators is a simple job worth doing before winter. If the top of a radiator stays cool while the bottom heats up, there's air trapped inside reducing its efficiency. A radiator key, a cloth, and a few minutes per radiator is usually all it takes, though if you're not confident doing it yourself an engineer can do it as part of a service visit.",
      "Check your boiler pressure too — most modern combi boilers display this on the front panel, and it should typically sit around 1 to 1.5 bar when the heating is off (check your specific boiler's manual, as this varies). Low pressure is a common, usually simple, cause of heating problems, and topping it up is often something you can do yourself following your boiler's instructions.",
      "Finally, make sure your outdoor condensate pipe (a plastic pipe running from your boiler to an outside drain) is protected against freezing if it's exposed to the elements — a frozen condensate pipe is one of the most common causes of a boiler breaking down on the coldest days of the year, and it's avoidable with some pipe insulation ahead of time.",
    ],
  },
  {
    slug: 'what-does-gas-safe-registered-mean',
    title: 'What Does "Gas Safe Registered" Actually Mean?',
    excerpt:
      "It's a phrase you'll see on every legitimate gas engineer's van and website — here's what it actually guarantees, and how to check it yourself.",
    date: '2026-04-22',
    readTime: '3 min read',
    image: maintenanceImg,
    imageAlt: "An engineer adjusting a boiler's control panel with a screwdriver during a service",
    body: [
      "Gas Safe Register is the official, legally required register for anyone who works with gas appliances and installations in Great Britain — it replaced the old CORGI scheme in 2009. By law, anyone carrying out gas work has to be on the register, and it's a criminal offence for an unregistered person or business to carry out that work.",
      "Being registered isn't a one-off box-tick. Engineers are assessed against specific categories of gas work — for example domestic gas boilers, cookers, or fires are all separate qualifications — and being registered only covers the categories an engineer has actually been assessed on. That's what the ID card shows: not just that someone is registered, but exactly which types of gas work they're qualified to carry out.",
      "You're entitled to ask to see that ID card before any engineer starts work on your property, and it's a completely normal thing to ask for — a legitimate engineer will expect it. If you want to check independently, the Gas Safe Register website lets you search any engineer or business by name or licence number, free of charge, so you can confirm registration before booking a job rather than taking it on trust.",
      "The safety reasoning behind all of this is straightforward: badly installed or maintained gas appliances can leak carbon monoxide, an invisible, odourless gas that can be fatal. Gas Safe registration exists specifically to make sure anyone working on your gas system has been independently assessed as competent to do it safely.",
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}
