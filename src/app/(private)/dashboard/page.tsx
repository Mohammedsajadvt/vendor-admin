import StatCard from '@/components/Card'
import React from 'react'
import { useTranslation } from 'next-i18next';

function Dashboard() {
    const { t } = useTranslation('common');
  
  return (
    <div>
      <h1 className='text-[25px] font-[700]'>{t('Dashboard')}</h1>
      <div>
        <div className='flex flex-wrap gap-8 mt-8'>
          <StatCard total={250} title={t('Customers')} stats={[
            { label: t('Active'), value: 200 },
            { label: t('Inactive'), value: 50 },
          ]} />
          <StatCard total={68} title={t('Vendors')} stats={[
            { label: t('Active'), value: 200 },
            { label: t('Inactive'), value: 50 },
          ]} />
          <StatCard total={128} title={t('Equipments')} stats={[
            { label:t( 'Active'), value: 128 },
            { label: t('Paused'), value: 2 },
            { label: t('On Rent'), value: 68 },
          ]} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard