import { useState, lazy, Suspense, useMemo } from 'react';
import { FormsBanner, RadioButtons } from '../../components';
import { useGetRegistrations } from '../../hooks/admin.hooks';
import { projectDomains } from '../../static/data';

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

    const columns = useMemo(() => [
        {
            name: 'Ticket',
            selector: 'ticket',
            width: '140px',
            wrap: true,
            sortable: true,
        },
        {
            name: 'Team ID',
            selector: 'pid',
            width: '130px',
            sortable: true,
        },
        {
            name: 'Title',
            selector: 'title',
            width: '240px',
            wrap: true,
            omit: event.eventName === 'pradnya',
        },
        {
            name: 'Abstract',
            selector: 'abstract',
            width: '300px',
            omit: event.eventName === 'pradnya',
        },
        {
            name: 'Domain',
            selector: 'pid',
            width: '140px',
            omit: event.eventName === 'pradnya',
            cell: row => projectDomains.find(({ value }) => value === row.pid.split('-')[0]).label,
        },
        {
            name: 'Project Type',
            selector: 'project_type',
            width: '180px',
            omit: event.eventName === 'pradnya',
        },
        {
            name: 'Sponsored',
            selector: 'sponsored',
            width: '120px',
            omit: event.eventName === 'pradnya',
            cell: row => row.sponsored === '1' ? 'Yes' : 'No',
        },
        {
            name: 'Company',
            selector: 'company',
            width: '200px',
            omit: event.eventName === 'pradnya',
        },
        {
            name: 'NDA',
            selector: 'nda',
            width: '80px',
            omit: event.eventName === 'pradnya',
            cell: row => row.nda === '1' ? 'Yes' : 'No',
        },
        {
            name: 'Members Name',
            selector: 'name',
            cell: row => <ol className='list-disc'>{row.name.split(',').map((name, index) => <li key={index}>{name}</li>)}</ol>,
            width: '200px',
        },
        {
            name: 'Members Phone',
            selector: 'phone',
            cell: row => <ol className='list-disc'>{row.phone.split(',').map((phone, index) => <li key={index}>{phone}</li>)}</ol>,
            width: '180px',
        },
        {
            name: 'Members Email',
            selector: 'email',
            cell: row => <ol className='list-disc'>{row.email.split(',').map((email, index) => <li key={index}>{email}</li>)}</ol>,
            width: '240px',
        },
        {
            name: 'College',
            width: '300px',
            selector: 'college',
        },
        {
            name: 'Year',
            width: '90px',
            selector: 'year',
            omit: event.eventName === 'concepts',
            cell: row => {
                switch (row.year) {
                    case 'Se':
                        return 'Senior'

                    case 'Ju':
                        return 'Junior'

                    default:
                        return row.year
                }
            }
        },
        {
            name: 'City',
            width: '130px',
            selector: 'city',
        },
        {
            name: 'District',
            width: '130px',
            selector: 'district',
        },
        {
            name: 'Locality',
            width: '100px',
            selector: 'locality',
            cell: row => row.locality === '1' ? 'Urban' : 'Rural',
        },
        {
            name: 'Guide Name',
            width: '200px',
            selector: 'guide_name',
            omit: event.eventName === 'pradnya',
        },
        {
            name: 'Guide Email',
            width: '240px',
            selector: 'guide_email',
            omit: event.eventName === 'pradnya',
        },
        {
            name: 'Guide Phone',
            width: '150px',
            selector: 'guide_phone',
            omit: event.eventName === 'pradnya',
            cell: row => row.guide_phone === '' ? 'Unavailable' : row.guide_phone,
        },
        {
            name: 'HOD Email',
            width: '240px',
            selector: 'hod_email',
            omit: event.eventName === 'pradnya',
        },
        {
            name: 'Mode',
            selector: 'mode',
            width: '130px',
            cell: row => {
                switch (row.mode) {
                    case '1':
                        return 'Offline'

                    case '0':
                        return 'Online'

                    default:
                        return 'Unavailable'
                }
            },
        },
        {
            name: 'Date',
            width: '160px',
            selector: 'date',
            sortable: true,
        },
    ], [event.eventName])

    const expandableRowsComponent = ({ data: { abstract } }) => <p className='px-6 py-2 text-sm'><strong className='text-lg'>Abstract : </strong><pre className='whitespace-pre-wrap'>{abstract}</pre></p>

    return (
        <>
            <FormsBanner eventName='View Event Registrations' />
            <div className='flex shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border-light_blue items-center p-4 md:px-8 md:pt-6 border border-light_blue md:mx-20 mx-5 my-6'>
                <RadioButtons name='eventName' label='Select Event' options={options} state={event} setState={setEvent} />
            </div>
            {event.eventName &&
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Table title={`Event Registrations ${new Date().toISOString().split('T')[0]}`} columns={columns} loading={!event.eventName || isLoading} data={data?.data} expandableRows expandableRowsComponent={expandableRowsComponent} keyField='pid' outerClassName='md:mx-20 mb-3 mx-5 mb-10' />
                </Suspense>
            }
        </>
    );
}

export default ViewEventRegistrations;