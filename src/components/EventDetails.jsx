import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from "./ui/tabs";

import { eventsData } from '../constants';

import { IconCalendarFilled, IconCheckupList, IconCurrencyDollar, IconDiamondsFilled, IconDownload, IconFileDescription, IconTrophy, IconUserCheck, IconUserEdit, IconUsersGroup } from '@tabler/icons-react'
import { Accordion, AccordionHeader, AccordionItem, AccordionPanel } from './ui/accordian';


function TabsDemo() {

  const { id } = useParams()

  const tabs = [
    {
      title: "Impetus",
      value: "impetus",
      content: (
        <div
          className="w-full overflow-y-scroll overflow-x-hidden relative h-screen p-4 bg-tertiary">
          <EventDetails data={eventsData.impetus} />
        </div>
      ),
    },
    {
      title: "Concepts",
      value: "concepts",
      content: (
        <div
          className="w-full overflow-y-scroll overflow-x-hidden relative h-screen p-4 bg-tertiary">
          <EventDetails data={eventsData.concepts}/>
        </div>
      ),
    },
    {
      title: "Pradnya",
      value: "pradnya",
      content: (
        <div
          className="w-full overflow-y-scroll overflow-x-hidden relative h-screen p-4 bg-tertiary">
          <EventDetails data={eventsData.pradnya}/>
        </div>
      ),
    },
  ];

  return (
    (<div
      className="pt-20 max-sm:px-2 max-w-7xl w-full h-[150vh] mx-auto">
      <Tabs tabs={tabs} activeId={id}/>
    </div>)
  );
}

export default TabsDemo; 

const EventDetails = ({ data }) => {
  const { id } = useParams();
  
  console.log(data)

  return (
    <div
    className='flex flex-col w-full h-[90vh] justify-between items-center p-1 sm:p-5 gap-3'
    >
      <div className='flex flex-col sm:flex-row sm:justify-start items-center justify-center w-full border-b-[1px] max-sm:gap-3'>
        <div className='flex flex-col items-center sm:border-r-[1px] border-white-100 sm:w-[43%] sm:mr-10'>
          <img src={data.logo} alt={`${data.id}_logo`} className='sm:w-[180px] sm:h-[180px] w-[140px] h-[140px]'/>
          <h2 className='text-3xl font-bold my-4 text-orange-100'>{data.name}</h2>
          <p className='font-bold text-xl sm:max-w-[70%] text-center'>{data.short_desc}</p>
          <div className='pt-4 flex w-full justify-center items-center gap-4 mb-2'>
            <p className='px-2 py-1 text-sm bg-slate-800 font-semibold rounded-md flex items-center gap-2'><IconCalendarFilled /> {data.schedule}</p>
            <p className='px-2 py-1 text-sm bg-slate-800 font-semibold rounded-md flex items-center gap-2'><IconUsersGroup /> Max {data.registrations.max_team_size} members</p>
          </div>
        </div>
        <div className='flex flex-col max-sm:gap-3 sm:w-1/2 items-start h-full justify-between'>
        <div className='flex flex-col items-start'>
          <h3 className='font-semibold text-orange-100 text-xl flex items-center gap-2'><IconUserCheck /> Criteria</h3>
          <ul className='list-disc list-inside'>
            {data.criteria.split('#$').map(c => (
              <li key={c.slice(0, 10)} className='pt-2 font-medium'>{c}</li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col items-start gap-2'>
          <h3 className='font-semibold text-orange-100 text-xl flex items-center gap-2'><IconCurrencyDollar /> Fees</h3>
          <ul className='flex sm:gap-8 gap-1'>
            <li className='bg-slate-800 text-green-400 font-semibold px-1 sm:px-2 py-1 rounded-md'>National: {data.registrations.fees.national}</li>
            <li className='bg-slate-800 text-green-400 font-semibold px-1 sm:px-2 py-1 rounded-md'>International: {data.registrations.fees.international}</li>
          </ul>
        </div>
        <h4 className='flex gap-2 text-xl text-yellow-400'><IconTrophy /> {data.prize}</h4>
          <div className='flex max-sm:w-full max-sm:justify-between sm:gap-4 mb-2'>
            <Button children={<><IconUserEdit /> Register</>} />
            <Button children={<><IconDownload /> Rule Book</>} />
          </div>
        </div>
      </div>
      <div>
      </div>
      
      <div className='flex flex-col items-start gap-2'>
        <h3 className='font-semibold text-orange-100 text-xl flex items-center gap-2'><IconFileDescription /> Description</h3>
        <ul className='[&>*:first-child]:list-disc list-inside space-y-2'>
          <li key={data.description[0].slice(0, 19)}>{data.description[0]}</li>
        </ul>
      </div>

     {data.domains && <div className='flex flex-col items-start w-full'>
        <h3 className='font-semibold text-orange-100 text-xl'>Domains</h3>
        <ul className='flex animate-marquee'>
          {
            data.domains?.map(domain => (
              <li className='text-nowrap text-sm mr-2 bg-slate-800 px-2 py-1 rounded-md flex items-end gap-1 uppercase'><IconDiamondsFilled className='text-orange-100'/> {domain}</li>
            ))
          }
        </ul>
      </div>}

      {data.rounds && <div className='flex flex-col items-start w-full gap-2'>
        <h3 className='font-semibold text-orange-100 text-xl'>Rounds</h3>
        <Accordion>
          {
            data.rounds?.map(round => (
            <AccordionItem key={round.name}>
              <AccordionHeader>{round.name}</AccordionHeader>
              <AccordionPanel>
                {round.details}
              </AccordionPanel>
            </AccordionItem>
            ))
          }
        </Accordion>
      </div>}

      <div className='flex flex-col items-start w-full pb-10 gap-2'>
        <h3 className='font-semibold text-orange-100 text-xl flex items-center gap-2'><IconCheckupList /> Rules</h3>
        <ul className='list-inside list-disc'>
          {
            data.rules?.map(rule => (
              <li className=''>{rule}</li>
            ))
          }
        </ul>
      </div>

    </div>
  );
};


const Button = ({children}) => {
  return (
    <button className='bg-gradient-to-br from-dark-blue via-light-blue to-orange-100 p-px hover:scale-105 duration-300'>
      <span className='py-3 px-3 sm:px-6 sm:text-xl bg-primary flex gap-2 h-full'>{children}</span>
    </button>
  )
}