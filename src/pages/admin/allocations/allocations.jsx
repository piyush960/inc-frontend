import { Suspense, lazy, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetJudgeRegistrations, useGetRegistrations } from '../../../hooks/admin.hooks';
import { FormsBanner, RadioButtons } from '../../../components';
import { projectDomains, slots } from '../../../static/data';

const Table = lazy(() => import('../../../components/table.jsx'))

function Allocations() {
  const [method, setMethod] = useState('')
  const { eventName } = useParams()
  const { isLoading: isProjectsLoading, data: projectsData } = useGetRegistrations(eventName)
  const { isLoading: isJudgesLoading, data: judgesData } = useGetJudgeRegistrations(eventName)

  const judgesColumns = useMemo(() => [
    {
      name: 'Judge ID',
      selector: row => {
        let zeros = row['sr_no'] < 10 ? '00' : row['sr_no'] < 100 ? '0' : ''
        return `J-${zeros + row['sr_no']}`
      },
      cellExport: row => {
        let zeros = row['sr_no'] < 10 ? '00' : row['sr_no'] < 100 ? '0' : ''
        return `J-${zeros + row['sr_no']}`
      },
      width: '80px',
      wrap: true,
      sortable: true,
    },
    {
      name: 'Username',
      selector: row => row['jid'],
      cellExport: row => row['jid'],
      width: '120px',
      sortable: true,
    },
    {
      name: 'Name',
      selector: row => row['name'],
      cellExport: row => row['name'],
      width: '220px',
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row['email'],
      cellExport: row => row['email'],
      width: '300px',
    },
    {
      name: 'Contact No',
      selector: row => row['phone'],
      cellExport: row => row['phone'],
      width: '140px',
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
      cell: row => <ol className='list-disc'>{Object.keys(row['domains']).map(index => <li key={index}>{row['domains'][index]}<span className='hidden'> , </span></li>)}</ol>,

      width: '80px',
    },
    {
      name: 'Slots',
      selector: row => row['slots'],
      cell: row => <ol className='list-disc'>{Object.keys(row['slots']).map(index => <li key={index}>{slots[row['slots'][index] - 1].label}<span className='hidden'> , </span></li>)}</ol>,

      width: '350px',
    },
    {
      name: 'Minimum Projects',
      width: '120px',
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
      width: '200px',
      selector: row => row['date'],
      cellExport: row => row['date'],
      sortable: true,
    },
  ], [])

  const projectsColumns = useMemo(() => [
    {
      name: 'Team ID',
      selector: row => row['pid'],
      cellExport: row => row['pid'],
      width: '130px',
      sortable: true,
    },
    {
      name: 'Title',
      selector: row => row['title'],
      cellExport: row => row['title'],
      width: '240px',
      wrap: true,
      omit: eventName === 'pradnya',
    },
    {
      name: 'Abstract',
      selector: row => row['abstract'],
      cellExport: row => row['abstract'],
      width: '300px',
      omit: eventName === 'pradnya',
    },
    {
      name: 'Domain',
      selector: row => row['pid'],
      width: '140px',
      cell: row => projectDomains.find(({ value }) => value === row.pid.split('-')[0])?.label,
      omit: eventName === 'pradnya',
    },
    {
      name: 'Project Type',
      selector: row => row['project_type'],
      cellExport: row => row['project_type'],
      width: '180px',
      omit: eventName === 'pradnya',
    },
    {
      name: 'Sponsored',
      selector: row => row['sponsored'],
      width: '120px',
      omit: eventName === 'pradnya',
      cell: row => row.sponsored === '1' ? 'Yes' : 'No',
    },
    {
      name: 'Company',
      selector: row => row['company'],
      cellExport: row => row['company'],
      width: '200px',
      omit: eventName === 'pradnya',
    },
    {
      name: 'NDA',
      selector: row => row['nda'],
      width: '80px',
      omit: eventName === 'pradnya',
      cell: row => row.nda === '1' ? 'Yes' : 'No',
    },
    {
      name: 'Members Name',
      selector: row => row['name'],
      cell: row => <ol className='list-disc'>{row.name.split(',').map((name, index) => <li key={index}>{name}<span className='hidden'> , </span></li>)}</ol>,
      width: '200px',
    },
    {
      name: 'Members Phone',
      selector: row => row['phone'],
      cell: row => <ol className='list-disc'>{row.phone.split(',').map((phone, index) => <li key={index}>{phone}<span className='hidden'> , </span></li>)}</ol>,
      width: '180px',
    },
    {
      name: 'Members Email',
      selector: row => row['email'],
      cell: row => <ol className='list-disc'>{row.email.split(',').map((email, index) => <li key={index}>{email}<span className='hidden'> , </span></li>)}</ol>,
      width: '240px',
    },
    {
      name: 'College',
      width: '300px',
      selector: row => row['college'],
      cellExport: row => row['college'],
    },
    {
      name: 'Year',
      width: '90px',
      selector: row => row['year'],
      omit: eventName === 'concepts',
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
      selector: row => row['city'],
      cellExport: row => row['city'],
    },
    {
      name: 'Mode',
      selector: row => row['mode'],
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
      selector: row => row['date'],
      cellExport: row => row['date'],
      sortable: true,
    },
  ], [eventName])

  const options = [
    {
      label: 'Judge to Projects',
      value: 'judge_to_projects',
    },
    {
      label: 'Project to Judges',
      value: 'project_to_judges',
    }
  ]

  const leftTableProps = {
    outerTitle: method === 'judge_to_projects' ? 'Judge' : 'Project',
    columns: method === 'judge_to_projects' ? judgesColumns : projectsColumns,
    data: method === 'judge_to_projects' ? judgesData?.data : projectsData?.data,
    loading: !eventName || method === 'judge_to_projects' ? isJudgesLoading : isProjectsLoading,
    keyField: method === 'judge_to_projects' ? 'jid' : 'pid',
  }

  const rightTableProps = {
    outerTitle: method === 'judge_to_projects' ? 'Projects' : 'Judges',
    columns: method === 'judge_to_projects' ? projectsColumns : judgesColumns,
    data: method === 'judge_to_projects' ? projectsData?.data : judgesData?.data,
    loading: !eventName || method === 'judge_to_projects' ? isProjectsLoading : isJudgesLoading,
    keyField: method === 'judge_to_projects' ? 'pid' : 'jid',
  }

  return (
    <>
      <FormsBanner eventName='Allocations' eventDescription={`Allocate ${method === 'judge_to_projects' ? 'Judge to Projects' : 'Projects to Judge'}`} />
      <div className='flex shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border-light_blue items-center p-4 md:px-8 md:pt-6 border border-light_blue md:mx-20 mx-5 my-6'>
        <RadioButtons name='method' label='Select Method' options={options} state={{ method }} setState={setMethod} />
      </div>
      {eventName && method && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <div className='flex justify-center items-center w-full flex-col md:flex-row mb-6'>
            <div className='flex flex-col justify-center md:w-[40%] w-full relative'>
              <h1 className='text-3xl font-bold text-gold text-center'>{leftTableProps.outerTitle}</h1>
              <Suspense fallback={<div>Loading...</div>}>
                <Table {...leftTableProps} outerClassName='w-full' />
              </Suspense>
            </div>
            <div className='flex flex-col items-center justify-center w-full md:w-[10%] md:p-0 py-3'>
              <h1 className='text-3xl font-bold text-gold text-center'>To</h1>
              <div className='h-full items-center justify-center'><i className='block scale-[200%] p-3 opacity-0 md:opacity-100'>➡️</i><i className='block scale-[200%] p-3 opacity-100 md:opacity-0 -mt-3'>⬇️</i></div>
            </div>
            <div className='flex flex-col justify-center md:w-[40%] w-full relative'>
              <h1 className='text-3xl font-bold text-gold text-center'>{rightTableProps.outerTitle}</h1>
              <Suspense fallback={<div>Loading...</div>}>
                <Table {...rightTableProps} outerClassName='w-full' />
              </Suspense>
            </div>
          </div>
        </Suspense>
      )}
    </>
  )
}

export default Allocations;