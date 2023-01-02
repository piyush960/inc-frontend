import "./styles/schedule.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaShoppingBag,
  FaUserClock,
  FaCalendarDay,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi";
import { Fade } from "react-awesome-reveal";
import { Timeline, TimelineEvent } from "@mailtop/horizontal-timeline";
import { FaBug, FaRegCalendarCheck, FaRegFileAlt } from "react-icons/fa";

function Schedule() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="w-full text-center text-4xl md:text-5xl text-white my-20 drop-shadow-xl font-poppins">
        <Fade delay={100} duration={1000}>
          Schedule
        </Fade>
      </span>

      {/* <VerticalTimeline>
        <Fade delay={100} duration={1000}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work drop-shadow-xl hover:"
            //   contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //   contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Dec 2021 - Feb 2022"
            dateClassName="text-white drop-shadow-xl"
            iconStyle={{ background: "#46a8ff", color: "#000" }}
            icon={<FaShoppingBag />}
          >
            <h3 className="vertical-timeline-element-title text-2xl font-poppins font-bold flex justify-between">
              EventName{" "}
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <FaExternalLinkAlt />
              </a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle py-2">
              one liner or tagline
            </h4>
            <ul className="list-disc px-5 font-poppins text-slate-600">
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
                beatae.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
                beatae.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
                beatae.
              </li>
            </ul>
            <div className="flex flex-wrap mt-3 text-sm font-poppins font-bold">
              <div className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1 flex justify-center items-center">
                <FaCalendarDay />
                <span className="ml-2">25th Jan</span>
              </div>
              <div className="rounded-full bg-[#4391c5] py-1 px-2 mx-1 my-1 flex justify-center items-center">
                <HiCurrencyRupee size={20}/>
                <span className="ml-1">40</span>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "#46a8ff", color: "#000" }}
            icon={<FaUserClock />}
          />
        </Fade>
      </VerticalTimeline> */}
      <Fade>
        <div className="text-white">
          <Timeline minEvents={3} placeholder>
            <TimelineEvent
              icon={FaRegFileAlt}
              title="Impetus"
              subtitle="26/03/2019"
              color="#1560bd"
            />
            <TimelineEvent
              color="#3a7ca5"
              icon={FaRegCalendarCheck}
              title="Pradnya"
              subtitle="26/03/2019"
            />
            <TimelineEvent
              color="#1560bd"
              icon={FaBug}
              title="Competus"
              subtitle="26/03/2019"
              // action={{
              //   label: "Ver detalhes...",
              //   onClick: () => window.alert("Error!"),
              // }}
            />
          </Timeline>
        </div>
      </Fade>
    </div>
  );
}

export default Schedule;
