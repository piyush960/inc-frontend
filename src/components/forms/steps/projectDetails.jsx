import React, { useReducer, useRef, useState } from "react";
import { Input } from "../../ui/input";
import { Select } from "../../ui/select";
import { Label } from "../../ui/label";
import FormButton from "../FormButton";

import { validate_isEmpty, validate_email, validate_phone, validate_wordCount, validate } from "../utils";
import { impetus_domains } from "../constants";

const initialState = {
  title: "",
  domain: "",
  project_type: "",
  guide_name: "",
  guide_email: "",
  guide_phone: "",
  hod_email: "",
  is_sponsored: false,
  company: "",
  abstract: "",
  is_ndaSign: false,
  is_showDemo: true,
  no_demo_reason: "",
}

const reducer = (state, action) => {
  switch(action.type){
    case 'TITLE':
      return {...state, title: action.payload}
    case 'DOMAIN':
      return {...state, domain: action.payload}
    case 'PROJECT_TYPE':
      return {...state, project_type: action.payload}
    case 'GUIDE_NAME':
      return {...state, guide_name: action.payload}
    case 'GUIDE_EMAIL':
      return {...state, guide_email: action.payload}
    case 'HOD_EMAIL':
      return {...state, hod_email: action.payload}
    case 'IS_SPONSORED':
      return {...state, is_sponsored: action.payload}
    case 'COMPANY':
      return {...state, company: action.payload}
    case 'ABSTRACT':
      return {...state, abstract: action.payload}
    case 'IS_NDASIGN':
      return {...state, is_ndaSign: action.payload}
    case 'IS_SHOWDEMO':
      return {...state, is_showDemo: action.payload}
    case 'NODEMOREASON':
      return {...state, no_demo_reason: action.payload}
  }
}

const ProjectDetailsFormStep = ({ nextStep, prevStep }) => {
  const [ formData, setFormData ] = useState(initialState)

  const [errors, setErrors] = useState({});
  const [abstractWordCount, setAbstractWordCount] = useState(0);
  const [loading, setLoading] = useState(false);

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
    if(!validate(formData)){
      console.log('no errors')
    }
    else console.log('errors found')
  };

  return (
    <form
      className="w-full bg-tertiary p-4 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-8"
      onSubmit={handleSubmit}
    >
      {/* Title */}
      <div className="sm:col-span-2">
        <Label htmlFor="title" required>Title</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          placeholder="Enter project title"
        />
      </div>

      {/* Domain */}
      <div>
        <Label htmlFor="domain" required>Domain</Label>
        <Select
          id="domain"
          value={formData.domain}
          onChange={handleChange}
          options={impetus_domains}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          name="domain"
        />
      </div>

      {/* Project Type */}
      <div>
        <Label htmlFor="project_type"  required>Project Type</Label>
        <Select
          options={[
            { value: "", label: "Select Option" },
            { value: "hardware", label: "Open Hardware" },
            { value: "software", label: "Software" },
          ]}
          value={formData.project_type}
          onChange={handleChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          id="project_type"
          name="project_type"
        />
      </div>

      {/* Guide Name */}
      <div>
        <Label htmlFor="guide_name"  required>Guide Name</Label>
        <Input
          name="guide_name"
          id="guide_name"
          value={formData.guide_name}
          onChange={handleChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          placeholder="Enter guide's name"
        />
      </div>

      {/* Guide Email */}
      <div>
        <Label htmlFor="guide_email"  required>Guide Email</Label>
        <Input
          id="guide_email"
          name="guide_email"
          value={formData.guide_email}
          onChange={handleChange}
          validate={validate_email.bool}
          errorMessage={validate_email.message()}
          placeholder="Enter guide's email"
        />
      </div>

      {/* Guide Phone */}
      <div>
        <Label htmlFor="guide_phone"  required>Guide Phone</Label>
        <Input
          id="guide_phone"
          name="guide_phone"
          value={formData.guide_phone}
          onChange={handleChange}
          validate={validate_phone.bool}
          errorMessage={validate_phone.message()}
          placeholder="Enter guide's phone number"
        />
      </div>

      {/* HOD Email */}
      <div>
        <Label htmlFor="hod_email"  required>HOD Email</Label>
        <Input
          id="hod_email"
          name="hod_email"
          value={formData.hod_email}
          onChange={handleChange}
          validate={validate_email.bool}
          errorMessage={validate_email.message()}
          placeholder="Enter HOD's email"
        />
      </div>

      
      {/* Abstract */}
      <div className="sm:col-span-2">
        <Label htmlFor="abstract" required>Abstract</Label>
        <Input
          as="textarea"
          id="abstract"
          name="abstract"
          value={formData.abstract}
          onChange={handleChange}
          validate={(value) => validate_wordCount.bool(abstractWordCount, 150, 300)}
          errorMessage={validate_wordCount.message('', 150, 300)}
          placeholder="Enter abstract (150-200 words)"
          rows={5}
        />
        <div className="mt-1 text-sm text-secondary">
          Word count: {abstractWordCount} (150-200 words required)
        </div>
      </div>

      {/* Sponsored */}
      <div className="flex flex-col gap-4">
        <Label htmlFor="is_sponsored" className="flex items-center gap-2">
          <input
            type="checkbox"
            id="is_sponsored"
            name="is_sponsored"
            checked={formData.is_sponsored}
            onChange={handleChange}
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Is the project sponsored?
        </Label>
        {formData.is_sponsored && (
          <div className="">
            <Label htmlFor="company" required>Company Name</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              validate={validate_isEmpty.bool}
              errorMessage={validate_isEmpty.message()}
              placeholder="Enter company name"
            />
            <Label htmlFor="is_ndaSign" className="flex items-center gap-2 py-8">
              <input
                type="checkbox"
                id="is_ndaSign"
                name="is_ndaSign"
                checked={formData.is_ndaSign}
                onChange={handleChange}
                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Has NDA Signed Your Project?
            </Label>
          </div>
        )}
      </div>


      {/* Demo */}
      <div className="flex flex-col gap-4">
        <Label htmlFor="is_showDemo" required className="flex items-center gap-2">
          <input
            type="checkbox"
            name="is_showDemo"
            id="is_showDemo"
            checked={formData.is_showDemo}
            onChange={handleChange}
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Can you show a demo?
        </Label>
        {!formData.is_showDemo && (
          <div className="">
            <Label htmlFor="no_demo_reason" required>Reason for no demo</Label>
            <Input
              id="no_demo_reason"
              name="no_demo_reason"
              value={formData.no_demo_reason}
              onChange={handleChange}
              validate={validate_isEmpty.bool}
              errorMessage={validate_isEmpty.message()}
              placeholder="Enter reason for not showing a demo"
            />
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="sm:col-span-2 justify-self-end">
        <FormButton loading={loading} className={``} onClick={() => nextStep()}></FormButton>
      </div>
    </form>
  );
};

export default ProjectDetailsFormStep;
