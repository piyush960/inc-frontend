import { useParams } from 'react-router-dom';
import './styles/eventDetails.css';
import EventCards from '../components/eventCards';

function EventDetails() {
  const { eventName } = useParams();

  return (
    <div className='event-details'>
      <h1>{eventName}</h1>
      {eventName.toLowerCase() === 'impetus' &&
        <div className="grid md:grid-cols-2 min-h-screen md:p-8 gap-8 backdrop-blur-xl bg-gradient-to-b from-gray-900/40 to-gray-600/80">
          <div className="my-auto text-center space-y-4 text-white md:h-full p-4 py-8  ">
            <div className=" w-3/4 max-w-[380px] h-[380px] mx-auto">
              <img
                src="https://reactjs.org/logo-og.png"
                alt="event-logo"
                className="event-logo"
              />
            </div>
            <div className="py-3 text-6xl mx-auto font-bold text-purple-600 border-gray-500 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Impetus
            </div>
            <div className=" border-b border-gray-500"></div>
            <div className="font-light text-gray-400 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor amet eum rem, magnam velit quam vero fugit quis reprehenderit animi laudantium temporibus! Tenetur temporibus odio nesciunt minus, sint consequuntur!
            </div>
            <div className="event-fees text-blue-400 text-lg font-bold text-left  tracking-widest grid grid-cols-2 place-items-center">
              <div className="flex space-x-2">
                <div className="text-gray-200 font-thin">Fees: </div>
                Rs 40
              </div>
              <div className="flex space-x-2">
                <div className="text-gray-200 font-thin">Team Size: </div>
                <div>4</div>
              </div>
            </div>
            {/* <p className="text-green-400">
                        Registrations are currently being done manually. Sorry for
                        inconvenience:(
                      </p> */}

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
                <div className="text-2xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500 space-x-2">
                  <label>Prizes</label> <i class="far fa-trophy" />
                </div>
                <div className="border-t pt-2 border-slate-600">
                  <ol className="text-gray-300 font-thin  ">
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
                    <li>
                      position 1: Rs 400
                    </li>
                    <li>
                      position 2:Rs 200
                    </li>
                    <li>
                      position 3: Rs 100
                    </li>
                  </ol>
                </div>
              </div>

              <div className="">
                <div className="text-2xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500 space-x-2">
                  {/* <label>Schedule</label> */}
                  {/* <img
                          className="h-[24px] w-[24px] inline-block "
                          src={"https://cdn-icons-png.flaticon.com/512/3652/3652191.png"}
                          alt=""
                        /> */}
                  <i class="far fa-calendar"></i>
                </div>
                <div className="border-t pt-2 border-slate-600">
                  <ol className="text-gray-300 font-thin  list-disc list-inside">
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
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500 space-x-2">
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
                      Impetus
                    </p>
                    <ul className="text-white list-disc list-inside">
                      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat a inventore, quidem unde voluptatibus delectus, esse odio non veniam velit magnam optio ipsum. Reiciendis nesciunt error possimus repudiandae accusantium, tempora voluptatibus?</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel, exercitationem vitae officia quam omnis consequuntur rerum aperiam dolorem nobis aliquid.</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque perspiciatis porro eligendi temporibus optio, unde exercitationem tempore quaerat harum incidunt quos, dolorem blanditiis animi voluptas sapiente sequi!</li>

                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500">
                  Platforms :MCQ
                  <div className="mt-2 pt-1 font-light text-blue-200 border-t border-slate-600">
                    {/* {eventData?.platform?.map((data) => (
                                <p>
                                  Round {data?.round} :{" "}
                                  <strong>
                                    <a
                                      href={data?.link}
                                      rel="noreferrer noopener"
                                      target="_blank"
                                    >
                                      {data?.name}
                                    </a>
                                  </strong>
                                </p>
                              ))} */}
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <div className="text-2xl font-bold pb-2 mt-5 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500">
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
      }
    </div>
  );
}

export default EventDetails;