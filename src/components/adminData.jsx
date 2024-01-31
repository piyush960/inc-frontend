import React, { useEffect, useState } from "react";
import { BeatLoader, ClipLoader } from "react-spinners";
import concepts_logo from '../assets/images/concepts_logo.png';
import pradnya_logo from '../assets/images/pradnya_logo.png';
import impetus_logo from '../assets/images/impetus_logo.png';
import { useGetRegistrations } from "../hooks/admin.hooks";

function AdminData() {
  const [eventCounts, setEventCounts] = useState({ concepts: 0, impetus: 0, pradnya: 0 });
  const [pradnyaCounts, setPradnyaCounts] = useState({ PpictCollegeCounts: 0, PotherCollegeCounts: 0 });
  const [impetusCounts, setImpetusCounts] = useState({ IpictCollegeCounts: 0, IotherCollegeCounts: 0 });
  const [conceptsCounts, setConceptsCounts] = useState({ CpictCollegeCounts: 0, CotherCollegeCounts: 0 });

  const useEventData = (eventName) => {
    const { isLoading, data } = useGetRegistrations(eventName);

    useEffect(() => {
      if (data && data.data) {
        const totalCount = data.data.length;
        setEventCounts((prevCounts) => ({ ...prevCounts, [eventName]: totalCount }));

        let pictCount = 0;
        let otherCount = 0;

        data.data.forEach((entry) => {
          entry.college === "Pune Institute of Computer Technology" ? pictCount++ : otherCount++;
        });

        const collegeCounts = {
          [`${eventName[0].toUpperCase()}pictCollegeCounts`]: pictCount,
          [`${eventName[0].toUpperCase()}otherCollegeCounts`]: otherCount,
        };

        switch (eventName) {
          case "concepts":
            setConceptsCounts(collegeCounts);
            break;
          case "impetus":
            setImpetusCounts(collegeCounts);
            break;
          case "pradnya":
            setPradnyaCounts(collegeCounts);
            break;
          default:
            break;
        }
      }
    }, [data]);

    return { isLoading, totalCount: eventCounts[eventName], collegeCounts: eventName === "concepts" ? conceptsCounts : eventName === "impetus" ? impetusCounts : pradnyaCounts };
  };

  const { isLoading: conceptsIsLoading, totalCount: conceptsTotalCount, collegeCounts: conceptsCollegeCounts } = useEventData("concepts");
  const { isLoading: impetusIsLoading, totalCount: impetusTotalCount, collegeCounts: impetusCollegeCounts } = useEventData("impetus");
  const { isLoading: pradnyaIsLoading, totalCount: pradnyaTotalCount, collegeCounts: pradnyaCollegeCounts } = useEventData("pradnya");

  const renderEventCard = (eventName, logo, total, pictCount, otherCount, isLoading) => (
    <div className="bg-light_blue p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
      <img src={logo} alt="" className="w-28 mb-4" />
      <h2 className="text-2xl font-semibold">{eventName[0].toUpperCase() + eventName.slice(1)}</h2>
      <div className="flex flex-col space-y-4 items-center">
        <h1 className="text-xl font-semibold">
          Registered: {isLoading ? (
            <>
              <span style={{ marginRight: '5px' }}><BeatLoader color="#ff00ee" loading={isLoading} size={16} /></span>
            </>
          ) : (
            total
          )}
        </h1>
        <div className="flex space-x-5">
          <h1 className="text-xl font-semibold p-2 bg-faint_blue rounded-lg">
            PICT: {isLoading ? (
              <>
                <span style={{ marginRight: '5px' }}><ClipLoader color="#36d7b7" size={20} /></span>
              </>
            ) : (
              pictCount
            )}
          </h1>
          <h1 className="text-xl font-semibold p-2 bg-faint_blue rounded-lg">
            Other: {isLoading ? (
              <>
                <span style={{ marginRight: '5px' }}><ClipLoader color="#36d7b7" size={20} /></span>
              </>
            ) : (
              otherCount
            )}
          </h1>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Event Counts</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {renderEventCard("concepts", concepts_logo, conceptsTotalCount, conceptsCollegeCounts.CpictCollegeCounts, conceptsCollegeCounts.CotherCollegeCounts, conceptsIsLoading)}
        {renderEventCard("impetus", impetus_logo, impetusTotalCount, impetusCollegeCounts.IpictCollegeCounts, impetusCollegeCounts.IotherCollegeCounts, impetusIsLoading)}
        {renderEventCard("pradnya", pradnya_logo, pradnyaTotalCount, pradnyaCollegeCounts.PpictCollegeCounts, pradnyaCollegeCounts.PotherCollegeCounts, pradnyaIsLoading)}
      </div>
    </div>
  );
}

export default AdminData;
