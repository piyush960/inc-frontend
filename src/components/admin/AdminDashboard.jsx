import React from 'react'
import FormButton from '../forms/FormButton'

const AdminDashboard = () => {
  return (
    <section className='w-full max-w-7xl mx-auto flex flex-col gap-8'>
      <div className='font-bold text-3xl'>Total Registrations: 500</div>
      <div className='flex items-center justify-between'>
        <DashboardCard event_name={'Impetus'} total={200} verified={200} pending={200} />
        <DashboardCard event_name={'Concepts'} total={200} verified={200} pending={200} />
        <DashboardCard event_name={'Pradnya'} total={200} verified={200} pending={200} />
      </div>
    </section>
  )
}

export default AdminDashboard

const DashboardCard = ({ event_name, total, pending, verified }) => {
  return (
    <div className='bg-tertiary h-[400px] w-[400px] p-10 flex flex-col items-center gap-4'>
      <h3 className='font-bold text-2xl'>{event_name}</h3>
      <div>
        <p>Total: {total}</p>
        <p>Verified: {pending}</p>
        <p>Pending: {verified}</p>
      </div>
      <FormButton text={`Verify Now`} className={`w-auto h-auto px-4 py-2`} />
    </div>
  )
}