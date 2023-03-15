import { useState, lazy, Suspense } from 'react';
import { RadioButtons, Table } from '../../components';
import { usePendingPayments } from '../../hooks/admin.hooks';

// const Table = lazy(() => import('../../components/table.jsx'));

function VerifyEventRegistration() {
    const [event, setEvent] = useState('')
    const [errors, setErrors] = useState({ error: '' })
    const { isLoading, isSuccess, data, refetch } = usePendingPayments(setErrors, event)

    const options = [
        {
            label: 'Concepts',
            value: 'concepts',
            onChange: (event) => handleEventChange(event.target.value),
        },
        {
            label: 'Impetus',
            value: 'impetus',
            onChange: (event) => handleEventChange(event.target.value),
        },
        {
            label: 'Pradnya',
            value: 'pradnya',
            onChange: (event) => handleEventChange(event.target.value),
        },
    ]

    const handleEventChange = (event_name) => {
        setEvent(event_name)
        refetch()
    }

    const handleButtonClick = (e, id) => {
        e.preventDefault();
    }

    const columns = [
        {
            name: 'Verify',
            button: true,
            cell: (row) => (
                <button
                    className='btn btn-outline btn-xs'
                    onClick={(e) => { console.log(row); handleButtonClick(e, row.ticket) }}
                >
                    Verify
                </button>
            ),
        },
        {
            name: 'Email',
            selector: (row) => row.email,
            cell: (row) => (
                <>{row}</>
            ),
            sortable: true,
        },
        {
            name: 'Transaction ID',
            selector: (row) => row.payment_id,
            cell: (row) => (
                <>{row}</>
            ),
        },
    ]

    return (
        <>
            <h1 className='text-center text-4xl font-semibold mt-5'>Verify Event Registrations</h1>
            <div className='flex shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border-light_blue items-center p-4 md:px-8 md:pt-6 border border-light_blue md:mx-20 mx-5 my-10'>
                <RadioButtons label='Select Event' options={options} state={event} setState={setEvent} />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                {isSuccess && <Table columns={columns} data={data} title='Pending Events Registrations' />}
            </Suspense>
        </>
    );
}

export default VerifyEventRegistration;