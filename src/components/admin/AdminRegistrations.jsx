import { useEffect, useState } from 'react'
import FormButton from '../forms/FormButton'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectDetailsModal from './modals/ProjectDetailsModal';
import TeamDetailsModal from './modals/TeamDetailsModal';
import CollegeDetailsModal from './modals/CollegeDetailsModal';
import { useLazyGetVerifiedRegistrationsQuery } from '../../app/services/adminAPI';
import { toast } from 'react-toastify';


const AdminRegistrations = () => {
  const { event_name } = useParams();
  const [activeEvent, setActiveEvent] = useState('impetus');
  const [ rows, setRows ] = useState([]);
  const [ getVerifiedRegistrations, { isFetching, isSuccess, data, } ] = useLazyGetVerifiedRegistrationsQuery();
  const navigate = useNavigate();

  const fetchEventVerifications = async () => {
    try {
      await getVerifiedRegistrations(event_name);
    } catch (error) {
      console.error(error);
      toast.error(error?.data?.message || error?.message || 'Failed to fetch.');
    }
  }

  useEffect(() => {
    if(isSuccess){
      setRows([...data]);
    }
  }, [isSuccess, data])
  
  useEffect(() => {
    if(event_name === 'impetus' || event_name === 'concepts' || event_name === 'pradnya'){
      setActiveEvent(event_name);
      fetchEventVerifications();
    }
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
        <DataGrid rows={rows} columns={columns} loading={isFetching} slots={{ toolbar: GridToolbar, noRowsOverlay: CustomNoResultsOverlay }} initialState={{pagination: { paginationModel: { pageSize: 25 }}}} disableRowSelectionOnClick />
      </div>
    </section>
  )
}

export default AdminRegistrations

const columns = [
  { field: 'pid', headerName: 'PID', minWidth: 150, flex: 1 },
  { 
    field: 'paymentId', 
    headerName: 'Payment ID', 
    minWidth: 150, 
    flex: 1 
  },
  { 
    field: 'judges_count', 
    headerName: 'Judges Count', 
    minWidth: 150, 
    flex: 1 
  },
  { 
    field: 'evaluations', 
    headerName: 'Evaluations', 
    minWidth: 150, 
    flex: 1 
  },
  { 
    field: 'projectDetails', 
    headerName: 'Project Details', 
    minWidth: 150, 
    flex: 1,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <ProjectDetailsModal data={params?.row?.projectDetails} />
    ),
    valueGetter: (params) => {
      return `${JSON.stringify(params)}`;
    },
  },
  { 
    field: 'teamDetails', 
    headerName: 'Team Details', 
    minWidth: 150, 
    flex: 1,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <TeamDetailsModal data={params?.row?.teamDetails} />
    ),
    valueGetter: (params) => {
      return `${JSON.stringify(params)}`;
    },
  },
  { 
    field: 'collegeDetails', 
    headerName: 'College Details', 
    minWidth: 150, 
    flex: 1,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <CollegeDetailsModal data={params?.row?.collegeDetails} />
    ),
    valueGetter: (params) => {
      return `${JSON.stringify(params)}`;
    },
  },
];

const CustomNoResultsOverlay = () => {
  return <p className='h-full flex justify-center items-center text-secondary'>No rows or Click on another Event to load data.</p>
}
