import React, { useState } from 'react'
import './TargetForm.css'

const EditTargetForm = props => {
  const [company, setCompany] = useState(props.currentCompany)

  const handleInputChange = event => {
    const { name, value } = event.target

    setCompany({...company, [name]: value})
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateTarget(company.companyId, company)
      }}
    >
      <section>
        <h2>Edit Company</h2>
        <label>Name*:</label>
        <input
          type='text'
          name='companyName'
          placeholder='Company name'
          value={company.companyName}
          onChange={handleInputChange}
          required
        />
        <label>Location:</label>
        <input
          type='text'
          name='companyLocation'
          placeholder='City'
          value={company.companyLocation}
          onChange={handleInputChange}
        />
        <label>Website:</label>
        <input
          type='text'
          name='companyWebsite'
          placeholder='Company website'
          value={company.companyWebsite}
          onChange={handleInputChange}
        />
      </section>

      <section>
        <h2>Key Contact</h2>
        <label>Name:</label>
        <input
          type='text'
          name='contactName'
          placeholder='Contact name'
          value={company.contactName}
          onChange={handleInputChange}
        />
        <label>Job Title:</label>
        <input
          type='text'
          name='contactJobtitle'
          placeholder='Contact job title'
          value={company.contactJobTitle}
          onChange={handleInputChange}
        />
        <label>Phone:</label>
        <input
          type='tel'
          name='contactPhone'
          placeholder='Contact phone'
          value={company.contactPhone}
          onChange={handleInputChange}
        />
        <label>Email:</label>
        <input
          type='email'
          name='contactEmail'
          placeholder='Contact email'
          value={company.contactEmail}
          onChange={handleInputChange}
        />
      </section>

      <section>
        <h2>Financial Performance</h2>
        <label>Market:</label>
        <input
          type='text'
          name='companyMarket'
          placeholder='Market'
          value={company.companyMarket}
          onChange={handleInputChange}
        />
        <label>Job Title:</label>
        <input
          type='text'
          name='companyEmployees'
          placeholder='Number of employees'
          value={company.companySize}
          onChange={handleInputChange}
        />
        <label>Funding:</label>
        <input
          type='number'
          name='companyFunding'
          placeholder='Total funding'
          value={company.companyFunding}
          onChange={handleInputChange}
        />
      </section>

      <button type='submit'>Update</button>
      <button onClick={() => props.setEditing(false)}>Cancel</button>
    </form>
  )
}

export default EditTargetForm
