import { useState, lazy, Suspense } from 'react';
import { Buttons, FormsBanner, RadioButtons, toast } from '../../components';
import { usePendingPayments, useVerifyPayment } from '../../hooks/admin.hooks';
import { checkAlphanumeric } from '../../utils/regex';

const Table = lazy(() => import('../../components/table.jsx'));

function VerifyEventRegistration() {
    const [event, setEvent] = useState({ eventName: '' })
    const { isLoading, data } = usePendingPayments(event.eventName)
    const verifyPaymentMutation = useVerifyPayment(event.eventName)

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

    function handleButtonClick(e, { ticket, email }) {
        e.preventDefault()
        verifyPaymentMutation.mutate({ ticket }, {
            onSuccess: () => {
                toast.success(`Verified Payment for ${email}`, { icon: '✅' })
            },
        })
    }

    const columns = [
        {
            name: 'Verify',
            button: true,
            cell: (row) => (
                <Buttons
                    className='scale-75 md:py-2 py-1'
                    onClick={(e) => handleButtonClick(e, row)}
                    value='Verify'
                    loading={verifyPaymentMutation.isLoading}
                />
            ),
        },
        {
            name: 'Email',
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: 'Transaction ID',
            selector: (row) => row.payment_id,
        },
    ]

    const conditionalRowStyles = [{
        when: row => row.payment_id ? (row.payment_id.length < 8 || checkAlphanumeric(row.payment_id)) : true,
        style: {
            backgroundColor: 'rgba(242, 163, 15, 0.2)',
            color: 'red',
        },
    }]

    return (
        <>
            <FormsBanner eventName='Verify Event Registrations' />
            <div className='flex shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border-light_blue items-center p-4 md:px-8 md:pt-6 border border-light_blue md:mx-20 mx-5 my-6'>
                <RadioButtons name='eventName' label='Select Event' options={options} state={event} setState={setEvent} />
            </div>
            {event.eventName &&
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Table columns={columns} loading={!event.eventName || isLoading} conditionalRowStyles={conditionalRowStyles} data={data?.data} keyField='payment_id' outerClassName='md:mx-20 mb-3 mx-5 mb-10' />
                </Suspense>
            }
        </>
    );
}

export default VerifyEventRegistration;
