import React from 'react'
import PropTypes from 'prop-types'

const TargetListItem = ({ company, deleteTarget, editTarget }) => {
  return (
    <li>
      <div>
        <p>{company.companyName}</p>
        <p>{company.companyLocation}</p>
        <p>{company.companyWebsite}</p>
      </div>
      <div>
        <p>{company.contactName}</p>
        <p>{company.contactJobTitle}</p>
        <p>{company.contactPhone}</p>
        <p>{company.contactEmail}</p>
      </div>
      <div>
        <p>Market: {company.companyMarket}</p>
        <p>Employees: {company.companySize}</p>
        <p>Funding: ${company.companyFunding}</p>
      </div>
      <div>
        <button onClick={() => editTarget(company)}>Edit</button>
        <button onClick={() => deleteTarget(company.companyId)}>Delete</button>
      </div>
      <div>
        <p>Status: {company.companyTrackingStatus}</p>
      </div>
    </li>
  )
}

TargetListItem.propTypes = {
  company: PropTypes.array.isRequired, 
  deleteTarget: PropTypes.func.isRequired, 
  editTarget: PropTypes.func.isRequired
}

export default TargetListItem
