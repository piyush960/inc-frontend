import './styles/eventCards.css';


const eventData = [
  {
    id: 1,
    name: "IMPETUS",
    fees: 200,
    members: "Max 5 members",
    prize: 1000,
    logo: "https://drive.google.com/uc?export=view&id=1nD_h-1AhcsXfwqlnwAMKZpT8sMNiE5bb",
    nt: "₹ 100/- For National Entries",
    it: "$ 5/- For International Entries"
  },

  {
    id: 2,
    name: "CONCEPTS",
    fees: 300,
    members: "Max 5 members",
    prize: 1000,
    logo: "https://drive.google.com/uc?export=view&id=1NgvXwsbT6SMkiyqr-GowrDwWpUCuWz-J",
    nt: "₹ 100/- For National Entries",
    it: "$ 5/- For International Entries"
  },

  {
    id: 3,
    name: "PRADNYA",
    fees: 100,
    members: "Max 2 Members",
    prize: 1000,
    logo: "https://drive.google.com/uc?export=view&id=12hfTCbKmZIqKWakr_79VtTZU_5pjCuXi",
    nt: "₹ 100/- For National Entries",
    it: "$ 5/- For International Entries"
  }
];


function Card(props) {
  return (
    <div className="card">
      {/* my card*/}
      <div className="py-8 mx-5 md:mx-0">
        <div className=" border-light_blue border bg-light_blue/30 overflow-hidden transition-all hover:border-faint_blue hover:bottom-2 group shadow-lg max-w-sm rounded-3xl hover:bg-transparent hover:text-gold   hover:scale-105 cursor-pointer  hover:shadow-light_blue hover:shadow-xl">
          <div className='flex'>
            <div className='h-40'>
              <img src={props.logo}
              alt=""
              className="w-full" />
              </div>
            <div className="my-auto text-xl mr-10 md:text-3xl font-poppins text-gold font-bold tracking-wider underline underline-offset-4 decoration-1 decoration-light_blue uppercase">{props.name}</div>

          </div>

          <div className="px-6">
            <hr className='pt-2 group-hover:text-white' />

            {/* <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni dolorem libero pariatur nisi fugit voluptate perferendis, harum sapiente sit eius excepturi, similique repellendus explicabo dicta a ipsa iure temporibus dolorum, accusantium consequatur sequi possimus! Quas non veniam aliquid et?</p> */}
            <p className="text-lg md:text-2xl border-l-2 border-gold md:font-light md:leading-6 pl-2">TEAM : {props.team}</p>

            <p className="my-4 text-lg md:text-2xl border-l-2 border-gold md:font-light md:leading-6 pl-2">FEES :</p>
            <p className="my-4 text-lg md:text-2xl border-l-2 border-gold md:font-light md:leading-6 pl-2">{props.ne}</p>
            <p className="my-4 text-lg md:text-2xl border-l-2 border-gold md:font-light md:leading-6 pl-2">{props.ie}</p>
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
    <div className='eventCards my-10 '>
      <h1 className="mt-10 mb-2 text-center capitalize text-5xl font-bold text-white">Events</h1>
      <hr className="w-1/5 mx-auto mb-5 " />
      <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center'>
        {
          eventData.map((eva) => {
            return <Card name={eva.name} logo={eva.logo} team={eva.members} ne={eva.nt} ie={eva.it} />
          })
        }
      </div>
    </div>
  )
}

export default EventCards;
