import { useNavigate } from 'react-router-dom';
import './styles/incTeams.css';

function InCTeamsSection() {
    const navigate = useNavigate();

    return (
        <div className='flex md:flex-row flex-col p-8 gap-2 w-full items-center inc-team-component'>
            <figure className='w-full md:w-3/5 md:p-6 p-2 border-l-4 border-[#f2a30f] leading-6 bg-blue-900/20'>
                <blockquote className='italic md:text-4xl text-lg tracking-wide p-2'>The strength of the team is each individual member. The strength of each member is the team.</blockquote>
                <figcaption className='md:text-xl'>- Phil Jackson</figcaption>
            </figure>
            <div className='w-full md:w-2/5 relative flex justify-center items-center gap-6 md:p-6'>
                <button type='button' onClick={() => navigate('/inc-team')}>Student Team</button>
                <button type='button' onClick={() => navigate('/')}>Faculty Team</button>
                <button type='button' onClick={() => navigate('/')}>Gallery</button>
            </div>
        </div>
    )
}

export default InCTeamsSection;