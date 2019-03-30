import React from 'react'
import PropTypes from 'prop-types'
import useForm from './useForm'
import validate from './FormValidation'
import StyledForm from './StyledForm'

const Form = props => {
  const currentCompany = props.currentCompany || {}
  const { values, errors, handleInputChange, handleSubmitForm } = useForm(
    callback,
    validate,
    currentCompany
  )

  function callback() {
    console.log('Form submitted, no errors')
    console.log(values)
    if (props.setCreating) {
      props.createTarget(values)
      props.setCreating(false)
    } else if (props.setEditing) {
      props.updateTarget(values.companyId, values)
    } else {
      console.log('Oops. No props for creating or editing')
    }
  }

  return (
    <StyledForm onSubmit={handleSubmitForm}>
      <section>
        <h2>Create Company</h2>
        <label>Name*:</label>
        <input
          type='text'
          name='companyName'
          placeholder='Company name'
          value={values.companyName || ''}
          onChange={handleInputChange}
          required
        />
        {errors.companyName && <p>{errors.companyName}</p>}
        <label>Location:</label>
        <input
          type='text'
          name='companyLocation'
          placeholder='City'
          value={values.companyLocation || ''}
          onChange={handleInputChange}
        />
        <label>Website:</label>
        <input
          type='text'
          name='companyWebsite'
          placeholder='Company website'
          value={values.companyWebsite || ''}
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
          value={values.contactName || ''}
          onChange={handleInputChange}
        />
        <label>Job Title:</label>
        <input
          type='text'
          name='contactJobTitle'
          placeholder='Contact job title'
          value={values.contactJobTitle || ''}
          onChange={handleInputChange}
        />
        <label>Phone:</label>
        <input
          type='tel'
          name='contactPhone'
          placeholder='Contact phone'
          value={values.contactPhone || ''}
          onChange={handleInputChange}
        />
        {errors.contactPhone && <p>{errors.contactPhone}</p>}
        <label>Email:</label>
        <input
          type='email'
          name='contactEmail'
          placeholder='Contact email'
          value={values.contactEmail || ''}
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
          value={values.companyMarket || ''}
          onChange={handleInputChange}
        />
        <label>Employees:</label>
        <input
          type='text'
          name='companySize'
          placeholder='Number of employees'
          value={values.companySize || ''}
          onChange={handleInputChange}
        />
        <label>Funding:</label>
        <input
          type='text'
          name='companyFunding'
          placeholder='Total funding'
          value={values.companyFunding || ''}
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
            checked={values.companyTrackingStatus === 'researching'}
          />
          <label>Researching</label>
        </p>
        <p>
          <input
            type='radio'
            name='companyTrackingStatus'
            value='pending approval'
            onChange={handleInputChange}
            checked={values.companyTrackingStatus === 'pending approval'}
          />
          <label>Pending Approval</label>
        </p>
        <p>
          <input
            type='radio'
            name='companyTrackingStatus'
            value='approved'
            onChange={handleInputChange}
            checked={values.companyTrackingStatus === 'approved'}
          />
          <label>Approved</label>
        </p>
        <p>
          <input
            type='radio'
            name='companyTrackingStatus'
            value='declined'
            onChange={handleInputChange}
            checked={values.companyTrackingStatus === 'declined'}
          />
          <label>Declined</label>
        </p>
      </section>

      {/* Buttons */}
      {props.setCreating && (
        <>
          <button type='submit'>Track</button>
          <button onClick={() => props.setCreating(false)}>Cancel</button>
        </>
      )} :
      {props.setEditing && (
        <>
          <button type='submit'>Save</button>
          <button onClick={() => props.setEditing(false)}>Cancel</button>
        </>
      )}
    </StyledForm>
  )
}

Form.propTypes = {
  createTarget: PropTypes.func.isRequired,
  setCreating: PropTypes.func.isRequired
}

export default Form