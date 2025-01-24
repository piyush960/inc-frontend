import React, { useEffect, useState } from 'react'
import FormButton from '../forms/FormButton'
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate, useParams } from 'react-router-dom';

const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];


const AdminRegistrations = () => {
  const { event_name } = useParams();
  const [activeEvent, setActiveEvent] = useState('impetus');
  const navigate = useNavigate();

  useEffect(() => {
    if(event_name === 'impetus' || event_name === 'concepts' || event_name === 'pradnya'){
      setActiveEvent(event_name)
    }
    else setActiveEvent('impetus')
  }, [ event_name ])

  return (
    <section className='w-full max-w-7xl mx-auto flex flex-col gap-12'>
      <div className='flex items-center justify-center gap-4'>
        <FormButton className={`w-auto h-auto px-4 py-2`} text={`Impetus`} onClick={() => {navigate('/admin/registrations/impetus')}}/>
        <FormButton className={`w-auto h-auto px-4 py-2`} text={`Concepts`} onClick={() => {navigate('/admin/registrations/concepts')}}/>
        <FormButton className={`w-auto h-auto px-4 py-2`} text={`Pradnya`} onClick={() => {navigate('/admin/registrations/pradnya')}}/>
      </div>
      <h2 className='font-bold text-3xl'>{activeEvent[0].toUpperCase() + activeEvent.slice(1)} Registrations.</h2>
      <div>
        <DataGrid  rows={rows} columns={columns} />
      </div>
    </section>
  )
}

export default AdminRegistrations