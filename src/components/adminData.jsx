import axios from "axios";
import React, { useEffect, useState } from "react";
import { BeatLoader, ClipLoader } from "react-spinners";
import concepts_logo from '../assets/images/concepts_logo.png';
import pradnya_logo from '../assets/images/pradnya_logo.png';
import impetus_logo from '../assets/images/impetus_logo.png';

function AdminData() {
  const [eventCounts, setEventCounts] = useState({ concepts: 0, impetus: 0, pradnya: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [pradnyaCounts, setPradnyaCounts] = useState({ PpictCollegeCounts: 0, PotherCollegeCounts: 0 });
  const [impetusCounts, setImpetusCounts] = useState({ IpictCollegeCounts: 0, IotherCollegeCounts: 0 });
  const [conceptsCounts, setConceptsCounts] = useState({ CpictCollegeCounts: 0, CotherCollegeCounts: 0 });

  useEffect(() => {
    // Function to fetch event counts
    const fetchEventCounts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/events/geteventcount");
        setEventCounts(response.data);
      } catch (error) {
        console.error("Error fetching event counts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Function to fetch college registrations for Pradnya
    const fetchPradnyaRegistrations = async () => {
      try {
        const response = await axios.get("http://localhost:3001/events/registrations/pradnya", {
          maxRedirects: 0,
        });
        let pictPradnya = 0;
        let otherPradnya = 0;

        response.data.forEach((entry) => {
          if (entry.college === "Pune Institute of Computer Technology") {
            pictPradnya++;
          } else {
            otherPradnya++;
          }
        });
        setPradnyaCounts({
          PpictCollegeCounts: pictPradnya,
          PotherCollegeCounts: otherPradnya,
        });
      } catch (error) {
        console.error("Error fetching Pradnya college registrations:", error);
      }
    };

    // Function to fetch college registrations for Impetus
    const fetchImpetusRegistrations = async () => {
      try {
        const response = await axios.get("http://localhost:3001/events/registrations/impetus", {
          maxRedirects: 0,
        });
        let pictImpetus = 0;
        let otherImpetus = 0;

        response.data.forEach((entry) => {
          if (entry.college === "Pune Institute of Computer Technology") {
            pictImpetus++;
          } else {
            otherImpetus++;
          }
        });
        setImpetusCounts({
          IpictCollegeCounts: pictImpetus,
          IotherCollegeCounts: otherImpetus,
        });
      } catch (error) {
        console.error("Error fetching Impetus college registrations:", error);
      }
    };

    // Function to fetch college registrations for Concepts
    const fetchConceptsRegistrations = async () => {
      try {
        const response = await axios.get("http://localhost:3001/events/registrations/concepts", {
          maxRedirects: 0,
        });
        let pictConcepts = 0;
        let otherConcepts = 0;

        response.data.forEach((entry) => {
          if (entry.college === "Pune Institute of Computer Technology") {
            pictConcepts++;
          } else {
            otherConcepts++;
          }
        });
        setConceptsCounts({
          CpictCollegeCounts: pictConcepts,
          CotherCollegeCounts: otherConcepts,
        });
      } catch (error) {
        console.error("Error fetching Concepts college registrations:", error);
      }
      // Implement similar logic as fetchPradnyaRegistrations for Concepts event
    };

    // Call the functions
    fetchEventCounts();
    fetchPradnyaRegistrations();
    fetchImpetusRegistrations();
    fetchConceptsRegistrations();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Event Counts</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Concepts */}
        <div className="bg-light_blue p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
          <img src={concepts_logo} alt="" className="w-28 mb-4" />
          <h2 className="text-2xl font-semibold">Concepts</h2>
          <div className="flex flex-col space-y-4 items-center">
            <h1 className="text-xl font-semibold">
              Registered: {isLoading ? (
                <>
                  <span style={{ marginRight: '5px' }}><BeatLoader color="#ff00ee" loading={isLoading} size={16} /></span>
                </>
              ) : (
                eventCounts.concepts
              )}
            </h1>
            <div className="flex space-x-5">
              <h1 className="text-xl font-semibold p-2 bg-faint_blue rounded-lg">
                PICT: {isLoading ? (
                  <>
                    <span style={{ marginRight: '5px' }}><ClipLoader color="#36d7b7" size={20} /></span>
                  </>
                ) : (
                  conceptsCounts.CpictCollegeCounts
                )}
              </h1>
              <h1 className="text-xl font-semibold p-2 bg-faint_blue rounded-lg">
                Other: {isLoading ? (
                  <>
                    <span style={{ marginRight: '5px' }}><ClipLoader color="#36d7b7" size={20} /></span>
                  </>
                ) : (
                  conceptsCounts.CotherCollegeCounts
                )}
              </h1>
            </div>
          </div>
        </div>

        {/* Impetus */}
        <div className="bg-light_blue p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
          <img src={impetus_logo} alt="" className="w-28 mb-4" />
          <h2 className="text-2xl font-semibold">Impetus</h2>
          <div className="flex flex-col space-y-4 items-center">
            <h1 className="text-xl font-semibold ">
              Registered: {isLoading ? (
                <>
                  <span style={{ marginRight: '5px' }}><BeatLoader color="#ff00ee" loading={isLoading} size={16} /></span>
                </>
              ) : (
                eventCounts.impetus
              )}
            </h1>
            <div className="flex space-x-5">
              <h1 className="text-xl font-semibold p-2 bg-faint_blue rounded-lg">
                PICT: {isLoading ? (
                  <>
                    <span style={{ marginRight: '5px' }}><ClipLoader color="#36d7b7" size={20} /></span>
                  </>
                ) : (
                  impetusCounts.IpictCollegeCounts
                )}
              </h1>
              <h1 className="text-xl font-semibold p-2 bg-faint_blue rounded-lg">
                Other: {isLoading ? (
                  <>
                    <span style={{ marginRight: '5px' }}><ClipLoader color="#36d7b7" size={20} /></span>
                  </>
                ) : (
                  impetusCounts.IotherCollegeCounts
                )}
              </h1>
            </div>
          </div>
        </div>

        {/* Pradnya */}
        <div className="bg-light_blue p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
          <img src={pradnya_logo} alt="" className="w-28 mb-4" />
          <h2 className="text-2xl font-semibold">Pradnya</h2>
          <div className="flex flex-col space-y-4 items-center">
            <h1 className="text-xl font-semibold">
              Registered: {isLoading ? (
                <>
                  <span style={{ marginRight: '5px' }}><BeatLoader color="#ff00ee" loading={isLoading} size={16} /></span>
                </>
              ) : (
                eventCounts.pradnya
              )}
            </h1>
            <div className="flex space-x-5">
              <h1 className="text-xl font-semibold p-2 bg-faint_blue rounded-lg">
                PICT: {isLoading ? (
                  <>
                    <span style={{ marginRight: '5px' }}><ClipLoader color="#36d7b7" size={20} /></span>
                  </>
                ) : (
                  pradnyaCounts.PpictCollegeCounts
                )}
              </h1>
              <h1 className="text-xl font-semibold p-2 bg-faint_blue rounded-lg">
                Other: {isLoading ? (
                  <>
                    <span style={{ marginRight: '5px' }}><ClipLoader color="#36d7b7" size={20} /></span>
                  </>
                ) : (
                  pradnyaCounts.PotherCollegeCounts
                )}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminData;
