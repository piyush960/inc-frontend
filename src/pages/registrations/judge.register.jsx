import { useState } from 'react';
import { Buttons, Checkboxes, FormsBanner, InputBox, NoteBox } from '../../components';

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

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setJudge(prevState => ({ ...prevState, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(judge);
    }

    return (
        <>
            <FormsBanner eventName='JUDGES REGISTRATION' eventDescription="Register to join us to make InC'23 a grand success for us and all" />
            <form onSubmit={handleSubmit} className='shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border-light_blue items-center p-4 md:p-8 border border-light_blue w-full'>
                <NoteBox title='Note' text='This form is for judges only. If you are a participant, please register for the event you are participating in.' />
                <InputBox label='Name' type='text' name='name' value={judge.name} placeholder='Enter Full Name' onChange={handleInputChange} required />
                <InputBox label='Email' type='email' name='email' value={judge.email} placeholder='Enter Email' onChange={handleInputChange} required />
                <InputBox label='Phone' type='tel' name='phone' value={judge.phone} placeholder='Enter Phone Number' onChange={handleInputChange} required />
                <InputBox label='Address' type='text' name='address' value={judge.address} placeholder='Enter Address' onChange={handleInputChange} required />
                <InputBox label='Company/Organization' type='text' name='company' value={judge.company} placeholder='Enter Company Name' onChange={handleInputChange} required />
                <InputBox label='Industry Experience' type='number' name='exp' value={judge.exp} placeholder='Enter Industry Experience' onChange={handleInputChange} required />
                <Checkboxes label='Select Event(s)' name='events' state={judge} setState={setJudge} options={events} required />
                <Checkboxes label='Select Domain(s)' name='domains' state={judge} setState={setJudge} options={domains} required />
                <Checkboxes label='Select Slot(s)' name='slots' state={judge} setState={setJudge} options={slots} required />
                <InputBox label='Minimum Number of Projects' type='number' name='min_projects' value={judge.min_projects} placeholder='Enter Minimum Number of Projects' onChange={handleInputChange} required />
                <InputBox label='Referral' type='text' name='referral' value={judge.referral} placeholder="Enter Referral's Name" onChange={handleInputChange} />
                <Buttons value='Submit' type='submit' />
            </form>
        </>
    );
}
export default JudgeForm;