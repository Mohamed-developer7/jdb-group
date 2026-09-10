// All photography is curated for high-caliber international real-estate development standards.
// Leadership photography utilizes verified executive photography provided by JDB.
// Architectural imagery utilizes high-resolution editorial photography.

const u = (id: string, w = 2400) =>
  `https://images.unsplash.com/${id}?q=85&w=${w}&auto=format&fit=crop`;

export const images = {
  heroArchitecture: u("photo-1600585154340-be6161a56a0c"), // confident modern architectural masterpiece at twilight
  heroSecondary: u("photo-1600607687939-ce8a6c25118c"), // warm luxury architectural interior/exterior
  lahore: u("photo-1600596542815-ffad4c1539a9"), // pristine high-end contemporary residence / DHA standard
  jannatFarms: u("photo-1613977257363-707ba9348227"), // luxury estate / Jannat Farms Bedian Road Lahore
  gwadar: u("photo-1544551763-46a013bb70d5"), // deep-sea azure coastal maritime corridor & port waters
  islamabad: u("photo-1512917774080-9991f1c4c750"), // modern capital masterplanned luxury residence & skyline
  islamabadAirport: u("photo-1486406146926-c627a92ad1ab"), // modern glass capital commercial tower & infrastructure
  gilgitBaltistan: u("photo-1542314831-068cd1dbfeeb"), // luxury alpine boutique hotel / northern hospitality architecture
  leadershipPortrait: "/images/leadership/ali-malik-award-enhanced.jpg", // Verified CEO Ali Malik Asghar receiving award at NDU International CPEC Workshop
  leadershipSecondary: "/images/leadership/ali-malik-asghar-ndu.jpg",
  investment: u("photo-1497366216548-37526070297c"), // sleek architectural atrium / institutional governance
  landBank: u("photo-1500382017468-9049fed747ef"), // sprawling strategic land & development acreage
  strategicPartnerships: u("photo-1486406146926-c627a92ad1ab"), // international corporate glass towers
  international: u("photo-1512453979798-5ea266f8880c"), // Dubai / GCC skyline & global commerce
  dubai: u("photo-1512453979798-5ea266f8880c"), // Dubai skyline
  beijing: u("photo-1508804185872-d7badad00f7d"), // Beijing skyline
  london: u("photo-1513635269975-59663e0ac1ad"), // London financial district
  cpecCorridor: u("photo-1477959858617-67f30bc75b82"), // infrastructure & trade corridor
  brandSheet: "/images/brand/jdb-identity-sheet.jpg",
  jannatLogo: "/images/brand/jannat-developers-logo.jpg",
} as const;


