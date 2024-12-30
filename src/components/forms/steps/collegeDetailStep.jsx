import React, { useState } from "react";
import { Select } from "../../ui/select";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import SubmitButton from "../submitButton";

const CollegeDetailsStep = () => {
  const [isFromPICT, setIsFromPICT] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    isPICT: "1",
    college: "Pune Institute Of Computer Technology",
    country: "India",
    state: "Maharashtra",
    city: "Pune",
    district: "Pune",
    locality: "1",  // Urban
    mode: "1",      // Offline
    reason_of_mode: "",
    isInternational: "0",
    year: "",
  });

  const yearOptions = [
    { value: "", label: "Select Year" },
    { value: "FE", label: "FE" },
    { value: "SE", label: "SE" },
    { value: "TE", label: "TE" },
    { value: "BE", label: "BE" }
  ];

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

  const validate = () => {
    let tempErrors = {};
    
    if (!formData.year) {
      tempErrors.year = "Please select your year of study";
    }

    if (!isFromPICT) {
      if (!formData.college || formData.college.trim().length === 0) {
        tempErrors.college = "College name is required";
      }
      if (!formData.country || formData.country.trim().length === 0) {
        tempErrors.country = "Country is required";
      }
      if (!formData.state || formData.state.trim().length === 0) {
        tempErrors.state = "State is required";
      }
      if (!formData.city || formData.city.trim().length === 0) {
        tempErrors.city = "City is required";
      }
      if (!formData.district || formData.district.trim().length === 0) {
        tempErrors.district = "District is required";
      }
      // Remove locality and mode validation since they have default values
      if (formData.mode === "0" && (!formData.reason_of_mode || formData.reason_of_mode.trim().length === 0)) {
        tempErrors.reason_of_mode = "Please provide reason for online mode";
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully!", formData);
      alert("Form submitted successfully!");
    } else {
      console.log("Validation errors:", errors);
    }
  };

  const handlePICTChange = (e) => {
    const isPICT = e.target.value === "1";
    setIsFromPICT(isPICT);
    if (isPICT) {
      setFormData({
        ...formData,
        isPICT: "1",
        college: "Pune Institute Of Computer Technology",
        country: "India",
        state: "Maharashtra",
        city: "Pune",
        district: "Pune",
        locality: "1",
        mode: "1",
        reason_of_mode: "",
        isInternational: "0",
        year: "",
      });
    } else {
      // Keep default values for dropdowns when switching to non-PICT
      setFormData({
        ...formData,
        isPICT: "0",
        college: "",
        country: "",
        state: "",
        city: "",
        district: "",
        locality: "1",      // Keep "Urban" as default
        mode: "1",          // Keep "Offline" as default
        reason_of_mode: "",
        isInternational: "0", // Keep "No" as default
        year: "",
      });
    }
    // Clear errors when switching
    setErrors({});
  };

  return (
    <form
      className="space-y-6 border border-white max-w-2xl m-auto bg-black md:p-12 p-4 rounded-2xl"
      onSubmit={handleSubmit}
    >
      <h2 className="text-lg font-semibold mb-4">College Details</h2>

      {/* Are you from PICT? */}
      <div className="mb-4">
        <Label className="block font-medium mb-2" required>Are you from PICT?</Label>
        <Select
          name="isPICT"
          value={isFromPICT ? "1" : "0"}
          options={yesNoOptions}
          onChange={handlePICTChange}
          className="bg-gray-700 text-white p-2 rounded-md w-full"
        />
      </div>

      {/* If Yes, ask only for Year */}
      {isFromPICT ? (
        <div className="mb-4">
          <Label className="block font-medium mb-2" required>Which year are you in?</Label>
          <Select
            name="year"
            value={formData.year}
            options={yearOptions}
            onChange={handleInputChange}
            className="bg-gray-700 text-white p-2 rounded-md w-full"
          />
          {errors.year && <p className="text-red-500 text-sm">{errors.year}</p>}
        </div>
      ) : (
        <>
          {/* College Details for Non-PICT Users */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label className="block font-medium mb-2" required>Which College?</Label>
              <Input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleInputChange}
                className="bg-gray-700 text-white p-2 rounded-md w-full"
                placeholder="Enter college name"
              />
              {errors.college && <p className="text-red-500 text-sm">{errors.college}</p>}
            </div>
            <div>
              <Label className="block font-medium mb-2" required>Country</Label>
              <Input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="bg-gray-700 text-white p-2 rounded-md w-full"
                placeholder="Enter country"
              />
              {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label className="block font-medium mb-2" required>State</Label>
              <Input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="bg-gray-700 text-white p-2 rounded-md w-full"
                placeholder="Enter state"
              />
              {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
            </div>
            <div>
              <Label className="block font-medium mb-2" required>City</Label>
              <Input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="bg-gray-700 text-white p-2 rounded-md w-full"
                placeholder="Enter city"
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label className="block font-medium mb-2" required>District</Label>
              <Input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                className="bg-gray-700 text-white p-2 rounded-md w-full"
                placeholder="Enter district"
              />
              {errors.district && <p className="text-red-500 text-sm">{errors.district}</p>}
            </div>
            <div>
              <Label className="block font-medium mb-2" required>Locality</Label>
              <Select
                name="locality"
                value={formData.locality}
                options={localityOptions}
                onChange={handleInputChange}
                className="bg-gray-700 text-white p-2 rounded-md w-full"
              />
              {errors.locality && <p className="text-red-500 text-sm">{errors.locality}</p>}
            </div>
          </div>

          {/* Mode of Study */}
          <div className="mb-4">
            <Label className="block font-medium mb-2" required>Mode of Study</Label>
            <Select
              name="mode"
              value={formData.mode}
              options={modeOptions}
              onChange={handleInputChange}
              className="bg-gray-700 text-white p-2 rounded-md w-full"
            />
            {errors.mode && <p className="text-red-500 text-sm">{errors.mode}</p>}
          </div>
          {formData.mode === "0" && (
            <div className="mb-4">
              <Label className="block font-medium mb-2" required>Reason for Online Mode</Label>
              <Input
                type="text"
                name="reason_of_mode"
                value={formData.reason_of_mode}
                onChange={handleInputChange}
                className="bg-gray-700 text-white p-2 rounded-md w-full"
                placeholder="Enter reason for online mode"
              />
              {errors.reason_of_mode && <p className="text-red-500 text-sm">{errors.reason_of_mode}</p>}
            </div>
          )}

          {/* International Student */}
          <div className="mb-4">
            <Label className="block font-medium mb-2" required>Are you International?</Label>
            <Select
              name="isInternational"
              value={formData.isInternational}
              options={yesNoOptions}
              onChange={handleInputChange}
              className="bg-gray-700 text-white p-2 rounded-md w-full"
            />
          </div>

          {/* Year */}
          <div className="mb-4">
            <Label className="block font-medium mb-2" required>Which year are you in?</Label>
            <Select
              name="year"
              value={formData.year}
              options={yearOptions}
              onChange={handleInputChange}
              className="bg-gray-700 text-white p-2 rounded-md w-full"
            />
            {errors.year && <p className="text-red-500 text-sm">{errors.year}</p>}
          </div>
        </>
      )}

      {/* Submit Button */}
      <SubmitButton loading={loading} />
    </form>
  );
};

export default CollegeDetailsStep;