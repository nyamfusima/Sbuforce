/**
 * Single source of truth for all site content.
 * Every value below is taken directly from the SBUFORCE SECURITY company profile.
 * Update this file to change copy across the site.
 *
 * Content policy (see RULES.md): this file keeps the client's full factual
 * record (including registration/PSIRA/CIPC numbers), but components should
 * only render what helps a customer answer "who/what/why trust/how to
 * contact" — not every field that exists here. Raw registration numbers are
 * intentionally NOT surfaced in any component; use `trustBadges` instead.
 */

export const company = {
  name: "SbuForce Security",
  legalName: "SBUFORCE SECURITY (PTY) LTD",
  regNo: "2020/232382/07",
  cipcRegNo: "2020/668823/07",
  psiraNo: "3132804",
  founded: "2020",
  founder: "Miss Sikeza Stiwa",
  website: "www.sbuforcesecurity.co.za",
  phones: [
    {
      label: "Managing Director",
      value: "+27 (0) 78 798 4296",
      tel: "+27787984296",
      whatsapp: "27787984296",
    },
    {
      label: "Director",
      value: "+27 (0) 73 176 6553",
      tel: "+27731766553",
      whatsapp: "27731766553",
    },
    { label: "Office", value: "+27 (0) 11 395 5709", tel: "+27113955709" },
    { label: "Fax / Share call", value: "+27 (0) 86 471 9877", tel: "+27864719877" },
  ],
  emails: ["nkosi@sbuforcesecurity.co.za", "sizeka@sbuforcesecurity.co.za"],
  address: {
    lines: ["437 Sam Green Street", "Tunney Industrial Meadowdale", "Germiston", "1400"],
    short: "Meadowdale, Germiston, Gauteng",
  },
} as const;

/** Real, non-fabricated tenure — derived from the founding year, never hand-typed. */
export const yearsOperating = new Date().getFullYear() - Number(company.founded);

export const mission = [
  "We provide the foremost in Security Guard Services availaible today. Whether your concerns are Corporate, Commercial, Industrial or Residential; we provide you with the ultimate in security and confidentiality you demand, thereby creating the peace of mind you deserve.",
  "Our quality is no illusion. Excellence in security guard services means preventing incidents or responding appropriately to unavoidable events. We ensure that security is always a solution and never a problem.",
];

export const vision = [
  "We are determined to be the best security services company in the market. We continually earn recognition and trust from our clients and staff through our stability to anticipate, team and shape our future.",
  "Our Purpose is to serve and protect our clients and their assets with our comprehensive security solutions, borne out of our collective wealth of experience and expertise in the corporate, commercial, industrial and residential security sectors.",
  "We foster a distinctive culture of ambition, performance and learning, as this attracts, retains and develops the best talent in our company.",
];

export type Service = {
  title: string;
  description?: string;
};

export type ServiceGroup = {
  title: string;
  intro: string;
  items: Service[];
};

/** "OUR SERVICES" from the profile, organised into the two natural groups the business itself operates as. */
export const serviceGroups: ServiceGroup[] = [
  {
    title: "Guarding & Armed Response",
    intro: "Trained guards on site, backed by armed response on every contract.",
    items: [
      {
        title: "Guards",
        description: "Permanent, Short Term, Day/Night guards deployed across all grades.",
      },
      {
        title: "Monitored Patrols",
        description:
          "All grades of guard perform routine patrols and regular perimeter checks. Every patrol is tagged so completion can be verified.",
      },
      {
        title: "Guard House",
        description:
          "Protects your guard on site and holds the radio and panic equipment used to communicate with the control room.",
      },
      {
        title: "Armed Response",
        description:
          "Included with every guarding contract, for each site where our guards are deployed.",
      },
    ],
  },
  {
    title: "Monitoring & Access Control",
    intro: "A 24-hour control room and the technology behind it.",
    items: [
      {
        title: "24 Hour Control Room",
        description:
          "Trained staff monitor client cameras around the clock and can dispatch an armed response vehicle at a moment's notice.",
      },
      {
        title: "CCTV & Off-Site Monitoring",
        description:
          "Installation, maintenance and off-site monitoring — analogue or IP camera setups.",
      },
      { title: "Alarm Monitoring" },
      { title: "Electric Fence Monitoring" },
      { title: "Advanced Access Control" },
    ],
  },
];

/** "Installations, Maintenance and Repairs of" */
export const installations = [
  "Alarm Systems",
  "Electric Fencing",
  "Gate Motors",
  "CCTV",
  "Intercom Systems",
  "Biometrics",
  "Access Control Equipment",
  "Wireless CCTV",
  "Off-Site Monitoring Systems",
];

/** "Specialising in Guarding of" — the customer segments the business actually serves. */
export const sectors = [
  "Retail and Commercial",
  "Corporate and Industrial",
  "Estates and Complexes",
  "School and Hospitals",
  "Construction Sites / Building Yards",
  "City and Business Districts",
  "Road and Suburb Closures",
  "Gaming and Hospitality",
  "Events",
  "Warehouses",
];

/** "Compliance" section from the profile. */
export const compliance = {
  intro:
    "All guards in the service of SbuForce Security are strictly evaluated and screened in accordance to the minimum standard of the South African Security Officers Boards.",
  points: [
    "All guards are graded and registered with S.O.S.",
    "All guards must have an original South African Identification Document.",
    "All guards undergo a strict training program before being placed at a guarding site.",
    "All guards undergo random polygraph tests.",
  ],
};

export const cctvDetail = [
  "We also record all feeds at our control room, which means that even if your DVR is stolen, we would still have a backup of all your recorded video streams.",
  "SbuForce Security will strategically place cameras in known vulnerable areas, ensuring that your assets are closely monitored.",
  "We can install and monitor as many cameras as you require, from small 4 camera setups to 64 camera multi-DVR setups. We can also give you the option of guardless entry at your site from our control room.",
];

export const management = [
  {
    name: "Mr. Sibusiso Nkosi",
    role: "Managing Director",
    cell: "078 798 4296",
    tel: "+27787984296",
    email: "nkosi@sbuforcesecurity.co.za",
  },
  {
    name: "Mrs. Sizeka Stiwa",
    role: "Director",
    cell: "073 176 6553",
    tel: "+27731766553",
    email: "sizeka@sbuforcesecurity.co.za",
  },
];

/**
 * Customer-facing trust marks — status only, never the underlying registration
 * number/ID. See RULES.md: raw registration/CIPC/tax/PSIRA numbers are
 * available on request, not displayed on the site.
 */
export const trustBadges = [
  "PSIRA Registered",
  "PSIRA Grade B",
  "CIPC Registered Company",
  "Tax Compliant",
  "B-BBEE Compliant",
];

export const serviceOptions = [
  "Guards (Permanent, Short Term, Day/Night)",
  "Monitored Patrols",
  "24 Hour Control Room",
  "Guard House",
  "Armed Response",
  "CCTV & Off-Site Monitoring",
  "Alarm Monitoring",
  "Electric Fence Monitoring",
  "Advanced Access Control",
  "Installations, Maintenance and Repairs",
];

/**
 * Frequently asked questions — every answer paraphrases a fact that already
 * exists elsewhere in this file (services, compliance, trustBadges). Do not
 * add a question whose answer isn't already true and derivable from this
 * file; see RULES.md section 18.
 */
export const faqs = [
  {
    question: "Does every guarding contract include armed response?",
    answer:
      "Yes. Every SbuForce Security guarding contract includes armed response for each site where our guards are deployed.",
  },
  {
    question: "Are your guards vetted before being placed on site?",
    answer:
      "All guards are graded and registered with the Security Officers Board, must hold a valid South African ID, complete a strict training programme before placement, and undergo random polygraph testing.",
  },
  {
    question: "Is your control room monitored around the clock?",
    answer:
      "Yes. Our control room is staffed 24 hours a day, monitoring client cameras and able to dispatch an armed response vehicle at a moment's notice.",
  },
  {
    question: "Do you install CCTV, or only monitor it?",
    answer:
      "Both. We install, maintain and monitor CCTV — analogue or IP camera setups — alongside alarm systems, electric fencing, gate motors, intercoms, biometrics and access control equipment.",
  },
  {
    question: "Is SbuForce Security PSIRA registered?",
    answer:
      "Yes. SbuForce Security is PSIRA registered (Grade B) and CIPC registered as a private security company.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Call, WhatsApp or email us directly, or use the quote form below. Tell us about your site and the service you need, and our team will come back to you with a quotation.",
  },
];
