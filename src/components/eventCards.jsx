import './styles/eventCards.css';


const eventData = [
  {
      id:1,
      name:"Impeteus",
      fees:200,
      members:"Max 5 members",
      prize:1000,
      logo:"https://drive.google.com/uc?export=view&id=1nD_h-1AhcsXfwqlnwAMKZpT8sMNiE5bb",
      nt: "₹ 100/- For National Entries",
      it: "$ 5/- For International Entries"
  },

  {
      id:2,
      name:"Concepts",
      fees:300,
      members:"Max 5 members",
      prize:1000,
      logo:"https://drive.google.com/uc?export=view&id=1NgvXwsbT6SMkiyqr-GowrDwWpUCuWz-J",
      nt: "₹ 100/- For National Entries",
      it: "$ 5/- For International Entries"
  },

  {
      id:3,
      name:"Pradnya",
      fees:100,
      members:"Max 2 Members",
      prize:1000,
      logo:"https://drive.google.com/uc?export=view&id=12hfTCbKmZIqKWakr_79VtTZU_5pjCuXi",
      nt: "₹ 100/- For National Entries",
      it: "$ 5/- For International Entries"
  }
];


function Card(props){
  return (
      <div className="card">       
          {/* my card*/}
              <div className="py-10">
                  <div className="rounded overflow-hidden shadow-lg max-w-sm bg-cyan-700 hover:scale-105 cursor-pointer  hover:shadow-indigo-400 hover:shadow-xl">
                      <img src = {props.logo}
                      alt="" 
                      className="w-full"/>
                      <div className="px-6">
                      <hr className='pt-2'/>
                      <div className="font-bold text-xl mb-2 text-white text-center">{props.name}</div>
                      <hr className='py-2'/>
                      {/* <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni dolorem libero pariatur nisi fugit voluptate perferendis, harum sapiente sit eius excepturi, similique repellendus explicabo dicta a ipsa iure temporibus dolorum, accusantium consequatur sequi possimus! Quas non veniam aliquid et?</p> */}
                      <p className="text-md mb-2 text-white text-center">TEAM : {props.team}</p>
                      <hr className='py-1'/>
                      <p className="text-md mb-2 text-white text-center">FEES :</p>
                      <p className="text-sm mb-2 text-white text-center">{props.ne}</p>
                      <p className="text-sm mb-2 text-white text-center">{props.ie}</p>
                      <br />
                      {/* <button className="bg-transparent text-white hover:text-blue-300 font-semibold hover:text-green-300 px-2">View More</button> */}
                  </div>
                  </div>
              </div>
      </div>
  )
}

function EventCards() {
    return (
        <div className='eventCards'>
          <h1 className="mt-10 mb-2 text-center capitalize text-4xl font-bold text-white">Events</h1>
          <hr className="w-1/5 mx-auto"/>
          <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center'>
            {
              eventData.map( (eva) =>{
                  return <Card name = {eva.name} logo={eva.logo} team={eva.members} ne={eva.nt} ie={eva.it}/>
              })
            }
          </div>
        </div>
    )
}

export default EventCards;
