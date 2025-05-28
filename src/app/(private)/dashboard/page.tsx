import StatCard from '@/components/Card'
import React from 'react'

function Dashboard() {
  return (
    <div>
      <h1 className='text-[25px] font-[700]'>Dashboard</h1>
      <div>
        <div className='flex flex-wrap gap-8 mt-8'>
          <StatCard total={250} title='Customers' stats={[
            { label: 'Active', value: 200 },
            { label: 'Inactive', value: 50 },
          ]} />
          <StatCard total={68} title='Vendors' stats={[
            { label: 'Active', value: 200 },
            { label: 'Inactive', value: 50 },
          ]} />
          <StatCard total={128} title='Equipments' stats={[
            { label: 'Active', value: 128 },
            { label: 'Paused', value: 2 },
            { label: 'On Rent', value: 68 },
          ]} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard