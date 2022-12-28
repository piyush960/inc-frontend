import './styles/eventCards.css';
import Card from './Card/card';
import eventData from './Card/eventData';

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
