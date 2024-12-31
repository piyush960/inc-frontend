const impetus_domains = [
	{ value: "", label: "Select Option" },
	{ value: "AD", label: "Application Development (AD)" },
	{ value: "CN", label: "Communication Networks and Security Systems (CN)" },
	{ value: "DSP", label: "Digital / Image/ Speech / Video Processing (DSP)" },
	{ value: "ES", label: "Embedded/VLSI Systems (ES)" },
	{ value: "ML", label: "Machine Learning and Pattern Recognition (ML)" },
	{ value: "OT", label: "Others (OT)" },
];

const yearOptions = [
	{ value: "", label: "Select Year" },
	{ value: "FE", label: "First Year" },
	{ value: "SE", label: "Second Year" },
	{ value: "TE", label: "Third Year" },
	{ value: "BE", label: "Final Year" }
];

const localityOptions = [
	{ value: "urban", label: "Urban" },
	{ value: "rural", label: "Rural" }
];

const modeOptions = [
	{ value: "offline", label: "Offline" },
	{ value: "online", label: "Online" }
];

const yesNoOptions = [
	{ value: true, label: "Yes" },
	{ value: false, label: "No" }
];


export { impetus_domains, yearOptions, localityOptions, modeOptions, yesNoOptions }