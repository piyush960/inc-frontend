import React, { useEffect, useRef, useState } from "react";
import { Select } from "../../ui/select";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import FormButton from "../FormButton";

import { yearOptions, localityOptions, yesNoOptions, modeOptions } from '../constants'
import { RadioButton } from "../../ui/RadioButton";
import { validate_isEmpty, validateCollegeDetails } from "../utils"
import { useDispatch, useSelector } from "react-redux";
import { submit_step3 } from "../../../features/form/formSlice";
import { toast } from "react-toastify";

const pictState = {
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
  referral: "",
}

const initialState = {
  isPICT: "1",
  college: "",
  country: "",
  state: "",
  city: "",
  district: "",
  locality: "1",
  mode: "1",
  reason_of_mode: "",
  isInternational: "0",
  year: "",
  referral: "",
}

const CollegeDetailsStep = ({ prevStep, nextStep }) => {
  const [loading, setLoading] = useState(false);
  const step3 = useSelector(state => state.form.step3)
  const [formData, setFormData] = useState({...step3});
  const dispatch = useDispatch()
  const [isPICT, setIsPICT] = useState(formData.isPICT);

  const radioRef = useRef(null);

  useEffect(() => {
    if(formData.isPICT === "1"){
      document.querySelectorAll('#isPICT')[0].checked = true
      radioRef.current.checked = true
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    if(!validateCollegeDetails(formData)){
      dispatch(submit_step3(formData))
      nextStep()
      toast.success('College Details Added')
    }
    else{
      toast.error("Fill all the required details correctly!")
    }
  };


  return (
    <form
      className="w-full bg-tertiary p-4 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-8"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold text-white-100 sm:col-span-2">College Details</h2>

      {/* Are you from PICT? */}
      <div className="">
        <Label htmlFor="isPICT" required>Are you from PICT?</Label>
        <RadioButton
          id="isPICT"
          name="isPICT"
          options={yesNoOptions}
          errorMessage={isPICT === null && "Field is Required"}
          onChange={(e) => {
            const value = e.target.value
            const isInternational = formData.isInternational
            setIsPICT(value === "1")
            console.log(isPICT)
            if (value === "1") {
              setFormData((prev) => ({ ...prev, ...pictState }))
              radioRef.current.checked = true;
            }
            else {
              setFormData((prev) => ({ ...prev, ...initialState, isInternational }))
            }
          }}
          className=""
        />
      </div>

      {/* If Yes, ask only for Year */}
      <div className="">
        <Label htmlFor="year" required>Which year are you in?</Label>
        <Select
          name="year"
          id="year"
          value={formData.year}
          options={yearOptions}
          onChange={handleInputChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          className=""
        />
      </div>

      {/* College Details for Non-PICT Users */}
      <div>
        <Label htmlFor="college" required>Which College?</Label>
        <Input
          type="text"
          id="college"
          name="college"
          disabled={isPICT}
          value={formData.college}
          onChange={handleInputChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          className=""
          placeholder="Enter college name"
        />
      </div>
      <div>
        <Label htmlFor="country" required>Country</Label>
        <Input
          type="text"
          id="country"
          name="country"
          disabled={isPICT}
          value={formData.country}
          onChange={handleInputChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          className=""
          placeholder="Enter country"
        />
      </div>
      <div>
        <Label htmlFor="state" required>State</Label>
        <Input
          type="text"
          id="state"
          name="state"
          disabled={isPICT}
          value={formData.state}
          onChange={handleInputChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          className=""
          placeholder="Enter state"
        />
      </div>
      <div>
        <Label htmlFor="city" required>City</Label>
        <Input
          type="text"
          id="city"
          name="city"
          disabled={isPICT}
          value={formData.city}
          onChange={handleInputChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          className=""
          placeholder="Enter city"
        />
      </div>
      <div>
        <Label htmlFor="district" required>District</Label>
        <Input
          type="text"
          name="district"
          id="district"
          disabled={isPICT}
          value={formData.district}
          onChange={handleInputChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          className=""
          placeholder="Enter district"
        />
      </div>
      <div>
        <Label htmlFor="locality" required>Locality</Label>
        <Select
          name="locality"
          id="locality"
          disabled={isPICT}
          value={formData.locality}
          options={localityOptions}
          onChange={handleInputChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          className=""
        />
      </div>

      {/* Mode of Study */}
      <div className="">
        <Label htmlFor="mode" required>Mode of Study</Label>
        <Select
          name="mode"
          id="mode"
          value={formData.mode}
          options={modeOptions}
          onChange={(e) => {
            console.log('mode', e.target.value)
            handleInputChange(e)
          }}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          className=""
        />
      </div>

      <div className="">
        <Label htmlFor="reason_of_mode" required>Reason for Online Mode</Label>
        <Input
          type="text"
          name="reason_of_mode"
          id="reason_of_mode"
          disabled={(formData.mode === '1')}
          value={formData.reason_of_mode}
          onChange={handleInputChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          className=""
          placeholder="Enter reason for online mode"
        />
      </div>

      {/* International Student */}
      <div className="">
        <Label htmlFor="isInternational" required>Are you International Student?</Label>
        <RadioButton
          id="isInternational"
          name="isInternational"
          ref={radioRef}
          errorMessage={formData.isInternational === null && "Field is Required"}
          options={yesNoOptions}
          disabled={isPICT}
          onChange={(e) => {
            const value = e.target.value
            setFormData((prev) => ({...prev, isInternational: (value === 'true' ? true : false)}))
          }}
          className=""
        />
      </div>

      {/* Submit Button */}
      <div className="sm:col-span-2 flex justify-between">
        <FormButton loading={loading} isPrev onClick={() => prevStep()}></FormButton>
        <FormButton loading={loading} className={``} onClick={handleSubmit}></FormButton>
      </div>
    </form>
  );
};

export default CollegeDetailsStep;