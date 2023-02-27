import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Buttons, Checkboxes, FormsBanner, InputBox, NoteBox, toast } from '../../components';
import { useRegisterJudge } from '../../hooks/judge.hooks';

const events = [
    { value: 'concepts', label: 'Concepts' },
    { value: 'impetus', label: 'Impetus' }
]

const domains = [
    { value: 'AD', label: 'Application Development' },
    { value: 'CN', label: 'Communication Networks and Security Systems' },
    { value: 'DP', label: 'Digital / Image/ Speech / Video Processing' },
    { value: 'ES', label: 'Embedded/VLSI Systems' },
    { value: 'ML', label: 'Machine Learning and Pattern Recognition' },
    { value: 'OT', label: 'Others' }
]

const slots = [
    { value: '1', label: 'Friday 24th March (9:00 AM - 11:59 AM)' },
    { value: '2', label: 'Friday 24th March (1:00 PM - 6:00 PM)' },
    { value: '3', label: 'Saturday 25th March (9:00 AM - 11:59 AM)' },
    { value: '4', label: 'Saturday 24th March (1:00 PM - 6:00 PM)' }
]

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
    referral: '',
}

function JudgeForm() {
    const [judge, setJudge] = useState({
        'name': '',
        'email': '',
        'phone': '',
        'address': '',
        'company': '',
        'exp': '',
        'events': [],
        'domains': [],
        'slots': [],
        'min_projects': '3',
        'referral': ''
    })

    const [errors, setErrors] = useState(initialErrors)

    const registerJudgeMutation = useRegisterJudge(setErrors)

    const onSuccessNavigator = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setJudge(prevState => {
            errors[name] !== '' && setErrors(prevState => ({ ...prevState, [name]: '' }))
            return { ...prevState, [name]: value }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        registerJudgeMutation.mutate(judge, {
            onSuccess: (res) => {
                setErrors(initialErrors)
                toast.success('Successfully Registered', { icon: '💐' })
                setTimeout(() => {
                    onSuccessNavigator('/')
                }, 2000)
            },
        })
    }

    return (
        <>
            <FormsBanner eventName='JUDGES REGISTRATION' eventDescription="Register to join us to make InC'23 a grand success for us and all" />
            <form onSubmit={handleSubmit} className='shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border-light_blue items-center p-4 md:p-8 border border-light_blue w-full'>
                <NoteBox title='Note' text='This form is for judges only. If you are a participant, please register for the event you are participating in.' />
                <InputBox label='Name' type='text' name='name' value={judge.name} placeholder='Enter Full Name' onChange={handleInputChange} error={errors.name} required />
                <InputBox label='Email' type='email' name='email' value={judge.email} placeholder='Enter Email' onChange={handleInputChange} error={errors.email} required />
                <InputBox label='Phone' type='tel' name='phone' value={judge.phone} placeholder='Enter Phone Number' onChange={handleInputChange} error={errors.phone} required />
                <InputBox label='Address' type='text' name='address' value={judge.address} placeholder='Enter Address' onChange={handleInputChange} error={errors.address} required />
                <InputBox label='Company/Organization' type='text' name='company' value={judge.company} placeholder='Enter Company Name' onChange={handleInputChange} error={errors.company} required />
                <InputBox label='Industry Experience' type='number' name='exp' value={judge.exp} placeholder='Enter Industry Experience' min={0} onChange={handleInputChange} error={errors.exp} required />
                <Checkboxes label='Select Event(s)' name='events' state={judge} setState={setJudge} options={events} error={errors.events} required />
                <Checkboxes label='Select Domain(s)' name='domains' state={judge} setState={setJudge} options={domains} error={errors.domains} required />
                <Checkboxes label='Select Slot(s)' name='slots' state={judge} setState={setJudge} options={slots} error={errors.slots} required />
                <InputBox label='Minimum Number of Projects' type='number' name='min_projects' value={judge.min_projects} placeholder='Enter Minimum Number of Projects' min={3} max={10} onChange={handleInputChange} error={errors.min_projects} required />
                <InputBox label='Referral' type='text' name='referral' value={judge.referral} placeholder="Enter Referral's Name" onChange={handleInputChange} error={errors.referral} />
                <Buttons value='Submit' type='submit' loading={registerJudgeMutation.isLoading} />
            </form>
        </>
    );
}
export default JudgeForm;