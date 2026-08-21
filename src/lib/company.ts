/**
 * Single source of truth for all site content.
 * Every value below is taken directly from the SBUFORCE SECURITY company profile.
 * Update this file to change copy across the site.
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
    { label: "Managing Director", value: "+27 (0) 78 798 4296", tel: "+27787984296", whatsapp: "27787984296" },
    { label: "Director", value: "+27 (0) 73 176 6553", tel: "+27731766553", whatsapp: "27731766553" },
    { label: "Office", value: "+27 (0) 11 395 5709", tel: "+27113955709" },
    { label: "Fax / Share call", value: "+27 (0) 86 471 9877", tel: "+27864719877" },
  ],
  emails: ["nkosi@sbuforcesecurity.co.za", "sizeka@sbuforcesecurity.co.za"],
  address: {
    lines: ["437 Sam Green Street", "Tunney Industrial Meadowdale", "Germiston", "1400"],
    short: "Meadowdale, Germiston, Gauteng",
  },
} as const;

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
  items?: string[];
};

/** "OUR SERVICES" list from the profile. */
export const services: Service[] = [
  {
    title: "Guards",
    description: "Permanent, Short Term, Day/Night guards deployed across all grades.",
  },
  {
    title: "Monitored Patrols",
    description:
      "SbuForce Security deploys all grades of guard that will perform routine patrols throughout your premises as well as regular perimeter checks. All patrols are tagged to ensure that your guard is consistently and successfully completed. All guarding contracts come with armed response for each site where our guards are deployed.",
  },
  {
    title: "24 Hour Control Room",
    description:
      "Our control room has highly trained staff monitoring our clients' cameras 24/7 and can send out an armed response vehicle at a moment's notice should there be an incident.",
  },
  {
    title: "Guard House",
    description:
      "A guard house can offer your guard some protection and hold the radio and panic equipment needed to communicate with the control room officer.",
  },
  { title: "Armed Response" },
  {
    title: "CCTV & Off-Site Monitoring",
    description:
      "SbuForce Security provides CCTV installments, maintenance and off-site monitoring as well as recording. We can offer analogue setups or the more advanced IP camera setups.",
  },
  { title: "Alarm Monitoring" },
  { title: "Electric Fence Monitoring" },
  { title: "Advanced Access Control" },
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

/** "Specialising in Guarding of" */
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

/** Registrations & documents included in the company profile. */
export const credentials = [
  { label: "PSIRA Registered Company", value: `Reg No. ${company.psiraNo}` },
  { label: "Company Registration", value: `Reg No. ${company.regNo}` },
  { label: "CIPC Registration Certificate", value: "SBUFORCE SECURITY (PTY) LTD — registered 26/08/2020" },
  { label: "SARS Tax Compliance Status", value: "Tax compliance status verification issued by SARS" },
  { label: "B-BBEE Sworn Affidavit", value: "Exempt Micro Enterprise" },
  { label: "PSIRA Grade B Director", value: "Grade B security service provider registration" },
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
