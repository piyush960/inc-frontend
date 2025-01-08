import { useEffect, useState } from "react";
import { Input } from "../../ui/input";
import { Select } from "../../ui/select";
import { Label } from "../../ui/label";
import FormButton from "../FormButton";

import { validate_isEmpty, validate_email, validate_phone, validate_wordCount, validate } from "../utils";
import { impetus_domains } from "../constants";
import { toast } from "react-toastify";

import { useDispatch } from 'react-redux';
import { resetForm, submit_step1, submit_step2, submit_step3 } from '../../../features/form/formSlice'
import { useLazyGetTicketQuery, useStepOneMutation } from "../../../app/services/formAPI";
import Loader from "../../ui/Loader";

const initialState = {
  title: "",
  domain: "",
  project_type: "",
  guide_name: "",
  guide_email: "",
  guide_phone: "",
  hod_email: "",
  sponsored: "0",
  company: "",
  abstract: "",
  nda: "0",
  demo: "1",
  reason_of_demo: "",
}

const ProjectDetailsFormStep = ({ event, nextStep }) => {

  const ename = window.localStorage.getItem('event_name');
  const [ formData, setFormData ] = useState(initialState)
  const dispatch = useDispatch()
  const [abstractWordCount, setAbstractWordCount] = useState(0);
  const [ getTicket, { data: ticketData, isLoading: isTicketLoading, isSuccess } ] = useLazyGetTicketQuery();
  
  const [ stepOne, { isLoading } ] = useStepOneMutation()

  useEffect(() => {
    if(event === ename){
      getTicket(window.localStorage.getItem('ticket') || '');
    }
    else{
      dispatch(resetForm())
    }
  }, [])
  
  useEffect(() => {
    if(ticketData && (event === ename)){
      dispatch(submit_step1(ticketData.step_1))
      dispatch(submit_step2(Array.isArray(ticketData.step_2) ? ticketData.step_2 : []))
      dispatch(submit_step3(ticketData.step_3))
      setFormData(ticketData.step_1)
    }
  }, [isSuccess, ticketData])
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (checked ? "1" : "0") : value,
    });
    if (name === "abstract") {
      setAbstractWordCount(value.trim().split(/\s+/).length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(!validate(formData)){
      try {
        const ticket = window.localStorage.getItem('ticket') || ''
        const response = await stepOne({ event_name: event, ticket, data: formData }).unwrap();
        // console.log(response);
        window.localStorage.setItem('ticket', response.ticket);
        window.localStorage.setItem('event_name', event)
        dispatch(submit_step1(formData));
        toast.success('Project details saved');
        nextStep();
      } catch (error) {
        console.error(error);
        toast.error(error?.data?.message || error?.message || 'Something went wrong');
      }
    }
    else toast.error('Fill all the required details correctly!')
  };

  return (
    <>
    { isTicketLoading ?
    <div className="fixed inset-0 z-50 backdrop-blur-sm">
      <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] flex flex-col gap-8">
        <Loader size={150} />
        <h2 className="sm:text-2xl text-white text-center">Please Wait...</h2>
      </div>
    </div>
    :
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
          validate={() => validate_wordCount.bool(abstractWordCount, 150, 300)}
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
        <Label htmlFor="sponsored" className="flex items-center gap-2">
          <input
            type="checkbox"
            id="sponsored"
            name="sponsored"
            checked={formData.sponsored === "1"}
            onChange={handleChange}
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Is the project sponsored?
        </Label>
        {formData.sponsored === "1" && (
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
            <Label htmlFor="nda" className="flex items-center gap-2 py-8">
              <input
                type="checkbox"
                id="nda"
                name="nda"
                checked={formData.nda === "1"}
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
        <Label htmlFor="demo" required className="flex items-center gap-2">
          <input
            type="checkbox"
            name="demo"
            id="demo"
            checked={formData.demo === "1"}
            onChange={handleChange}
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Can you show a demo?
        </Label>
        {formData.demo === "0" && (
          <div className="">
            <Label htmlFor="reason_of_demo" required>Reason for no demo</Label>
            <Input
              id="reason_of_demo"
              name="reason_of_demo"
              value={formData.reason_of_demo}
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
        <FormButton loading={isLoading} className={``} onClick={handleSubmit}></FormButton>
      </div>
    </form>
    }
    </>
  );
};

export default ProjectDetailsFormStep;
