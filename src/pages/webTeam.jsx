import './styles/incTeams.css';
import { useEffect } from 'react';
import scrollToTop from '../utils/scrollToTop';
import test_image from '../assets/images/Abhishek_Jadhav-text-image.png';
import member_bg from '../assets/images/member_bg.jpg';
import { EmailIcon, LinkedinIcon, GithubIcon } from '../assets/icons';
function WebTeam(){
  useEffect(() => {
    scrollToTop();
  }, [])
    const teamData=[
        {
            team: 'Web Team', members: [
              { name: 'Abhishek Jadhav', post: 'Web Head', email: 'www.abhishek3jadhav@gmail.com', linkedin: 'https://www.linkedin.com/in/', github: 'https://github.com/AbhishekJadhav2002', photo: test_image },
              { name: 'Manas Kshatriya', post: 'Web Head', email: 'manaskshatriya01@gmail.com', linkedin: 'https://www.linkedin.com/in/manas-kshatriya-32a776210/', github: 'https://github.com/manaskshatriya', photo: "http://drive.google.com/uc?export=view&id=15HAwm5dcJXFt_KVkehzYLDsd41xYwkIr" },
              { name: 'Advait Naik', post: 'Web Team', email: 'naikadvait1610@gmail.com ', linkedin: 'https://www.linkedin.com/in/advait-naik-277379199', github: 'https://github.com/advait1610', photo: "http://drive.google.com/uc?export=view&id=1KMySqcKhzG9P0M3vanE8Ucd0pmQzV-b7" },
              { name: 'Haripriya Kulkarni', post: 'Web Team', email: 'haripriyakulkarni13@gmail.com', linkedin: 'https://www.linkedin.com/in/haripriya-kulkarni-7841b81b4/', github: 'https://github.com/hpkoolkarni', photo: "http://drive.google.com/uc?export=view&id=1f_LfrRQrWcqhMzwJP_FNfpQSuV1ctcgQ" },
              { name: 'Maithili Tawde', post: 'Web Team', email: 'maithileetawde@gmail.com', linkedin: 'https://www.linkedin.com/in/maithili-tawde-bbb672206/', github: 'https://github.com/maithilitawde', photo: "http://drive.google.com/uc?export=view&id=13q3M_pKg76eRSGA02lkeeTb64z-5onLg" },
              
            ]
          },
    ]
    return (
        <div className='inc-teams flex flex-col justify-center gap-14'>
          {teamData.map(team => (
            <div className='team ' key={team.team}>
              <h2 className='team-name '>{team.team}</h2>
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
export default WebTeam;