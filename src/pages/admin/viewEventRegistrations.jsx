import { useState, lazy, Suspense } from 'react';
import { FormsBanner, RadioButtons } from '../../components';
import { useGetRegistrations } from '../../hooks/admin.hooks';

const Table = lazy(() => import('../../components/table.jsx'));

function ViewEventRegistrations() {
    const [event, setEvent] = useState({ eventName: '' })
    const { isLoading, data } = useGetRegistrations(event.eventName)

    const options = [
        {
            label: 'Concepts',
            value: 'concepts',
        },
        {
            label: 'Impetus',
            value: 'impetus',
        },
        {
            label: 'Pradnya',
            value: 'pradnya',
        },
    ]

    const columns = [
        {
            name: 'Team ID',
            selector: (row) => row.pid,
            sortable: true,
        },
        {
            name: 'College',
            selector: (row) => row.college,
        },
        {
            name: 'Leader Email',
            selector: (row) => row.email,
        },
        {
            name: 'Leader Phone',
            selector: (row) => row.phone,
        },
        {
            name: 'Datetime',
            selector: (row) => row.date,
        },
    ]

    return (
        <>
            <FormsBanner eventName='View Event Registrations' />
            <div className='flex shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border-light_blue items-center p-4 md:px-8 md:pt-6 border border-light_blue md:mx-20 mx-5 my-6'>
                <RadioButtons name='eventName' label='Select Event' options={options} state={event} setState={setEvent} />
            </div>
            {event.eventName &&
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Table title={`Event Registrations ${new Date().toISOString().split('T')[0]}`} columns={columns} loading={!event.eventName || isLoading} data={data?.data} keyField='pid' className='md:mx-20 mb-3 mx-5 mb-10' />
                </Suspense>
            }
        </>
    );
}

export default ViewEventRegistrations;