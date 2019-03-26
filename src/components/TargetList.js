import React from 'react'
import PropTypes from 'prop-types'
import TargetListItem from './TargetListItem'

const TargetList = ({ companies, deleteTarget, editTarget }) => {
  return (
    <section>
      <header>
        <h2>Companies</h2>
      </header>
      <ul>
        {companies.map(company => (
          <TargetListItem
            key={company.companyId}
            company={company}
            deleteTarget={deleteTarget}
            editTarget={editTarget}
          />
        ))}
      </ul>
    </section>
  )
}

TargetList.propTypes = {
  companies: PropTypes.array.isRequired,
  deleTarget: PropTypes.func.isRequired,
  editTarget: PropTypes.func.isRequired
}

export default TargetList
