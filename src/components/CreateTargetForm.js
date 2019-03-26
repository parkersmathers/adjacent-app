import React, { useState } from 'react'
import './TargetForm.css'

const CreateTargetForm = props => {
  const initialFormState = {
    companyId: null,
    companyName: '',
    companyLocation: '',
    companyWebsite: '',
    contactName: '',
    contactJobTitle: '',
    contactPhone: '',
    contactEmail: '',
    companyMarket: '',
    companySize: '',
    companyFunding: ''
  }

  const [company, setCompany] = useState(initialFormState)
  // const [status, setStatus] = useState(false)

  const handleInputChange = event => {
    console.log(event)
    const { name, value } = event.target

    setCompany({ ...company, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!company.companyName) return

        props.createTarget(company)
        setCompany(initialFormState)
        props.setCreating(false)
      }}>
      <section>
        <h2>Create Company</h2>
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
        <label>Employees:</label>
        <input
          type='text'
          name='companySize'
          placeholder='Number of employees'
          value={company.companySize}
          onChange={handleInputChange}
        />
        <label>Funding:</label>
        <input
          type='string'
          name='companyFunding'
          placeholder='Total funding'
          value={company.companyFunding}
          onChange={handleInputChange}
        />
      </section>

      {/**** FIXME: onChange handlers for radio buttons ****/}
      <section>
        <h2>Status</h2>
        <p>
          <input
            type='radio'
            name='status'
            value='researching'
            onChange={handleInputChange}
            checked={company.companyTrackingStatus === 'researching'}
          />
          <label>Researching</label>
        </p>
        <p>
          <input
            type='radio'
            name='status'
            value='pending approval'
            onChange={handleInputChange}
            checked={company.companyTrackingStatus === 'pending approval'}
          />
          <label>Pending Approval</label>
        </p>
        <p>
          <input
            type='radio'
            name='status'
            value='approved'
            onChange={handleInputChange}
            checked={company.companyTrackingStatus === 'approved'}
          />
          <label>Approved</label>
        </p>
        <p>
          <input
            type='radio'
            name='status'
            value='declined'
            onChange={handleInputChange}
            checked={company.companyTrackingStatus === 'declined'}
          />
          <label>Declined</label>
        </p>
      </section>

      <button type='submit'>Track</button>
      <button onClick={() => props.setCreating(false)}>Cancel</button>
    </form>
  )
}

export default CreateTargetForm
