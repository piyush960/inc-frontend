import React, { useState } from "react";
import { Input } from "../../ui/input";
import { Select } from "../../ui/select";
import { Label } from "../../ui/label";
import SubmitButton from "../submitButton";

const ProjectDetailsFormStep = ({nextStep}) => {
  const [formData, setFormData] = useState({
    title: "",
    domain: "",
    project_type: "",
    guide_name: "",
    guide_email: "",
    guide_phone: "",
    hod_email: "",
    sponsored: false,
    company: "",
    abstract: "",
    nda: false,
    demo: true,
    no_demo_reason: "",
  });

  const [errors, setErrors] = useState({});
  const [abstractWordCount, setAbstractWordCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const domains = [
    { value: null, label: "Select Option" },
    { value: "AD", label: "Application Development (AD)" },
    { value: "CN", label: "Communication Networks and Security Systems (CN)" },
    { value: "DSP", label: "Digital / Image/ Speech / Video Processing (DSP)" },
    { value: "ES", label: "Embedded/VLSI Systems (ES)" },
    { value: "ML", label: "Machine Learning and Pattern Recognition (ML)" },
    { value: "OT", label: "Others (OT)" },
  ];

  const validate = () => {
    let tempErrors = {};
    if (formData.title.length === 0) tempErrors.title = "Title is required.";
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "abstract") {
      setAbstractWordCount(value.trim().split(/\s+/).length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully!", formData);
      nextStep();
      alert("Form submitted successfully!");
    } else {
      console.log("Validation errors:", errors);
    }
  };

  return (
    <form
      className="space-y-6 border border-white max-w-2xl m-auto bg-black md:p-12 p-4 rounded-2xl"
      onSubmit={handleSubmit}
    >
      {/* Title */}
      <div>
        <Label required>Title</Label>
        <Input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter project title"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      {/* Domain */}
      <div>
        <Label required>Domain</Label>
        <Select
          options={domains}
          name="domain"
          onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
        />
        {errors.domain && (
          <p className="text-red-500 text-sm">{errors.domain}</p>
        )}
      </div>

      {/* Project Type */}
      <div>
        <Label required>Project Type</Label>
        <Select
          options={[
            { value: null, label: "Select Option" },
            { value: "hardware", label: "Open Hardware" },
            { value: "software", label: "Software" },
          ]}
          name="project_type"
          onChange={(e) =>
            setFormData({ ...formData, project_type: e.target.value })
          }
        />
        {errors.project_type && (
          <p className="text-red-500 text-sm">{errors.project_type}</p>
        )}
      </div>

      {/* Guide Name */}
      <div>
        <Label required>Guide Name</Label>
        <Input
          name="guide_name"
          value={formData.guide_name}
          onChange={handleChange}
          placeholder="Enter guide's name"
        />
        {errors.guide_name && (
          <p className="text-red-500 text-sm">{errors.guide_name}</p>
        )}
      </div>

      {/* Guide Email */}
      <div>
        <Label required>Guide Email</Label>
        <Input
          name="guide_email"
          value={formData.guide_email}
          onChange={handleChange}
          placeholder="Enter guide's email"
        />
        {errors.guide_email && (
          <p className="text-red-500 text-sm">{errors.guide_email}</p>
        )}
      </div>

      {/* Guide Phone */}
      <div>
        <Label required>Guide Phone</Label>
        <Input
          name="guide_phone"
          value={formData.guide_phone}
          onChange={handleChange}
          placeholder="Enter guide's phone number"
        />
        {errors.guide_phone && (
          <p className="text-red-500 text-sm">{errors.guide_phone}</p>
        )}
      </div>

      {/* HOD Email */}
      <div>
        <Label required>HOD Email</Label>
        <Input
          name="hod_email"
          value={formData.hod_email}
          onChange={handleChange}
          placeholder="Enter HOD's email"
        />
        {errors.hod_email && (
          <p className="text-red-500 text-sm">{errors.hod_email}</p>
        )}
      </div>

      {/* Sponsored */}
      <div>
        <Label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="sponsored"
            checked={formData.sponsored}
            onChange={handleChange}
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Is the project sponsored?
        </Label>
        {formData.sponsored && (
          <div className="mt-4">
            <Label required>Company Name</Label>
            <Input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter company name"
            />
            {errors.company && (
              <p className="text-red-500 text-sm">{errors.company}</p>
            )}
          </div>
        )}
      </div>

      {/* Abstract */}
      <div>
        <Label required>Abstract</Label>
        <Input
          as="textarea"
          onChange={handleChange}
          name="abstract"
          value={formData.abstract}
          placeholder="Enter abstract (150-200 words)"
          rows={5}
        />

        <div className="mt-1 text-sm text-gray-500">
          Word count: {abstractWordCount} (150-200 words required)
        </div>
        {errors.abstract && (
          <p className="text-red-500 text-sm">{errors.abstract}</p>
        )}
      </div>

      {/* Demo */}
      <div>
        <Label required className="flex items-center gap-2">
          <input
            type="checkbox"
            name="demo"
            checked={formData.demo}
            onChange={handleChange}
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Can you show a demo?
        </Label>
        {!formData.demo && (
          <div className="mt-4">
            <Label required>Reason for no demo</Label>
            <Input
              name="no_demo_reason"
              value={formData.no_demo_reason}
              onChange={handleChange}
              placeholder="Enter reason for not showing a demo"
            />
            {errors.no_demo_reason && (
              <p className="text-red-500 text-sm">{errors.no_demo_reason}</p>
            )}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <SubmitButton loading={loading}></SubmitButton>
    </form>
  );
};

export default ProjectDetailsFormStep;
