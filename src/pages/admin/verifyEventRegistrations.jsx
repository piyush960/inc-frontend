import { useState, lazy, Suspense } from 'react';
import { RadioButtons } from '../../components';

const Table = lazy(() => import('../../components/table.jsx'));

function VerifyEventRegistration() {
    const [event, setEvent] = useState('')

    const options = [
        {
            name: 'Concepts',
            value: 'concepts',
            onChange: (event) => handleEventChange(event.target.value),
        },
        {
            name: 'Impetus',
            value: 'impetus',
            onChange: (event) => handleEventChange(event.target.value),
        },
        {
            name: 'Pradnya',
            value: 'pradnya',
            onChange: (event) => handleEventChange(event.target.value),
        },
    ]

    const handleEventChange = (event_name) => {
        console.log(event_name)
    }

    const handleButtonClick = (e, id) => {
        e.preventDefault();
    }

    const columns = [
        {
            name: 'Actions',
            button: true,
            input: true,
            cell: (row) => (
                <div>

                    <button
                        className='btn btn-outline btn-xs'
                        onClick={(e) => { console.log(row); handleButtonClick(e, row.id) }}
                    >
                        Update
                    </button>
                    {/* <input
                      type='text'
                      style={{
                        width: '100%',
                        border: 'none',
                        fontSize: '1rem',
                        padding: 0,
                        margin: 0,
                      }}
                      value={value}
                      onChange={(event) => setValue(event.target.value)}
                    /> */}
                </div>
            ),
        },
        {
            name: 'Country Name',
            selector: (row) => row.name,
            cell: (row) => (
                <>{row}</>
            ),
            sortable: true,
        },
        {
            name: 'Country Capital',
            selector: (row) => row.capital,
            cell: (row) => (
                <div>
                    <input
                        type='text'
                        style={{
                            width: '100%',
                            border: 'none',
                            fontSize: '1rem',
                            padding: 0,
                            margin: 0,
                        }}
                        value={row.capital}
                        // onChange={(event) => handleChange(event, row.id, 'capital')}
                    />
                </div>
            ),
        },
        {
            name: 'Country Native Name',
            selector: (row) => row.nativeName,
            cell: (row) => (
                <div>
                    <input
                        type='text'
                        style={{
                            width: '100%',
                            border: 'none',
                            fontSize: '1rem',
                            padding: 0,
                            margin: 0,
                        }}
                        value={row.nativeName}
                        // onChange={(event) => handleChange(event, row.id, 'nativeName')}
                    />
                </div>
            ),
        },
        {
            name: 'Country Flag',
            selector: (row) => (
                <img src={row.flag} alt='' className='w-16 h-16 object-cover' />
            ),
        },
    ];

    return (
        <>
            <h1 className='text-2xl font-semibold mt-5'>Verify Event Registrations</h1>
            <div className='w-full flex shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border-light_blue items-center p-4 md:p-8 border border-light_blue md:mx-20 mx-5 mt-10'>
                <RadioButtons label='Select Event' options={options} state={event} setState={setEvent} />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Table columns={columns} data={[]} title='Pending Events Registrations' />
            </Suspense>
        </>
    );
}

export default VerifyEventRegistration;