import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { validate_isEmpty } from '../forms/utils';
import { Label } from '../ui/label';
import { Select } from '../ui/select';
import { generateOptions } from '../forms/utils';
import FormButton from '../forms/FormButton';


const initialState = {
  startUp: "",
  impact: "",
  original: "",
  patent: "",
  presentation: "",
  relevance: "",
  test: "",
}

const EvaluateImpetus = () => {

  const [impetusResult, setImpetusResult] = useState(initialState);
  const { pid } = useParams();

  const handleSubmit = () => {

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setImpetusResult({
      ...impetusResult,
      [name] : value,
    });
  };

  const renderSelect = (label, options, value, id) => {
    return (
      <div>
        <Label htmlFor={id} className={`max-sm:text-lg`} required>{label}</Label>
        <Select
          options={options}
          value={value}
          onChange={handleChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          id={id}
          name={id}
        />
      </div>
    )
  }

  return (
    <div className='w-full max-w-7xl px-2 sm:mx-auto flex flex-col gap-6'>
      <div className={"relative p-px"}>
        <span className="absolute inset-0 bg-gradient-to-r from-dark-blue via-light-blue to-orange-100"></span>
        <div className="w-full sm:px-6 sm:py-4 max-sm:px-2 p-4 flex flex-col sm:flex-row max-sm:items-center gap-6 sm:gap-8 bg-tertiary relative">
          <div className="flex max-sm:flex-col justify-between max-sm:gap-4 w-full">
            <div className='flex flex-col items-center sm:items-start justify-center gap-2 sm:flex-[0.8]'>
              <h1 className="font-bold sm:text-2xl text-xl">{`Evaluating for Impetus -  ${pid}`}</h1>
            </div>
          </div>
        </div>	
      </div>

      <div className="bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 p-px">
    <form
      className="w-full bg-tertiary p-4 sm:p-10 flex flex-col gap-4"
      onSubmit={handleSubmit}
    > 
      {renderSelect('Ability To Execute Projects As a Start-up or Start-up Enrollment - (1-15)', generateOptions(1, 15), impetusResult.startUp, "startUp")}
      {renderSelect('Impact and Applications - (1-20)', generateOptions(1, 20), impetusResult.impact, "impact")}
      {renderSelect('Originality, Creativity, Clarity & Innovation in Project - (1-20)', generateOptions(1, 20), impetusResult.original, "original")}
      {renderSelect('Patent or Product Readiness from Project - (1-10)', generateOptions(1, 10), impetusResult.patent, "patent")}
      {renderSelect('Presentation and Q & A - (1-15)', generateOptions(1, 15), impetusResult.presentation, "presentation")}
      {renderSelect('Relevance to Society - (1-10)', generateOptions(1, 10), impetusResult.relevance, "relevance")}
      {renderSelect('Testing or Demonstration - (1-10)', generateOptions(1, 10), impetusResult.test, "test")}

      {/* Submit Button */}
      <div className="pt-4">
        <FormButton loading={false} className={`w-fit px-4`} onClick={handleSubmit} text={'Submit Score'}></FormButton>
      </div>
    </form>
    </div>
    </div>
  )
}

export default EvaluateImpetus