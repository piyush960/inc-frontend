import React from 'react'



import { useState, lazy, Suspense, useMemo } from 'react';
import { FormsBanner, RadioButtons } from '../../components';
import { useGetJudgeRegistrations} from '../../hooks/admin.hooks';
import { projectDomains } from '../../static/data';

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

    const columns = useMemo(() => [
        {
            name: 'Judge ID',
            selector: row => row['jid'],
            cellExport: row => row['jid'],
            width: '140px',
            wrap: true,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row['name'],
            cellExport: row => row['name'],
            width: '130px',
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row['email'],
            cellExport: row => row['email'],
            width: '140px',
        
        },
        {
            name: 'Contact No',
            selector: row => row['phone'],
            cellExport: row => row['phone'],
            width: '140px',
        
        },
        {
            name: 'Address',
            selector: row => row['address'],
            cellExport: row => row['address'],
            width: '300px',
        },
        {
            name: 'Company',
            selector: row => row['company'],
            cellExport: row => row['company'],
            width: '200px',
        },
        {
            name: 'Experience',
            selector: row => row['experience'],
            cellExport: row => row['experience'],
            width: '80px',
        },
        {
            name: 'Events',
            selector: row => row['events'],
            cell: row => <ol className='list-disc'>{row.events.split(',').map((name, index) => <li key={index}>{name}<span className='hidden'> , </span></li>)}</ol>,
            width: '200px',
        },
        {
            name: 'Domains',
            selector: row => row['domains'],
            cell: row => <ol className='list-disc'>{row.domains.split(',').map((phone, index) => <li key={index}>{phone}<span className='hidden'> , </span></li>)}</ol>,
            width: '180px',
        },
        {
            name: 'Slots',
            selector: row => row['slots'],
            cell: row => <ol className='list-disc'>{row.slots.split(',').map((email, index) => <li key={index}>{email}<span className='hidden'> , </span></li>)}</ol>,
            width: '240px',
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
            width: '160px',
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
                    <Table title={`${event.eventName.charAt(0).toUpperCase()}${event.eventName.slice(1)} Registrations ${new Date().toISOString().split('T')[0]}`} columns={columns} loading={!event.eventName || isLoading} data={data?.data}  keyField='jid' outerClassName='md:mx-20 mb-3 mx-5 mb-10' />
                </Suspense>
            }
        </>
    );
}

export default ViewJudges;