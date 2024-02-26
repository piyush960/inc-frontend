import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Buttons, Checkboxes, FormsBanner, InputBox, NoteBox, RadioButtons, toast } from '../../components';
import { useRegisterJudge } from '../../hooks/judge.hooks';
import { slots, projectDomains } from '../../static/data';
//import '../styles/OtpInput.css'
import OtpInput from './OtpInput';;

const initialErrors = {
    name: '',
    email: '',
    phone: '',
    address: '',
    company: '',
    exp: '',
    events: '',
    domains: '',
    slots: '',
    min_projects: '',
    isPICT: '',
    referral: '',
}

function JudgeForm() {
    const { eventName } = useParams()

    const [judge, setJudge] = useState({
        'name': '',
        'email': '',
        'phone': '',
        'address': '',
        'company': '',
        'exp': '',
        'events': [eventName],
        'domains': [],
        'slots': [],
        'min_projects': '3',
        'isPICT': '0',
        'referral': '',
        'Verify': ''
    })

    const [errors, setErrors] = useState(initialErrors)

    const registerJudgeMutation = useRegisterJudge(setErrors, eventName)

    const onSuccessNavigator = useNavigate()
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setJudge(prevState => {
            errors[name] !== '' && setErrors(prevState => ({ ...prevState, [name]: '' }))
            return { ...prevState, [name]: value }
        })
    }

    const [isVerifyClicked, setIsVerifyClicked] = useState(false);

    function handleSubmit(e) {
        setShowAdditionalFields(true);
        e.preventDefault()
        registerJudgeMutation.mutate(judge, {
            onSuccess: (res) => {
                setErrors(initialErrors)
                toast.success('Successfully Registered', { icon: '💐' })
                setTimeout(() => {
                    onSuccessNavigator('/auth')
                }, 2000)
            },
        })
    }
    const handleVerifyClick = () => {
        // Set Verify flag to 'verify' to render the OtpInput component
         
        setJudge(prevState => ({
            ...prevState,
            Verify: 'verify'

        }));
        setIsVerifyClicked(true);
        console.log(judge.Verify);
    }

    return (
        <>
            <FormsBanner eventName={`JUDGES REGISTRATION `} eventDescription="Register to join us to make InC'24 a grand success for us and all" />
            <div className='mx-10 my-7 md:mx-20 placeholder:'>
                <form onSubmit={handleSubmit} className='shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl items-center p-4 md:p-8 border border-light_blue w-full'>
                    <NoteBox title='Note' text='This registration form is to be filled by the judges only for judging the impetus and concepts event..' />
                    {/* // <label htmlFor="" required>Assessing for which event?</label> */}
                    <label htmlFor="eventSelection" className="block mb-2">Select Event:</label>
                  
                    <div id="eventSelection" className='flex gap-4'>
                    <Buttons value='Impetus' type='submit'/>
                    <Buttons value='Concepts' type='submit'/>
                    </div>
                    <br></br>        
                    <InputBox label='Name' type='text' name='name' value={judge.name} placeholder='Enter Full Name' onChange={handleInputChange} error={errors.name} required />
                    <div className='relative flex justify-center items-center space-x-8'>
                        <InputBox label='Email' type='email' name='email' value={judge.email} placeholder='Enter Email' onChange={handleInputChange} error={errors.email} required />
                        {judge.Verify === 'verify'}
                        {!isVerifyClicked && (
                            <button className='absolute text-lg right-3 top-[55%] transform -translate-y-1/2 text-gold' value='Verify' type='button' onClick={handleVerifyClick}>Verify</button>
                        )}

                    </div>
                    {isVerifyClicked ? (<div className='my-5'><OtpInput />

                    </div>) : (<></>)}
                    {!showAdditionalFields &&(
                    <Buttons value='Submit' type='submit' loading={registerJudgeMutation.isLoading} />
                    )
                    }
                    {showAdditionalFields &&
                        (
                            <>
                    
                    <InputBox label='Phone' type='tel' name='phone' value={judge.phone} placeholder='Enter Phone Number' onChange={handleInputChange} error={errors.phone} required />
                    
                    
                    <InputBox label='Residential Address' type='text' name='address' value={judge.address} placeholder='Enter Address' onChange={handleInputChange} error={errors.address}  />
                    <InputBox label='Commercial Address' type='text' name='address' value={judge.address} placeholder='Enter Address' onChange={handleInputChange} error={errors.address} required />
                   
                    <InputBox label='Company/Organization' type='text' name='company' value={judge.company} placeholder='Enter Company Name' onChange={handleInputChange} error={errors.company} required />
                    <InputBox label='Industry Experience' type='number' name='exp' value={judge.exp} placeholder='Enter Industry Experience' min={0} onChange={handleInputChange} error={errors.exp} required />
                    {/* <Checkboxes label='Select Event(s)' name='events' state={judge} setState={setJudge} options={events} error={errors.events} required /> */}
                    <Checkboxes label='Select Domain(s) for Judging' name='domains' state={judge} setState={setJudge} options={projectDomains} error={errors.domains} required />
                    <Checkboxes label='Select Slot(s) (tentative)' name='slots' state={judge} setState={setJudge} options={slots} error={errors.slots} required />
                    <InputBox label='Minimum Number of Projects want to Judge' type='number' name='min_projects' value={judge.min_projects} placeholder='Enter Minimum Number of Projects' min={3} max={10} onChange={handleInputChange} error={errors.min_projects} required />
                    
                    <InputBox label='Password' type='password' name='password'  placeholder='Enter Password' onChange={handleInputChange}  required />
                    <InputBox label='Confirm Password' type='password' name='confirm_password'  placeholder='Confirm Password' onChange={handleInputChange}  required /><RadioButtons label='Are you PICT alumni ?' name='isPICT' state={judge} setState={setJudge} options={[{ label: 'Yes', value: '1' }]} error={errors.isPICT} />
                    <InputBox label='Referred By' type='text' name='referral' value={judge.referral} placeholder="Enter Referral's Name (if any)" onChange={handleInputChange} error={errors.referral} />
                    <Buttons value='Submit' type='submit' loading={registerJudgeMutation.isLoading} />
                    
                    </>
                        )
                    }

                    














                </form>
            </div>

        </>
    );
}
export default JudgeForm;