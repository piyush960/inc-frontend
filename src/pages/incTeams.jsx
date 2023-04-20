import './styles/incTeams.css';
import { useEffect } from 'react';
import member_bg from '../assets/images/member_bg.jpg';
import { EmailIcon, LinkedinIcon, GithubIcon } from '../assets/icons';
import scrollToTop from '../utils/scrollToTop';
function InCTeams() {
  useEffect(() => {
    scrollToTop();
  }, [])
  const teamsData = [

    {
      team: 'Overall Co-ordinators', members: [

        { name: 'Deves Patil', post: 'Overall Co-ordinator', email: 'devp2872@gmail.com', linkedin: 'https://www.linkedin.com/in/deves-patil-a16186213', github: 'https://github.com/https://github.com/Deves2872', photo: "http://drive.google.com/uc?export=view&id=1ZpThAltS8IY5ugzYlXJvKCW8SjoeH5b4" },
        { name: 'Maanav Chandwani ', post: 'Overall Co-ordinator', email: 'maanavchandwani@gmail.com', linkedin: 'https://www.linkedin.com/in/maanav-chandwani-4738a61b1/', github: 'https://github.com/Maanav-C', photo: "http://drive.google.com/uc?export=view&id=1zMSBlAVqAhfn2xpH6zL9lm9JwfSt3-Er" },
       
 
      ]
    },
    {
      team: 'Co-ordinators', members: [
        { name: 'Om Kuklani', post: 'Operations Co-ordinator', email: 'om.kuklani02@gmail.com', linkedin: 'https://www.linkedin.com/in/om-kuklani-189abb1b7/', github: 'https://github.com/omkuklani', photo: "http://drive.google.com/uc?export=view&id=1JOSN4ylIzwMrgyffcUCBogO8lYQXhAQG" },
        { name: 'Anushka Deshmukh', post: 'Design Co-ordinator', email: 'anushkadeshmukh2592@gmail.com ', linkedin: 'https://www.linkedin.com/in/anushka-deshmukh-137387206', github: 'https://github.com/anushkadeshmukhh', photo: "http://drive.google.com/uc?export=view&id=1A5ko0f5bsr-8mhc2_YUgELZxFRpbJXBB" },
        { name: 'Mitul Shah', post: 'Operations Co-ordinator', email: 'mitulshah0709@gmail.com', linkedin: 'https://www.linkedin.com/in/mitul-shah-407592241/', github: 'https://github.com', photo: "http://drive.google.com/uc?export=view&id=1ftkwmT62RvLV_sviJM986iuDAvoy_gGe" },
      ]
    },
    {
      team: 'Concepts Head', members: [
        { name: 'Siddharth Singh  ', post: 'Concepts Head', email: ' ', linkedin: 'https://www.linkedin.com/in/', github: 'https:/github.com/', photo: "http://drive.google.com/uc?export=view&id=1M9cZZjxwgPRW88mcXhCQhkhUe4-2iW4B" },
        { name: 'Yamini Tapde  ', post: 'Concepts Head', email: 'yaminitapde123@gmail.com ', linkedin: 'https://www.linkedin.com/in/yamini-tapde-9447b320b', github: 'https:/github.com/yamini108', photo: "http://drive.google.com/uc?export=view&id=1sC0V5shb4xCjEtll7Wwv08W08n1OGQDj" },
        { name: 'Kalpesh Baviskar', post: 'Concepts Head', email: 'kalpeshbaviskar315@gmail.com ', linkedin: 'https://www.linkedin.com/in/kalpesh-baviskar-3a88b6205', github: 'https://github.com/Kalpesh-BK ', photo: "http://drive.google.com/uc?export=view&id=1ZheZGoyZkWnADIGg6JBxAr7rqZv6vhDA" },
        { name: 'Vishakha Parmar ', post: 'Concepts Head', email: 'vishakhaparmar04@gmail.com ', linkedin: 'linkedin.com/in/vishakha-parmar-940b2522a', github: 'https://github.com/Vishakhaparmar04', photo: "http://drive.google.com/uc?export=view&id=1AHfqcbNeXdKNfk0usERf85SGg8zGLc0N" },
      ]
    },
    {
      team: 'Impetus Head', members: [
        { name: 'Aarti Jagtap', post: 'Impetus Head', email: 'aartijagtap2002@gmail.com', linkedin: 'https://www.linkedin.com/in/aarti-jagtap', github: '', photo: "http://drive.google.com/uc?export=view&id=1DIpu-AZkUCh4YOzz1-fBWmUcOTuQ8VMf" },
        { name: ' Apoorvraj Londhe  ', post: 'Impetus Head', email: 'apoorvarajlondhe15@gmail.com', linkedin: 'https://www.linkedin.com/in/apoorvarajlondhe/', github: 'https://github.com/apoorvarajlondhe ', photo: "http://drive.google.com/uc?export=view&id=11GPtSb3kYfPorDcs4OQ7cEsBiRBHcsvh" },
        { name: 'Mrugank Deshpande', post: 'Impetus Head', email: 'mrugank911@gmail.com', linkedin: 'https://www.linkedin.com/in/mrugank-deshpande-038564201', github: 'https://github.com/Mru911', photo: "http://drive.google.com/uc?export=view&id=1ENMxVurMXRfxLLnXMVPqC_UXP-D3U9TY" },
        { name: ' Vrushali Jadhav', post: 'Impetus Head', email: 'vrushalinjadhav02@gmail.com', linkedin: 'linkedin.com/in/vrushali-jadhav-68a464225', github: 'https://github.com/JadhavVrushali', photo: "http://drive.google.com/uc?export=view&id=1247AriD_AAeSp6MePGSFz6VNjcg9aEwP" },
      ]
    },
    {
      team: 'Pradnya Head', members: [
        { name: 'Neha Pol', post: 'Pradnya Head', email: 'nehapol40@gmail.com', linkedin: 'https://www.linkedin.com/in/neha-pol-8b9aa6206/', github: 'https://github.com/nehapol1108', photo: "http://drive.google.com/uc?export=view&id=1bzAqPNbaioI4hnraqYioin500A5MFV5X" },
        { name: 'Pratik Dhane', post: 'Pradnya Head', email: '21pratikdhane@gmail.com ', linkedin: 'https://www.linkedin.com/in/pratik-dhane/', github: 'https://github.com/patrory', photo: "http://drive.google.com/uc?export=view&id=1RuH2v9o3Vs7Vqmn_J4sZ-i2C8jgKW1Vr" },

      ]
    },
    {
      team: 'Marketing Team', members: [
        { name: 'Dhruvin Mistry ', post: 'Marketing Head', email: 'dhruvin.mistry02@gmail.com', linkedin: 'https://www.linkedin.com/in/dhruvin-mistry-854a80215', github: '', photo: "http://drive.google.com/uc?export=view&id=1WNU4GvDYgezq_Hw8LNzPaNra-JyTrT_w" },
        { name: 'Yash Kulkarni', post: 'Marketing Head', email: 'yashpkulkarni@gmail.com', linkedin: 'https://www.linkedin.com/in/yash-kulkarni-218223218/', github: 'https://github.com', photo: "http://drive.google.com/uc?export=view&id=10g-Qayd0PTYQGwdsUf5EyW7LpfSY9fh8" },
      ]
    },
    {
      team: 'Content Team', members: [
        { name: 'Vishwajit Patil', post: 'Content Head', email: 'vishwajitv.patil07@gmail.com', linkedin: 'https://www.linkedin.com/in/vishwajit-patil-8a7663258', github: '', photo: "http://drive.google.com/uc?export=view&id=1CVgmo6Y4O3fCnaHdVcm4G_s2xxWaGGS4" },
        { name: 'Gargi Mhaskar', post: 'Content Head', email: 'mhaskargargi268@gmail.com ', linkedin: 'https://www.linkedin.com/in/gargi-mhaskar-097469208', github: 'https://github.com', photo: "http://drive.google.com/uc?export=view&id=1VllgtzlmxNfIiw-q6-afiZFd177kXZvr" },
      ]
    },
    {
      team: 'Publicity Team', members: [   
        { name: ' Mahaveer Navlakha', post: 'Publicity Head', email: 'mahavirnn@gmail.com	', linkedin: 'https://www.linkedin.com/in/mahaveer-navlakha-844b5a156/', github: 'https://github.com/Mahavirnn', photo: "http://drive.google.com/uc?export=view&id=16YkHH3F3hCb1oaESqjcPpqw-Z1jZhgsm" },
        { name: 'Aditya Kamble', post: 'Publicity Head', email: 'adityakamble615@gmail.com	 ', linkedin: 'https://www.linkedin.com/in/adityakamble615/', github: 'https://github.com', photo: "http://drive.google.com/uc?export=view&id=1rQ3nb-v4lGw7v96Ur5IXewVpVr2-O6v0" },
        { name: 'Reva Dalal', post: 'Publicity Team', email: 'reva.dalal.197167@gmail.com', linkedin: 'https://www.linkedin.com/in/reva-dalal-200b44250', github: 'https://github.com', photo: "http://drive.google.com/uc?export=view&id=1KYiZD95hfs_Oi29fchrcSjUjtsQx9nan" },
        
        { name: 'Piyush Bora', post: 'Publicity Team', email: '29piyushbora@gmail.com ', linkedin: 'https://www.linkedin.com/in/piyushbora', github: 'https://github.com', photo: "http://drive.google.com/uc?export=view&id=1BghbyQ_yNXGRyLkNbn6B8YHdg8GVk3sy" },
      ]
    },
    {
      team: 'Design Team', members: [
       
        { name: ' Riya Pendse', post: 'Design Team', email: 'riyapendse@gmail.com ', linkedin: '', github: 'https://github.com', photo: "http://drive.google.com/uc?export=view&id=1buB6Ab46G7qAk0nOHhtp2bcgMDbFen7Z" },
       
        { name: 'Neha Waghchoure', post: 'Campus Decor', email: 'neha.waghchoure8@gmail.com', linkedin: 'https://www.linkedin.com/in/neha-w-ba150820b', github: 'https://github.com/neha8w', photo: "http://drive.google.com/uc?export=view&id=1PYD4bFcA3r296yz3xhNZugokAXegK_o2" },
        { name: 'Smita Naik', post: 'Design Team', email: 'smitanaik3004@gmail.com', linkedin: 'www.linkedin.com/in/smita-naik-3ba133206	', github: 'https://github.com', photo: "http://drive.google.com/uc?export=view&id=1dUm9Tibf3ofhAqL7t7k6a5ouxPu4sWGX" },
        { name: 'Giaa Poddar', post: 'Campus Decor', email: 'neha.waghchoure8@gmail.com', linkedin: 'https://www.linkedin.com/in/neha-w-ba150820b', github: 'https://github.com/neha8w', photo: "http://drive.google.com/uc?export=view&id=1S-Hmp9vvMvY0mfy4RQ8FzVLSIsi4wzFB" },

      ]
    },
  ]

  return (
    <div className='inc-teams flex flex-col justify-center gap-14'>
      {teamsData.map(team => (
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

export default InCTeams;