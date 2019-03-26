import React from 'react'
import TargetListItem from './TargetListItem'

const TargetList = ({ companies, deleteTarget }) => {
  return (
    <section>
      <header>
        <h2>Companies</h2>
      </header>
      <ul>
        {companies.map(company => (
          <TargetListItem key={company.companyId} company={company} deleteTarget={deleteTarget} />
        ))}
      </ul>
    </section>
  )
}

export default TargetList
