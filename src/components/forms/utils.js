
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

	return validate_isEmpty.bool(formData.title) || !formData.domain || !formData.project_type || validate_isEmpty.bool(formData.guide_name) || validate_email.bool(formData.guide_email) || validate_phone.bool(formData.guide_phone) || validate_email.bool(formData.hod_email) || (formData.sponsored === "1" && validate_isEmpty.bool(formData.company)) || validate_wordCount.bool(formData.abstract.trim().split(/\s+/).length, 150, 300) || (formData.demo === "0" && validate_isEmpty.bool(formData.reason_of_demo))

};

const validateMember = (member) => {

	return validate_isEmpty.bool(member.name) || validate_email.bool(member.email) || validate_phone.bool(member.phone) || validate_isEmpty.bool(member.gender) || validate_isEmpty.bool(member.member_id)

};

const validateCollegeDetails = (formData) => {
	return formData.isPICT === null || formData.isInternational === null || validate_isEmpty.bool(formData.year) || validate_isEmpty.bool(formData.college) || validate_isEmpty.bool(formData.country) || validate_isEmpty.bool(formData.state) || validate_isEmpty.bool(formData.city) || validate_isEmpty.bool(formData.district) || validate_isEmpty.bool(formData.locality) || validate_isEmpty.bool(formData.mode) || (formData.mode === '0' && validate_isEmpty.bool(formData.reason_of_mode))

};

export { validate, validate_isEmpty, validate_phone, validate_email, validate_wordCount, validateMember, validateCollegeDetails }