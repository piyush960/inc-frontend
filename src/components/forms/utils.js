
const validate_isEmpty = {
	bool: (value) => (!value),
	message: (msg) => (msg || 'Field Cannot be empty'),
}

const validate_email = {
	bool: (value) => (!/\S+@\S+\.\S+/.test(value)),
	message: (msg) => (msg || 'Enter a Valid Email ID'),
}

const validate_phone = {
	bool: (value) => (!/^\d+$/.test(value)),
	message: (msg) => (msg || 'Enter a Valid Phone No.'),
}

const validate_wordCount = {
	bool: (value, min, max) => (min > value || value > max), message: (msg, min, max) => (msg || `Required words between ${min} and ${max}`)
}

const validate = (formData) => {

	return validate_isEmpty.bool(formData.title) || !formData.domain || !formData.project_type || validate_isEmpty.bool(formData.guide_name) || validate_email.bool(formData.guide_email) || validate_phone.bool(formData.guide_phone) || validate_email.bool(formData.hod_email) || (formData.sponsored && validate_isEmpty.bool(formData.company)) || validate_wordCount.bool(formData.abstract.trim().split(/\s+/).length, 150, 300) || (!formData.demo && validate_isEmpty.bool(formData.no_demo_reason))

	if (formData.title.length === 0) return true;
	if (!formData.domain) tempErrors.domain = "Please select a domain.";
	if (!formData.project_type)
		tempErrors.project_type = "Please select a project type.";
	if (formData.guide_name.length < 3 || formData.guide_name.length > 100)
		tempErrors.guide_name =
			"Guide name must be between 3 and 100 characters.";
	if (!/\S+@\S+\.\S+/.test(formData.guide_email))
		tempErrors.guide_email = "Please enter a valid email.";
	if (!/^\d+$/.test(formData.guide_phone))
		tempErrors.guide_phone = "Phone number must contain only numbers.";
	if (!/\S+@\S+\.\S+/.test(formData.hod_email))
		tempErrors.hod_email = "Please enter a valid email.";
	if (formData.sponsored && formData.company.length === 0)
		tempErrors.company = "Company name is required for sponsored projects.";
	if (abstractWordCount < 150 || abstractWordCount > 200)
		tempErrors.abstract = "Abstract must be between 150 and 200 words.";
	if (!formData.demo && formData.no_demo_reason.length === 0)
		tempErrors.no_demo_reason =
			"Please provide a reason for not showing a demo.";

	setErrors(tempErrors);
	return Object.keys(tempErrors).length === 0;
};

const validateMember = (member) => {

	return validate_isEmpty.bool(member.name) || validate_email.bool(member.email) || validate_phone.bool(member.phone) || validate_isEmpty.bool(member.gender) || validate_isEmpty.bool(member.collegeID)

	let tempErrors = {};
	if (!member.name) tempErrors.name = "Name is required.";
	if (!/\S+@\S+\.\S+/.test(member.email))
		tempErrors.email = "Please enter a valid email.";
	if (!/^\+?\d+$/.test(member.phone))
		tempErrors.phone = "Phone number must be valid.";
	if (!member.gender) tempErrors.gender = "Gender is required.";
	if (!member.idCard) tempErrors.idCard = "ID card is required.";
	return tempErrors;
};

const validateCollegeDetails = (formData) => {
	return formData.isPICT === null || formData.isInternational === null || validate_isEmpty.bool(formData.year) || validate_isEmpty.bool(formData.college) || validate_isEmpty.bool(formData.country) || validate_isEmpty.bool(formData.state) || validate_isEmpty.bool(formData.city) || validate_isEmpty.bool(formData.district) || validate_isEmpty.bool(formData.locality) || validate_isEmpty.bool(formData.mode) || (formData.mode === 'online' && validate_isEmpty.bool(formData.reason_of_mode))

};

export { validate, validate_isEmpty, validate_phone, validate_email, validate_wordCount, validateMember, validateCollegeDetails }