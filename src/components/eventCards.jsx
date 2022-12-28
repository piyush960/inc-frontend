import './styles/eventCards.css';


const eventData = [
  {
      id:1,
      name:"Impeteus",
      fees:200,
      members:1,
      prize:1000
  },

  {
      id:2,
      name:"Pradnya",
      fees:300,
      members:3,
      prize:1000
  },

  {
      id:3,
      name:"XYZZZZ",
      fees:100,
      members:1,
      prize:1000
  }
];


function Card(props){
  return (
      <div className="card">       
          {/* my card*/}
              <div className="py-10">
                  <div className="rounded overflow-hidden shadow-lg max-w-sm bg-cyan-800 hover:scale-105 cursor-pointer  hover:shadow-indigo-500 hover:shadow-lg">
                      <img src ="https://reactjs.org/logo-og.png" 
                      alt="" 
                      className="w-full"/>
                      <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 text-white">{props.name}</div>
                      <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni dolorem libero pariatur nisi fugit voluptate perferendis, harum sapiente sit eius excepturi, similique repellendus explicabo dicta a ipsa iure temporibus dolorum, accusantium consequatur sequi possimus! Quas non veniam aliquid et?</p>
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
                  return <Card name = {eva.name}/>
              })
            }
          </div>
        </div>
    )
}

export default EventCards;
