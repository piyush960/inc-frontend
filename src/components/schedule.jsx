import './styles/schedule.css';
import { Fade } from 'react-awesome-reveal';

function Schedule() {
  return (
    <div id='schedule' className='md:my-20 ml-20 p-2 flex flex-col justify-evenly items-stretch'>
      <span className='w-full text-center text-4xl md:text-5xl text-white my-10 drop-shadow-xl font-poppins '>
        <Fade delay={100} duration={1000}>
          Schedule
        </Fade>
        <hr className="w-1/5 mx-auto mt-3 mb-2 " />
      </span>
      <Fade>
        <div className='md:flex m-2 '>
          {/* <ol class='items-center sm:flex'> */}
            {/* <li class='relative mb-6 sm:mb-0 w-full'> */}
              {/* <div class='flex items-center'>
                <div class=' z-10 flex items-center justify-center w-6 h-6 bg-blue-100  ring-0 ring-light_blue/40 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 hover:border-faint_blue hover:bottom-2 group shadow-lg max-w-sm rounded-3xl hover:bg-transparent hover:text-gold   hover:scale-105 cursor-pointer  hover:shadow-light_blue hover:shadow-xl '>
                  <svg aria-hidden='true' class='w-3 h-3 text-blue-800 dark:text-blue-300' fill='currentColor' viewBox='0 0 20 20' xmlns='https://drive.google.com/uc?export=view&id=1NgvXwsbT6SMkiyqr-GowrDwWpUCuWz-J'><path fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd'></path></svg>
                </div>
                <div class='hidden sm:flex w-full  bg-light_blue/40 h-1 dark:bg-light_blue/40'></div>

              </div> */}
              <div class='mt-3  sm:pr-8'>
                <h3 class='text-3xl font-semibold text-gold dark:text-gold md:text-justify text-center'>DAY 1</h3>
                <time class='block mb-1 text-xl font-normal leading-none text-gold dark:text-gold'>21st April'23</time>
                <p class='block text-xl font-normal leading-none text-gold dark:text-gold py-1'> 🔷9:30 AM – Registration and Reporting to Shamiyana</p>
                <p class='block text-xl font-normal leading-none text-gold dark:text-gold py-1'> 🔷10:00 AM to 11:00 AM-Inauguration</p>
                <p class='block text-xl font-normal leading-none text-gold dark:text-gold py-1'> 🔷11:30 AM to 7:00 PM –Concepts : Judging & Exhibition.</p>
                <p class='block text-xl font-normal leading-none text-gold dark:text-gold py-1'> 🔷11:30 AM to 7:00 PM –Impetus : Judging.</p>
                <p class='block text-xl font-normal leading-none text-gold dark:text-gold py-1'> 🔷11:30 AM to 4:30 PM –Pradnya : Round 1.</p>
                {/* <p class='text-base font-normal text-white dark:text-white'>Get started with dozens of web components and interactive elements.</p> */}
              </div>
            {/* </li>
            <li class='relative mb-6 sm:mb-0 w-full'> */}
              {/* <div class='flex items-center'>
                <div class='z-10 flex items-center justify-center w-6 h-6 bg-blue-100  ring-0 ring-light_blue/40 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 hover:border-faint_blue hover:bottom-2 group shadow-lg max-w-sm rounded-3xl hover:bg-transparent hover:text-gold   hover:scale-105 cursor-pointer  hover:shadow-light_blue hover:shadow-xl'>
                  <svg aria-hidden='true' class='w-3 h-3 text-blue-800 dark:text-blue-300' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd'></path></svg>

                </div>
                <div class='hidden sm:flex w-full bg-light_blue/40 h-1  dark:bg-light_blue/40'></div>
              </div> */}
              <div class='mt-3 sm:pr-8'>
                <h3 class='text-3xl font-semibold text-gold dark:text-gold md:text-justify text-center'>DAY 2</h3>
                <time class='block mb-1 text-xl font-normal leading-none text-gold dark:text-gold'>22nd April'23</time>
                {/* <p class='text-base font-normal text-white dark:text-white'>Get started with dozens of web components and interactive elements.</p> */}
                <p class='block text-xl font-normal leading-none text-gold dark:text-gold py-1'>🔷9:00 AM to 7:00 PM - Judging/Exhibition</p> 
                <p class='block text-xl font-normal leading-none text-gold dark:text-gold py-1'> 🔷9:00 AM to 7:00 PM –Concepts : Judging & Exhibition.</p>
                <p class='block text-xl font-normal leading-none text-gold dark:text-gold py-1'> 🔷9:00 AM to 7:00 PM –Impetus : Judging.</p>
                <p class='block text-xl font-normal leading-none text-gold dark:text-gold py-1'>🔷9:00 AM to 3 PM -Pradnya : Round 2</p>
              <p class='block text-xl font-normal leading-none text-gold dark:text-gold py-1'>🔷4 PM -Pradnya : Judging Round</p>
              </div> {/* </li>
            <li class='relative mb-6 sm:mb-0 '> */}
              {/* <div class='flex items-center'>
                <div class='z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-light_blue/40 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 hover:border-faint_blue hover:bottom-2 group shadow-lg max-w-sm rounded-3xl hover:bg-transparent hover:text-gold   hover:scale-105 cursor-pointer  hover:shadow-light_blue hover:shadow-xl '>
                  <svg aria-hidden='true' class='w-3 h-3 text-blue-800 dark:text-blue-300' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd'></path></svg>
                </div>
                <div class='hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700'></div>
              </div> */}
              <div class='mt-3 sm:pr-8 '>
                <h3 class='text-3xl font-semibold text-gold dark:text-gold md:text-justify text-center'>DAY3</h3>
                <time class='block mb-1 text-xl font-normal leading-none text-gold dark:text-gold text-justify'>23rdApril'23</time>
                
                <p class='block text-xl font-normal leading-none text-gold dark:text-gold py-1'>🔷11:30 AM to 4:30 PM – Consolidation and preparation of winner's list</p>
                <p class='block text-xl font-normal leading-none text-gold dark:text-gold py-1'>🔷4:30 PM – Reporting to Shamiyana</p>
                <p class='block text-xl font-normal leading-none text-gold dark:text-gold py-1'>🔷5:00 PM to 7:20 PM – Closing Ceremony</p>
                {/* <p class='text-base font-normal text-white dark:text-white'>Get started with dozens of web components and interactive elements.</p> */}
              </div>
            {/* </li>
          </ol> */}

        </div>
      </Fade>
    </div>
  );
}

export default Schedule;