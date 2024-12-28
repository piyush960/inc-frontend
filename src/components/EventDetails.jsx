import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

const EventDetails = () => {
  const { id } = useParams();
  const [shinePosition, setShinePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  // Sample data for demonstration purposes
  const events = [
    {
      id: 'impetus',
      title: "IMPETUS",
      description: "International Level Project Exhibition and Competition",
      fees: {
        national: "₹100 /-",
        international: "Free"
      },
      teamSize: "Max 5 members",
      schedule: "5th, 6th & 7th of April",
      prizes: "Cash prize worth ₹7 Lakh. Selected projects addressing societal needs will be awarded ₹1 Lakh Cash Prize from PICT.",
      criteria: "First, Second and Third Year Students enrolled in any BE/BTech, BSc, BCA, Diploma Degree.",
      rules: [
        "Judge's decision will be final.",
        "Project status must be in 'Ready to Use'.",
        "Already registered candidates need not register again."
      ]
    },
    // Other events...
  ];

  // Find the event details based on the ID
  const event = events.find(event => event.id === parseInt(id));

  if (!event) {
    return <div className="p-4">Event not found</div>;
  }

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setShinePosition({ x: clientX, y: clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-screen flex flex-col items-center justify-center overflow-hidden relative"
    >
      <p className="md:text-2xl text-2xl font-medium text-center text-white-100 relative z-20 max-w-2xl mx-auto">
        {event.title}
      </p>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 346],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
      <CardContainer className="bg-gray-900 text-white-100 shadow-md p-10 max-w-6xl w-full relative z-10 flex flex-row overflow-hidden perspective-1000 border border-gray-700 rounded-lg">
        <CardBody className="flex flex-row w-full transition-transform duration-300 transform group-hover/card:scale-105 h-full ">
          <CardItem className="w-1/2 pr-10">
            <div className={`transition-transform duration-300 ${hovered ? 'transform translate-y-[-10px] scale-105' : ''}`}>
              <img src="src/assets/impetuslogo.png" alt="Event Logo" className="w-1/3 h-auto mb-4 mx-auto" />
              <h2 className="text-3xl font-bold mb-2 text-center">{event.title}</h2>
            </div>
            <div className="mt-4 flex justify-between">
              <button className="bg-blue-500 text-white-100 py-2 px-6 rounded">Button 1</button>
              <button className="bg-green-500 text-white-100 py-2 px-6 rounded">Button 2</button>
            </div>
          </CardItem>
          <CardItem className="w-1/2 pl-10">
            <h2 className="text-3xl font-bold mb-4">Event Details</h2>
            <p className="mt-2 text-gray-300">{event.description}</p>
            <div className="mt-6">
              <p className="font-semibold"><strong>Fees:</strong></p>
              <p>🔹 National Entries: <span className="font-medium">{event.fees.national}</span></p>
              <p>🔹 International Entries: <span className="font-medium">{event.fees.international}</span></p>
              <p className="font-semibold"><strong>Team Size:</strong> <span className="font-medium">{event.teamSize}</span></p>
              <p className="font-semibold"><strong>Schedule:</strong> <span className="font-medium">{event.schedule}</span></p>
              <p className="font-semibold"><strong>Prizes:</strong> <span className="font-medium">{event.prizes}</span></p>
              <p className="font-semibold"><strong>Criteria:</strong> <span className="font-medium">{event.criteria}</span></p>
              <p className="font-semibold"><strong>Rules:</strong></p>
              <ul className="list-disc list-inside ml-4">
                {event.rules.map((rule, index) => (
                  <li key={index} className="text-gray-300">{rule}</li>
                ))}
              </ul>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default EventDetails; 