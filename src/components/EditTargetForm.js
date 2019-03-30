import React from 'react'
import PropTypes from 'prop-types'
import useForm from './useForm'
import validate from './FormValidation'
import Form from './StyledForm'

const EditTargetForm = ({ updateTarget, setEditing, currentCompany }) => {
  const { values, errors, handleInputChange, handleSubmitForm } = useForm(
    callback,
    validate,
    currentCompany
  )

  function callback() {
    console.log('Form submitted, no errors')
    console.log(values)
    updateTarget(values.companyId, values)
  }

  return (
    <Form onSubmit={handleSubmitForm}>
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
        {errors.companyName && <p>{errors.companyName}</p>}
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
        {errors.contactPhone && <p>{errors.contactPhone}</p>}
        <label>Email:</label>
        <input
          type='email'
          name='contactEmail'
          placeholder='Contact email'
          value={company.contactEmail}
          onChange={handleInputChange}
        />
        {errors.contactEmail && <p>{errors.contactEmail}</p>}
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
  currentCompany: PropTypes.shape({
    companyId: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    companyLocation: PropTypes.string,
    companyWebsite: PropTypes.string,
    contactName: PropTypes.string,
    contactJobTitle: PropTypes.string,
    contactPhone: PropTypes.string,
    contactEmail: PropTypes.string,
    companyMarket: PropTypes.string,
    companySize: PropTypes.string,
    companyFunding: PropTypes.string,
    companyTrackingStatus: PropTypes.string
  }).isRequired,
  updateTarget: PropTypes.func.isRequired,
  setEditing: PropTypes.func.isRequired
}

export default EditTargetForm
