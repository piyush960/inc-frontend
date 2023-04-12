import React from 'react'



import { useState, lazy, Suspense, useMemo } from 'react';
import { FormsBanner, RadioButtons } from '../../components';
import { useGetJudgeRegistrations} from '../../hooks/admin.hooks';
import { projectDomains ,slots } from '../../static/data';

const Table = lazy(() => import('../../components/table.jsx'));

function ViewJudges() {
    const [event, setEvent] = useState({ eventName: '' })
    const { isLoading, data } = useGetJudgeRegistrations(event.eventName)

    const options = [
        {
            label: 'Concepts',
            value: 'concepts',
        },
        {
            label: 'Impetus',
            value: 'impetus',
        },
        
    ]
    // !isLoading && console.log(Object.keys(data?.data[2]?.events).map(index => data?.data[2]?.events[index]))
    const columns = useMemo(() => [
        {
            name: 'Judge ID',
            selector: row => row['jid'],
            cellExport: row => row['jid'],
            width: '160px',
            wrap: true,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row['name'],
            cellExport: row => row['name'],
            width: '160px',
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row['email'],
            cellExport: row => row['email'],
            width: '240px',
        
        },
        {
            name: 'Contact No',
            selector: row => row['phone'],
            cellExport: row => row['phone'],
            width: '200px',
        
        },
        {
            name: 'Company',
            selector: row => row['company'],
            cellExport: row => row['company'],
            width: '200px',
        },
        {
            name: 'Address',
            selector: row => row['address'],
            cellExport: row => row['address'],
            width: '300px',
        },
        
        {
            name: 'Experience',
            selector: row => row['exp'],
            cellExport: row => row['exp'],
            width: '100px',
        },
        {
            name: 'Events',
            selector: row => row['events'],
            cell: row => <ol className='list-disc'>{Object.keys(row['events']).map(index => <li key={index}>{row['events'][index]}<span className='hidden'> , </span></li>)}</ol>,
            width: '120px',
            
        },
        {
            name: 'Domains',
            selector: row => row['domains'],
            cell: row =>  <ol className='list-disc'>{Object.keys(row['domains']).map(index => <li key={index}>{row['domains'][index]}<span className='hidden'> , </span></li>)}</ol>,

            width: '80px',
        },
        {
            name: 'Slots',
            selector: row => row['slots'],
            cell: row =>  <ol className='list-disc'>{Object.keys(row['slots']).map(index => <li key={index}>{slots[row['slots'][index] - 1 ].label}<span className='hidden'> , </span></li>)}</ol>,

            width: '350px',
        },
        {
            name: 'Mininmum Projects',
            width: '180px',
            selector: row => row['min_projects'],
            cellExport: row => row['min_projects'],
        },
        {
            name: 'Pict Alumni',
            selector: row => row['isPICT'],
            cellExport: row => row['min_projects'],
            width: '80px',  
            cell: row => row.isPICT === '1' ? 'Yes' : 'No',
        },

        {
            name: 'Date',
            width: '300px',
            selector: row => row['date'],
            cellExport: row => row['date'],
            sortable: true,
        },
    ], [event.eventName])

    const expandableRowsComponent = ({ data: { abstract } }) => <p className='px-6 py-2 text-sm'><strong className='text-lg'>Abstract : </strong><pre className='whitespace-pre-wrap'>{abstract}</pre></p>

    return (
        <>
        
            <FormsBanner eventName='View Judge Registrations' />
            <div className='flex shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border-light_blue items-center p-4 md:px-8 md:pt-6 border border-light_blue md:mx-20 mx-5 my-6'>
                <RadioButtons name='eventName' label='Select Event' options={options} state={event} setState={setEvent} />
            </div>
            {event.eventName &&
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Table title={`${event.eventName.charAt(0).toUpperCase()}${event.eventName.slice(1)} Judges Registrations ${new Date().toISOString().split('T')[0]}`} columns={columns} loading={!event.eventName || isLoading} data={data?.data}  keyField='jid' outerClassName='md:mx-20 mb-3 mx-5 mb-10' />
                </Suspense>
            }
        </>
    );
}

export default ViewJudges;