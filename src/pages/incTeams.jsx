import './styles/incTeams.css';
import test_image from '../assets/images/Abhishek_Jadhav-text-image.png';
import member_bg from '../assets/images/member_bg.jpg';
import { EmailIcon, LinkedinIcon, GithubIcon } from '../assets/icons';
// const gargi = require('https://www.linkedin.com/in/gargi-mhaskar-097469208/overlay/photo/')
function InCTeams() {
  const teamsData = [
    {
      team: 'Web Team', members: [
        { name: 'Abhishek Jadhav', post: 'Web Head', email: 'www.abhishek3jadhav@gmail.com', linkedin: 'https://www.linkedin.com/in/', github: 'https://github.com/AbhishekJadhav2002', photo: test_image },
        { name: 'Adwait Naik', post: 'Web Head', email: 'naikadvait1610@gmail.com ', linkedin: 'https://www.linkedin.com/in/advait-naik-277379199', github: 'https://github.com/advait1610', photo: "http://drive.google.com/uc?export=view&id=1KMySqcKhzG9P0M3vanE8Ucd0pmQzV-b7" },
        { name: 'Ameya Dhake', post: 'Web Head', email: '@gmail.com', linkedin: 'https://www.linkedin.com', github: 'https://github.com', photo: "http://drive.google.com/uc?export=view&id=1-C_wjQ-v1B4Cm31TVyyyG6uAkznFkBF2" } ,
        { name: 'Haripriya Kulkarni', post: 'Web Head', email: 'haripriyakulkarni13@gmail.com', linkedin: 'https://www.linkedin.com/in/haripriya-kulkarni-7841b81b4/', github: 'https://github.com/hpkoolkarni', photo: "http://drive.google.com/uc?export=view&id=1f_LfrRQrWcqhMzwJP_FNfpQSuV1ctcgQ" },
        { name: 'Maithili Tawde', post: 'Web Head', email: 'maithileetawde@gmail.com', linkedin: 'https://www.linkedin.com/in/maithili-tawde-bbb672206/', github: 'https://github.com/maithilitawde', photo: "http://drive.google.com/uc?export=view&id=13q3M_pKg76eRSGA02lkeeTb64z-5onLg" },
        { name: 'Manas Kshatriya', post: 'Web Head', email: 'manaskshatriya01@gmail.com', linkedin: 'https://www.linkedin.com/in/manas-kshatriya-32a776210/', github: 'https://github.com/manaskshatriya', photo: "http://drive.google.com/uc?export=view&id=15HAwm5dcJXFt_KVkehzYLDsd41xYwkIr" },
      ]
    },
    {
      team: 'Overall Co-ordinators', members: [
        { name: 'Aditi Chavan', post: 'Overall Co-ordinator', email: 'chavanaditigulab@gmail.com', linkedin: 'https://www.linkedin.com/in/aditi-chavan-439b44206', github: 'https://github.com/AditiChavan16', photo: "http://drive.google.com/uc?export=view&id=1sme7bSurXEB-G557r2_w0vwud-0ytoaU" },
        { name: 'Anushka Deshmukh', post: 'Overall Co-ordinator', email: 'anushkadeshmukh2592@gmail.com ', linkedin: 'https://www.linkedin.com/in/anushka-deshmukh-137387206', github: 'https://github.com/anushkadeshmukhh', photo: "http://drive.google.com/uc?export=view&id=1A5ko0f5bsr-8mhc2_YUgELZxFRpbJXBB" },
        { name: 'Deves Patil', post: 'Overall Co-ordinator', email: 'devp2872@gmail.com', linkedin: 'https://www.linkedin.com/in/deves-patil-a16186213', github: 'https://github.com/https://github.com/Deves2872', photo: "http://drive.google.com/uc?export=view&id=1ZpThAltS8IY5ugzYlXJvKCW8SjoeH5b4" },
        { name: 'Maanav Chandwani ', post: 'Overall Co-ordinator', email: 'maanavchandwani@gmail.com', linkedin: 'https://www.linkedin.com/in/deves-patil-a16186213', github: 'https://github.com/Maanav-C', photo: "http://drive.google.com/uc?export=view&id=1zMSBlAVqAhfn2xpH6zL9lm9JwfSt3-Er" },
        { name: 'Mitul Shah', post: 'Overall Co-ordinator', email: 'mitulshah0709@gmail.com', linkedin: 'https://www.linkedin.com/in/mitul-shah-407592241/', github: 'https://github.com', photo: "http://drive.google.com/uc?export=view&id=1ftkwmT62RvLV_sviJM986iuDAvoy_gGe" },
        { name: 'Om Kuklani', post: 'Overall Co-ordinator', email: 'om.kuklani02@gmail.com', linkedin: 'https://www.linkedin.com/in/om-kuklani-189abb1b7/', github: 'https://github.com/omkuklani', photo: "http://drive.google.com/uc?export=view&id=1JOSN4ylIzwMrgyffcUCBogO8lYQXhAQG" },
        { name: 'Yash Desai ', post: 'Overall Co-ordinator', email: 'yashvishwasdesai@gmail.com', linkedin: 'https://www.linkedin.com/in/yash-desai3-i46879', github: 'https://github.com/yash-desai3', photo: "http://drive.google.com/uc?export=view&id=1UPVvTEtnAZUbt2wMAYEl54qG7uFDxFhV" },
      ]
    },
    {
      team: 'Event Co-ordinators', members: [
        { name: 'Neha Pol', post: 'Pradnya Head', email: 'nehapol40@gmail.com', linkedin: 'https://www.linkedin.com/in/neha-pol-8b9aa6206/', github: 'https://github.com/nehapol1108', photo: "http://drive.google.com/uc?export=view&id=1bzAqPNbaioI4hnraqYioin500A5MFV5X" },
        { name: 'Pratik Dhane', post: 'Pradnya Head', email: '21pratikdhane@gmail.com ', linkedin: 'https://www.linkedin.com/in/pratik-dhane/', github: 'https://github.com/patrory', photo: "http://drive.google.com/uc?export=view&id=1RuH2v9o3Vs7Vqmn_J4sZ-i2C8jgKW1Vr" },
        { name: 'Aarti Jagtap', post: 'Impetus Head', email: 'aartijagtap2002@gmail.com', linkedin: 'https://www.linkedin.com/in/aarti-jagtap', github: '', photo: "http://drive.google.com/uc?export=view&id=1DIpu-AZkUCh4YOzz1-fBWmUcOTuQ8VMf" },
        { name: ' Apoorvraj Londhe  ', post: 'Impetus Head', email: 'apoorvarajlondhe15@gmail.com', linkedin: 'https://www.linkedin.com/in/apoorvarajlondhe/', github: 'https://github.com/apoorvarajlondhe ', photo: "http://drive.google.com/uc?export=view&id=11GPtSb3kYfPorDcs4OQ7cEsBiRBHcsvh" },
        { name: 'Mrugank Deshpande', post: 'Impetus Head', email: 'mrugank911@gmail.com', linkedin: 'https://www.linkedin.com/in/mrugank-deshpande-038564201', github: 'https://github.com/Mru911', photo: "http://drive.google.com/uc?export=view&id=1ENMxVurMXRfxLLnXMVPqC_UXP-D3U9TY" },
        { name: ' Vrushali Jadhav', post: 'Impetus Head', email: 'vrushalinjadhav02@gmail.com', linkedin: 'linkedin.com/in/vrushali-jadhav-68a464225', github: 'https://github.com/JadhavVrushali', photo: "http://drive.google.com/uc?export=view&id=1247AriD_AAeSp6MePGSFz6VNjcg9aEwP" },
        { name: 'Siddharth Singh  ', post: 'Concepts Head', email: ' ', linkedin: 'https://www.linkedin.com/in/', github: 'https:/github.com/', photo: "http://drive.google.com/uc?export=view&id=1M9cZZjxwgPRW88mcXhCQhkhUe4-2iW4B" },
        { name: 'Yamini Tapde  ', post: 'Concepts Head', email: 'yaminitapde123@gmail.com ', linkedin: 'https://www.linkedin.com/in/yamini-tapde-9447b320b', github: 'https:/github.com/yamini108', photo: "http://drive.google.com/uc?export=view&id=1sC0V5shb4xCjEtll7Wwv08W08n1OGQDj" },
        { name: 'Kalpesh Baviskar', post: 'Concepts Head', email: 'kalpeshbaviskar315@gmail.com ', linkedin: 'https://www.linkedin.com/in/kalpesh-baviskar-3a88b6205', github: 'https://github.com/Kalpesh-BK ', photo: "http://drive.google.com/uc?export=view&id=1ZheZGoyZkWnADIGg6JBxAr7rqZv6vhDA" },
        { name: 'Vishakha Parmar ', post: 'Concepts Head', email: 'vishakhaparmar04@gmail.com ', linkedin: 'linkedin.com/in/vishakha-parmar-940b2522a', github: 'https://github.com/Vishakhaparmar04', photo: "http://drive.google.com/uc?export=view&id=1AHfqcbNeXdKNfk0usERf85SGg8zGLc0N" },
      ]
    },
    {
      team: 'Marketing Team', members: [
        { name: 'Dhruvin Mistry ', post: 'Content Head', email: 'dhruvin.mistry02@gmail.com', linkedin: 'https://www.linkedin.com/in/dhruvin-mistry-854a80215', github: '', photo: "http://drive.google.com/uc?export=view&id=1WNU4GvDYgezq_Hw8LNzPaNra-JyTrT_w" },
        { name: 'Yash Kulkarni', post: 'Content Head', email: 'yashpkulkarni@gmail.com', linkedin: 'https://www.linkedin.com/in/yash-kulkarni-218223218/', github: 'https://github.com', photo: "http://drive.google.com/uc?export=view&id=10g-Qayd0PTYQGwdsUf5EyW7LpfSY9fh8" },
      ]
    },
    {
      team: 'Content Team', members: [
        { name: 'Vishwajit Patil', post: 'Marketing Head', email: 'vishwajitv.patil07@gmail.com', linkedin: 'https://www.linkedin.com/in/vishwajit-patil-8a7663258', github: '', photo: "http://drive.google.com/uc?export=view&id=1CVgmo6Y4O3fCnaHdVcm4G_s2xxWaGGS4" },
        { name: 'Gargi Mhaskar', post: 'Marketing Head', email: 'mhaskargargi268@gmail.com ', linkedin: 'https://www.linkedin.com/in/gargi-mhaskar-097469208', github: 'https://github.com', photo: "http://drive.google.com/uc?export=view&id=1VllgtzlmxNfIiw-q6-afiZFd177kXZvr" },
      ]
    },
    {
      team: 'Publicity Team', members: [
        { name: 'Aditya Kamble', post: 'Publicity Head', email: 'adityakamble615@gmail.com	 ', linkedin: 'https://www.linkedin.com/in/adityakamble615/', github: 'https://github.com', photo: "http://drive.google.com/uc?export=view&id=1rQ3nb-v4lGw7v96Ur5IXewVpVr2-O6v0" },
        { name: ' Mahaveer Navlakha', post: 'Publicity Head', email: 'mahavirnn@gmail.com	', linkedin: 'https://www.linkedin.com/in/mahaveer-navlakha-844b5a156/', github: 'https://github.com/Mahavirnn', photo: "http://drive.google.com/uc?export=view&id=16YkHH3F3hCb1oaESqjcPpqw-Z1jZhgsm" },
        { name: 'Piyush Bora', post: 'Publicity Head', email: '29piyushbora@gmail.com	', linkedin: 'https://www.linkedin.com/in/piyushbora	', github: 'https://github.com/Piyush-Bora', photo: "http://drive.google.com/uc?export=view&id=1BghbyQ_yNXGRyLkNbn6B8YHdg8GVk3sy" },
        { name: ' Reva Dalal ', post: 'Publicity Head', email: 'reva.dalal.197167@gmail.com	', linkedin: 'https://www.linkedin.com/in/reva-dalal-200b44250 ', github: 'https://github.com', photo: "http://drive.google.com/uc?export=view&id=1KYiZD95hfs_Oi29fchrcSjUjtsQx9nan" },

      ]
    },
    {
      team: 'Design Team', members: [
        { name: 'Neha Waghchoure', post: 'Campus Decor', email: 'neha.waghchoure8@gmail.com', linkedin: 'https://www.linkedin.com/in/neha-w-ba150820b', github: 'https://github.com/neha8w', photo: "http://drive.google.com/uc?export=view&id=1PYD4bFcA3r296yz3xhNZugokAXegK_o2" },
        { name: ' Riya Pendse', post: 'Design Head', email: 'riyapendse@gmail.com ', linkedin: '', github: 'https://github.com', photo: "http://drive.google.com/uc?export=view&id=1buB6Ab46G7qAk0nOHhtp2bcgMDbFen7Z" },
        { name: 'Smita Naik', post: 'Design Head', email: 'smitanaik3004@gmail.com', linkedin: 'www.linkedin.com/in/smita-naik-3ba133206	', github: 'https://github.com', photo: "http://drive.google.com/uc?export=view&id=1dUm9Tibf3ofhAqL7t7k6a5ouxPu4sWGX" },
        { name: 'Giaa Poddar', post: 'Design Head', email: 'giaa.poddar@gmail.com ', linkedin: 'https://www.linkedin.com/in/giaa-poddar-116b48207', github: 'https://github.com', photo: "http://drive.google.com/uc?export=view&id=1S-Hmp9vvMvY0mfy4RQ8FzVLSIsi4wzFB" },

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