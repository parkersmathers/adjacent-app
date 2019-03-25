import React from 'react'
import TargetListItem from './TargetListItem'

const TargetList = ({ companies }) => {
  return (
    <section>
      <header>
        <h2>Companies</h2>
      </header>
      <ul>
        {companies.map(company => (
          <TargetListItem key={company.companyId} company={company} />
        ))}
      </ul>
    </section>
  )
}

export default TargetList
