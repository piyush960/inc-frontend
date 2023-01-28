import './styles/incTeams.css';
import test_image from '../assets/images/Abhishek_Jadhav-text-image.png';
import member_bg from '../assets/images/member_bg.jpg';
import { EmailIcon, LinkedinIcon, GithubIcon } from '../assets/icons';

function InCTeams() {
  const teamsData = [
    {
      team: 'Web Team', members: [
        { name: 'Abhishek Jadhav', post: 'Web Co-ordinator', email: 'www.abhishek3jadhav@gmail.com', linkedin: 'https://linkedin.com/in/AbhishekJadhav2002', github: 'https://github.com/AbhishekJadhav2002', photo: test_image },
        { name: 'Abhishek Jadhav', post: 'Web Co-ordinator', email: 'www.abhishek3jadhav@gmail.com', linkedin: 'https://linkedin.com/in/AbhishekJadhav2002', github: 'https://github.com/AbhishekJadhav2002', photo: test_image },
        { name: 'Abhishek Jadhav', post: 'Web Co-ordinator', email: 'www.abhishek3jadhav@gmail.com', linkedin: 'https://linkedin.com/in/AbhishekJadhav2002', github: 'https://github.com/AbhishekJadhav2002', photo: test_image },
        { name: 'Abhishek Jadhav', post: 'Web Co-ordinator', email: 'www.abhishek3jadhav@gmail.com', linkedin: 'https://linkedin.com/in/AbhishekJadhav2002', github: 'https://github.com/AbhishekJadhav2002', photo: test_image },
      ]
    },
    {
      team: 'Web Team', members: [
        { name: 'Abhishek Jadhav', post: 'Web Co-ordinator', email: 'www.abhishek3jadhav@gmail.com', linkedin: 'https://linkedin.com/in/AbhishekJadhav2002', github: 'https://github.com/AbhishekJadhav2002', photo: test_image },
        { name: 'Abhishek Jadhav', post: 'Web Co-ordinator', email: 'www.abhishek3jadhav@gmail.com', linkedin: 'https://linkedin.com/in/AbhishekJadhav2002', github: 'https://github.com/AbhishekJadhav2002', photo: test_image },
        { name: 'Abhishek Jadhav', post: 'Web Co-ordinator', email: 'www.abhishek3jadhav@gmail.com', linkedin: 'https://linkedin.com/in/AbhishekJadhav2002', github: 'https://github.com/AbhishekJadhav2002', photo: test_image },
        { name: 'Abhishek Jadhav', post: 'Web Co-ordinator', email: 'www.abhishek3jadhav@gmail.com', linkedin: 'https://linkedin.com/in/AbhishekJadhav2002', github: 'https://github.com/AbhishekJadhav2002', photo: test_image },
        { name: 'Abhishek Jadhav', post: 'Web Co-ordinator', email: 'www.abhishek3jadhav@gmail.com', linkedin: 'https://linkedin.com/in/AbhishekJadhav2002', github: 'https://github.com/AbhishekJadhav2002', photo: test_image },
        { name: 'Abhishek Jadhav', post: 'Web Co-ordinator', email: 'www.abhishek3jadhav@gmail.com', linkedin: 'https://linkedin.com/in/AbhishekJadhav2002', github: 'https://github.com/AbhishekJadhav2002', photo: test_image },
        { name: 'Abhishek Jadhav', post: 'Web Co-ordinator', email: 'www.abhishek3jadhav@gmail.com', linkedin: 'https://linkedin.com/in/AbhishekJadhav2002', github: 'https://github.com/AbhishekJadhav2002', photo: test_image },
      ]
    },
    {
      team: 'Web Team', members: [
        { name: 'Abhishek Jadhav', post: 'Web Co-ordinator', email: 'www.abhishek3jadhav@gmail.com', linkedin: 'https://linkedin.com/in/AbhishekJadhav2002', github: 'https://github.com/AbhishekJadhav2002', photo: test_image },
        { name: 'Abhishek Jadhav', post: 'Web Co-ordinator', email: 'www.abhishek3jadhav@gmail.com', linkedin: 'https://linkedin.com/in/AbhishekJadhav2002', github: 'https://github.com/AbhishekJadhav2002', photo: test_image },
      ]
    },
  ]

  return (
    <div className='inc-teams flex flex-col justify-center gap-14'>
      {teamsData.map(team => (
        <div className='team' key={team.team}>
          <h2 className='team-name'>{team.team}</h2>
          <div className='members'>
            {team.members.map(member => (
              <div className='member' key={member.name}>
                <div className='apple'>
                  <div className='apple-inner'>
                    <img
                      className='circle'
                      src={member_bg}
                      loading='lazy'
                      alt='member_bg'
                    />
                    <img
                      className='img img1'
                      src={member.photo}
                      loading='lazy'
                      alt='member'
                    />
                  </div>
                </div>
                <hr className='divider'></hr>
                <div className='name'>{member.name}</div>
                <div className='post'>{member.post}</div>
                <div className='member-icons'>
                  <a href={member.email} className='hover:bg-blue-900/60 hover:border-transparent hover:opacity-100'><EmailIcon className='w-12 h-12' /></a>
                  <a href={member.linkedin} className='hover:bg-blue-900/60 hover:border-transparent hover:opacity-100'><LinkedinIcon className='w-12 h-12' /></a>
                  <a href={member.github} className='hover:bg-blue-900/60 hover:border-transparent hover:opacity-100'><GithubIcon className='w-12 h-12' /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default InCTeams;