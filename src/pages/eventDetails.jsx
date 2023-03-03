// import './styles/eventDetails.css';
// import EventCards from '../components/eventCards';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
    function EventDetails(props){
      const [eventDetail,setEventDetail]=useState('');
      const eventsData = {
        impetus: {
            logo: 'impetus_logo',
            name: 'IMPETUS',
            short_desc: 'International Level Project Competition cum Exhibition',
            desc: 'Impetus is an inter-collegiate international level competition and has been attracting corporate giants for not only sponsorship but also in terms of time and guidance to the participants. Industries such as eQ Technologic, Microsoft, Mobiliya, Deutsche Bank Group, Avaya, Siemens, Sagitech, Apporbit, e-Zest, HP, Indian Oil, 3 Ogeestudio, Tata, Mojo Networks, Ryussi, Tibco, Calsoft, Persistent, Pubmatic, IBM, Airtight, AthenaHealth, IEEE, ACM, were closely associated with this event. During the 3 days event, first year, second year and third year students from various colleges across India and abroad showcase their projects.',
            domains: [
                {
                    domain: 'APPLICATION DEVELOPMENT',
                    sub_domains: 'Mobile Applications-Android, Web Applications, Database applications, others),(Big Earth Data Analytics, Geo Informatics, Data Mining on Big Data, Digital marketing optimization, Data exploration and discovery, Fraud detection and prevention, Social network and relationship analysis, Machine generated data analytics, Data retention, Others)'
                },
                {
                    domain: 'COMMUNICATION NETWORKS & SECURITY SYSTEMS',
                    sub_domains: '(Computer networks, Internet of Things, Software Defined Network, Vehicular Networks, Wireless and Mobile Networks, Information and Network Security, GPS | GSM Projects, Wireless Communication, Antenna & RF Communication, Optical Communication & Network, Others), (Blockchain applications: cryptocurrency systems, healthcare system, advertising processes, insurance processes, copyright protection system, energy system, tracking system, monitoring system, Security system, societal applications, others), (Virtualization and Autonomic Computing, High Speed Network, Security in Cloud, Cloud Computing, Data center Management, Handling Big Data on Cloud, Mobile Cloud, Cloud Forensics, Fog Computing, Others)'
                },
                {
                    domain: 'DIGITAL / IMAGE/ SPEECH / VIDEO PROCESSING',
                    sub_domains: '(Digital Signal processing, Image processing, Speech recognition, Video processing, Speech to text / Text to speech, Others)'
                },
                {
                    domain: 'EMBEDDED/VLSI SYSTEMS',
                    sub_domains: '(Image Processing & Remote Sensing, Machine Learning for Embedded Systems, Embedded Vision, Internet of Things, others), (Analog & Mixed Signal VLSI Design, Testing & Verification of VLSI Design, others)'
                },
            ],
            registrations: {
                fees: 100,
                team_size: 5
            },
            prizes: 'InC announces a total cash prize of ₹6 Lakhs and a special prize of ₹1 Lakh for Project related to Online Teaching Aids (InC 2023 Theme).',
            rules: [
                'The decision of judges will be final and binding to one and all',
            ],
            button_link: 'https://pictinc.org/impetus_register23/',
        },
        concepts: {

        },
        pradnya: {
            logo: 'pradnya_logo',
            name: 'PRADNYA',
            short_desc: 'Competitive Programming',
            desc: 'PRADNYA is a one of a kind programming event meticulously forged by our finest, catering to rookies and veterans alike, from all over the world. This Contest puts the programmer’s logical thinking and Problem solving skills to the test using programming languages, which guarantees to appraise their skills as a programmer.',
            eligibility: [
                { tag: 'Number of members in team', details: 'maximum 2 members' },
                { tag: 'Junior Level', details: 'First year engineering, Second year engineering, other background students such as BCS etc.' },
                { tag: 'Senior Level', details: 'Third year engineering, final year engineering, and PG students.' },
            ],
            rounds: [
                {
                    name: 'Wild Card Round',
                    details: 'Wildcard round is held on online platform Such as Hackerank, Hackerearth, codechef etc. This is a programming round. It is scheduled 2-3 days before the Pradnya event. The top 3 teams in the wildcard round can directly participate in final programming round. Stay tuned on PICT-INC Website to know dates for Wild card Round and its completely free.'
                },
                {
                    name: 'Round -1 : MCQ based round Day-1',
                    details: 'This is MCQ based round conducted Online. The MCQs are based on general logic based questions in C, C++, Java, Python. This round is conducted for both the levels by using a web platform specially designed by PICT Pradnya team. The login information and scheduled slots for this round will be communicated to the participants One day before event.'
                },
                {
                    name: 'Round-2 : Programming Round- Day-2',
                    details: 'Winners in MCQ based round, and wild card winners are eligible for the Programming contest. Five Problem statements are allotted to each level i.e. Junior and Senior level. The participants test their mettle in this round as they are challenged with a series of mind boggling problems designed to test their efficiency and capability. This round is held on an online programming platform. The login information and scheduled slots for this round will be communicated after Round-1.'
                },
                {
                    name: 'Round-3 : Judges Round- Day-2',
                    details: 'Winners of Round-2 from each level who were able to solve maximum test cases are eligible for this round. Judges from reputed industries are invited to judge this round. Judges will select 3 winner teams. Winners of Round-2 would be informed about the time slot for interaction with judges, where they have to demonstrate their code. The interaction will be conducted online on Zoom/Webx/any online meeting platform. The schedule will be sent to winners after the declaration of Round-2 results.'
                },
            ],
            registrations: {
                fees: 100,
                team_size: 2
            },
            rules: [
                'The decision of judges will be final and binding.',
            ],
            button_link: 'https://pictinc.org/subevents_register23/online/index_org.php',
        },
      }
      
      let { eventName } = useParams();
      const _404Navigator = useNavigate();
      const fetchName=()=>{
        console.log(eventName)
        
        if(eventName==='impetus') setEventDetail(eventsData.impetus);
        else if (eventName==='pradnya') setEventDetail(eventsData.pradnya);
        else if (eventName==='concepts') setEventDetail(eventsData.concepts);
        else _404Navigator('/404');
      
      }
      // eslint-disable-next-line
      useEffect(()=>fetchName(),[]) 
        return (
            <>
               (
                <div>
                {
                  eventDetail!==''
                ?
                <div className="grid md:grid-cols-2 min-h-screen md:p-8 gap-8 backdrop-blur-xl bg-gradient-to-b from-gray-900/40 to-gray-600/80">
                  <div className="my-auto text-center space-y-4 text-white md:h-full p-4 py-8  ">
                    <div className=" w-3/4 max-w-[380px] h-[380px] mx-auto">
                      <img
                        src={eventDetail.logo} 
                        alt="event-logo"
                        className="event-logo"
                      />
                    </div>
                    <div className="py-3 text-6xl mx-auto font-bold text-purple-600 border-gray-500 bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                      {/* Impetus */}
                      {eventDetail.name}
                      {/* {console.log(eventDetail.name)} */}
                    </div>
                    <div className=" border-b border-gray-500"></div>
                    <div className="font-light text-gray-400 text-justify">
                      {eventDetail.short_desc}
                      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor amet eum rem, magnam velit quam vero fugit quis reprehenderit animi laudantium temporibus! Tenetur temporibus odio nesciunt minus, sint consequuntur! */}
                    </div>
                    <div className="event-fees text-blue-400 text-lg font-bold text-left  tracking-widest grid grid-cols-2 place-items-center">
                      <div className="flex space-x-2">
                        <div className="text-gray-200 font-thin">Fees: </div>
                        {/* Rs 40 */}
                        {eventDetail.registrations.fees}
                      </div>
                      <div className="flex space-x-2">
                        <div className="text-gray-200 font-thin">Team Size: </div>
                        <div>{eventDetail.registrations.team_size}</div>
                      </div>
                    </div>
                    {/* <p className="text-green-400">
                      Registrations are currently being done manually. Sorry for
                      inconvenience:(
                    </p> */}
                    <button
                        className="border-2 border-solid p-2"
                      >
                        <a href={eventDetail.button_link}>Register</a>
                      </button>
                    <p className="text-red-400 font-medium event-register-buttons disabled">
                        Registrations closed! Try with other events.
                      </p>          
                  </div>
                  {/* event details description */}
                  <div className="space-y-4  p-8 h-full overflow-auto bg-black/20 shadow-lg border border-gray-700 max-h-screen font-thin text-gray-200">
                    <div className="text-4xl font-bold text-purple-400 mb-8 border-b border-purple-400/20 pb-2">
                      Description
                    </div>
                    <div className=" grid md:grid-cols-2 gap-4">
                      <div className="">
                        <div className="text-2xl font-bold pb-2 bg-clip-text  bg-gradient-to-r from-green-200 via-green-400 to-green-500 space-x-2">
                          <label>Prizes</label> <i class='fa fa-trophy yellow-color' />
                        </div>
                        <div className="border-t pt-2 border-slate-600">
                          {eventDetail.prizes}
                          {/* <ol className="text-gray-300 font-thin  "> */}
                            {/* {eventData?.prizes?.length ? (
                              eventData?.prizes?.map((data, idex) =>
                                data?.label !== "" ? (
                                  <li>
                                    {data?.position} {data?.position && ": "}
                                    {data?.prize && "Rs."} {data?.prize} (
                                    {data?.label && data.label})
                                  </li>
                                ) : (
                                  <li>
                                    {data?.position} : Rs. {data?.prize}
                                  </li>
                                )
                              )
                            ) : (
                              <div>Coming Soon...</div>
                            )} */}
                            {/* <li>
                                position 1: Rs 400
                            </li>
                            <li>
                                position 2:Rs 200
                            </li>
                            <li>
                                position 3: Rs 100
                            </li> */}
                          {/* </ol> */}
                        </div>
                      </div>
        
                      <div className="">
                        <div className="text-2xl font-bold pb-2 bg-clip-text bg-gradient-to-r from-green-200 via-green-400 to-green-500 space-x-2">
                          <label>Schedule</label>
                          {/* <img
                        className="h-[24px] w-[24px] inline-block "
                        src={"https://cdn-icons-png.flaticon.com/512/3652/3652191.png"}
                        alt=""
                      /> */}
                          <i class="far fa-calendar"></i>
                        </div>
                        <div className="border-t pt-2 border-slate-600">
                          <ol className="text-gray-300 font-thin list-disc list-inside">
                            {/* {
                              eventData?.schedule?.map((data) => (
                                <li>
                                  Round {data.round} : {data.datetime !== "" ? <a href="https://www.pcsbxenia.com/schedule">{data.datetime}</a> : <a href="https://www.pcsbxenia.com/schedule">Check Schedule Page</a>}
                                </li>
                              ))} */}

                          </ol>
                        </div>
                      </div>
        
                      <div className="space-y-2 col-span-2">
                        <div className="text-2xl font-bold bg-clip-text bg-gradient-to-r from-green-200 via-green-400 to-green-500 space-x-2">
                          <label>Rules</label>
                          {/* <img
                        className="h-[24px] w-[24px] inline-block "
                        src={
                          "https://cdn-icons.flaticon.com/png/512/3251/premium/3251560.png?token=exp=1660934349~hmac=38e045e4a5d1f01823b2d0e41a3d8f17"
                        }
                        alt=""
                      /> */}
                          <i class="far fa-clipboard-list-check"></i>
                        </div>
                          {eventDetail.rules}
                        <div className="border-t pt-2 border-slate-600 space-y-2 ">
                          {/* {eventData?.rules?.map((data) => (
                            <div>
                              <p className="text-blue-300  font-bold font-xl">
                                {data?.roundName}
                              </p>
                              <ul className="text-white list-disc list-inside">
                                {data?.roundRules?.map((s) => (
                                  <li>{s}</li>
                                ))}
                              </ul>
                            </div>
                          ))} */}
                           <div>
                              <p className="text-blue-300  font-bold font-xl">
                                {eventDetail.name}
                              </p>
                              {eventDetail.desc}
                              {/* <ul className="text-white list-disc list-inside">
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat a inventore, quidem unde voluptatibus delectus, esse odio non veniam velit magnam optio ipsum. Reiciendis nesciunt error possimus repudiandae accusantium, tempora voluptatibus?</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel, exercitationem vitae officia quam omnis consequuntur rerum aperiam dolorem nobis aliquid.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque perspiciatis porro eligendi temporibus optio, unde exercitationem tempore quaerat harum incidunt quos, dolorem blanditiis animi voluptas sapiente sequi!</li>

                              </ul> */}
                            </div>
                        </div>
                      </div>
        
                      <div className="col-span-2">
                        <div className="text-2xl font-bold bg-clip-text bg-gradient-to-r from-green-200 via-green-400 to-green-500">
                          {/* Platforms :MCQ */}
                          Rounds
                          <div className="mt-2 pt-1 font-light text-blue-200 border-t border-slate-600">
                            {eventDetail.rounds.map((data) => (
                              <div >
                              <ul className="text-white list-disc  list-inside">
                              <li className="font-bold font-xl">
                              {/* <p > */}
                                {data.name}
                              {/* </p> */}
                            </li>
                              </ul>
                                <p className="text-base">
                                {data.details}
                                </p>
                            </div>
                            ))}
                          </div>
                        </div>
                      </div>
        
                      <div className="col-span-2">
                        <div className="text-2xl font-bold pb-2 mt-5 bg-clip-text bg-gradient-to-r from-green-200 via-green-400 to-green-500">
                          Contact Help
                        </div>
                        <div className="border-t pt-2 border-slate-600">
                          {/* {eventData?.contact?.map((data) => (
                            <div>
                              <span className="text-blue-300 px-3">
                                {(data?.split(" ")?.[0] || " ") +
                                  " " +
                                  data?.split(" ")?.[1] || ":"}{" "}
                              </span>
                              <p className="inline-block text-blue-300  font-bold font-xl">
                                <a href={`tel:${data?.split(" ")?.[3]}`}>
                                  📞{" "}
                                  {(data?.split(" ")?.[2] || "") +
                                    data?.split(" ")?.[3] || ""}
                                </a>
                              </p>
                            </div>
                          ))} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                :
                ''}
                
                </div>
              )
            </>
        )
    }
    

export default EventDetails;
