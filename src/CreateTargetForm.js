import React, { useState } from 'react'
import './CreateTargetForm.css'

const CreateTargetForm = props => {
  const initialFormState = {
    companyId: null,
    companyName: '',
    companyLocation: '',
    companyWebsite: '',
    contactName: '',
    contactJobtitle: '',
    contactPhone: '',
    contactEmail: '',
    companyMarket: '',
    companySize: '',
    companyFunding: ''
  }

  const [company, setCompany] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setCompany({...company, [name]: value})
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!company.companyName) return

        props.createTarget(company)
        setCompany(initialFormState)
      }}
    >
      <section>
        <h2>Company</h2>
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
        <label>Name*:</label>
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
          value={company.contactJobtitle}
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

      <button type='submit'>Track</button>
    </form>
  )
}

export default CreateTargetForm
