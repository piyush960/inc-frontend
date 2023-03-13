import React from 'react';
import ReactDOM from 'react-dom';
import './styles/AboutUs.css'

const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
const DURATION = 15000;
const ROWS = 10;
const TAGS_PER_ROW = 12;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <div className='loop-slider' style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className='tag'><span>#</span> {text}</div>
);

const AboutUs = () => (
  <div className='about-body'>
    <header className='header-about'>
      <h1>About Us</h1>
    </header>
    <div className='tag-list w-full'>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2} >
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Tag text={tag} key={tag}/>
          ))}
        </InfiniteLoopSlider>
      ))}
      <div className='fade'/>
    </div>
  </div>
);

// ReactDOM.render(
//   <AboutUs />,
//   document.body
// );

export default AboutUs
