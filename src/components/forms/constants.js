const impetus_domains = [
	{ value: "", label: "Select Option" },
	{ value: "AD", label: "Application Development (AD)" },
	{ value: "CN", label: "Communication Networks and Security Systems (CN)" },
	{ value: "DSP", label: "Digital / Image/ Speech / Video Processing (DSP)" },
	{ value: "ES", label: "Embedded/VLSI Systems (ES)" },
	{ value: "ML", label: "Machine Learning and Pattern Recognition (ML)" },
	{ value: "OT", label: "Other (OT)" },
];

const nova_domains = [
	{ value: "", label: "Select Option" },
	{ value: "AR", label: "Game Development (Arena)" },
	{ value: "MS", label: "Game Development (Mindscape)" },
	{ value: "DE", label: "3D Design" },
]

const yearOptions = [
	{ value: "", label: "Select Year" },
	{ value: "FE", label: "First Year" },
	{ value: "SE", label: "Second Year" },
	{ value: "TE", label: "Third Year" },
];

const yearOptionsNova = [
	{ value: "", label: "Select Year" },
	{ value: "FE", label: "First Year" },
	{ value: "SE", label: "Second Year" },
	{ value: "TE", label: "Third Year" },
	{ value: "BE", label: "Fourth Year" },
];

const yearOptionsConcepts = [
	{ value: "", label: "Select Year" },
	{ value: "BE", label: "Final Year" }
]

const localityOptions = [
	{ value: "1", label: "Urban" },
	{ value: "0", label: "Rural" }
];

const modeOptions = [
	{ value: "1", label: "Offline" },
	{ value: "0", label: "Online" }
];

const yesNoOptions = [
	{ value: "1", label: "Yes" },
	{ value: "0", label: "No" }
];

const judgingSlots = [
  { value: "1", label: "Friday 5th April (10:00 AM - 1:00 PM)" },
  { value: "2", label: "Friday 5th April (2:00 PM - 5:00 PM)" },
  { value: "3", label: "Friday 5th April (5:00 PM - 7:00 PM)" },
  { value: "4", label: "Saturday 6th April (10:00 AM - 01:00 PM)" },
  { value: "5", label: "Saturday 6th April (2:00 PM - 5:00 PM)" },
  { value: "6", label: "Saturday 6th April (5:00 PM - 7:00 PM)" },
];

export { impetus_domains, yearOptions, localityOptions, modeOptions, yesNoOptions, yearOptionsConcepts, nova_domains, yearOptionsNova, judgingSlots, }