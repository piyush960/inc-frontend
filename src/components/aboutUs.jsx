import { Fade } from "react-awesome-reveal";
import "./styles/AboutUs.css";

const COLORS = [
  "#bbf7d0",
  "#99f6e4",
  "#bfdbfe",
  "#ddd6fe",
  "#f5d0fe",
  "#fed7aa",
  "#fee2e2",
];
const TAGS = [
  "INC",
  "Impetus",
  "Concepts",
  "Pradnya",
  "Project",
  "Presentation",
  "Embeded Systems",
  "Web Development",
  "IOT",
  "Hardware",
  "Application Development",
  "Project Management",
];
const DURATION = 15000;
const ROWS = 20;
const TAGS_PER_ROW = 12;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className="tag">
    <span className="text-lg text-gold">#</span> {text}
  </div>
);

const AboutUs = () => (
  <div id="about" >
    <Fade>
      <header className="header-about my-10">
        <h1 className="text-center">About Us</h1>
      </header>
      <div className="about-body relative overflow-hidden py-12">
        <div className="about-content text-left w-[90%] md:w-8/12 z-10 p-8 md:px-12 text-lg shadow-2xl shadow-light_blue/20 bg-[#000]/80 rounded-xl border border-light_blue/30">
          Impetus and Concepts (InC) is a flagship technical event of SCTR's Pune Institute of Computer Technology (PICT) Pune, which will be held in during 3rd week of April 2023. InC is an intercollegiate International level competition which has been catching the attention of corporate giants for Quality of projects and an opportunity to recruit/mentor young talented budding entrepreneurs. Every year InC sets a New Benchmark and provides an opportunity to students to realize their ideas into effective product. Over the years, it has become most popular & awaited event with continuous improvement in Footfall, Number and Quality of projects/papers, etc. This event also sets a platform for students to design, exhibit and watch their ideas come true. This technical fest has Inventive events namely - Impetus, Concepts, Pradnya.
          <br />
          <br />
          Accordingly,Impetus Project Competition FE to TE students, All Engineering Branches confined to specific Domains,Concepts Projects CompetitionFinal Year Students,All Engineering Branches confined Specific Domains & Pradnya - International Coding Competition.
          <br />
          <br />
          InC announces a total cash prize of ₹6 Lakhs and a special prize of ₹1 Lakh for Project related to "Online Teaching Aids" (InC 2023 Theme).
          <br />
        </div>

        <div className="tag-list w-full blur-sm hover:blur-none transition duration-300">
          {[...new Array(ROWS)].map((_, i) => (
            <InfiniteLoopSlider
              key={i}
              duration={random(DURATION - 5000, DURATION + 5000)}
              reverse={i % 2}
            >
              {shuffle(TAGS)
                .slice(0, TAGS_PER_ROW)
                .map((tag) => (
                  <Tag text={tag} key={tag} />
                ))}
            </InfiniteLoopSlider>
          ))}
          <div className="fade" />
        </div>
      </div>
    </Fade>
  </div>
);

export default AboutUs;