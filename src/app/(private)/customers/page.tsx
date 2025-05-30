import React from 'react'
import { useTranslation } from 'next-i18next';
export default  function Customers() {
  const { t } = useTranslation('common');
  return (
    <div>
      <h1 className='text-[25px] font-[700]'>{t('Customers')}</h1>
    </div>
  )
}

