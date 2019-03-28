import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from './StyledForm'

const EditTargetForm = ({currentCompany, updateTarget, setEditing}) => {
  const [company, setCompany] = useState(currentCompany)

  const handleInputChange = event => {
    const { name, value } = event.target

    setCompany({...company, [name]: value})
  }

  return (
    <Form
      onSubmit={event => {
        event.preventDefault()
        updateTarget(company.companyId, company)
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
          name='companySize'
          placeholder='Number of employees'
          value={company.companySize}
          onChange={handleInputChange}
        />
        <label>Funding:</label>
        <input
          type='text'
          name='companyFunding'
          placeholder='Total funding'
          value={company.companyFunding}
          onChange={handleInputChange}
        />
      </section>

      <section>
        <h2>Status</h2>
        <p>
          <input
            type='radio'
            name='companyTrackingStatus'
            value='researching'
            onChange={handleInputChange}
            checked={company.companyTrackingStatus === 'researching'}
          />
          <label>Researching</label>
        </p>
        <p>
          <input
            type='radio'
            name='companyTrackingStatus'
            value='pending approval'
            onChange={handleInputChange}
            checked={company.companyTrackingStatus === 'pending approval'}
          />
          <label>Pending Approval</label>
        </p>
        <p>
          <input
            type='radio'
            name='companyTrackingStatus'
            value='approved'
            onChange={handleInputChange}
            checked={company.companyTrackingStatus === 'approved'}
          />
          <label>Approved</label>
        </p>
        <p>
          <input
            type='radio'
            name='companyTrackingStatus'
            value='declined'
            onChange={handleInputChange}
            checked={company.companyTrackingStatus === 'declined'}
          />
          <label>Declined</label>
        </p>
      </section>

      <button type='submit'>Save</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </Form>
  )
}

EditTargetForm.propTypes = {
  currentCompany: PropTypes.string.isRequired,
  updateTarget: PropTypes.func.isRequired,
  setEditing: PropTypes.func.isRequired
}

export default EditTargetForm
