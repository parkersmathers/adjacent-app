import React from 'react'

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
        <button>Researching</button>
        <button>Pending Approval</button>
        <button>Approved</button>
        <button>Declined</button>
      </div>
    </li>
  )
}

export default TargetListItem
