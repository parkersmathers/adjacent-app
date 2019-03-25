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
        if (!company.companyName || !company.contactName) return

        props.createTarget(company)
        setCompany(initialFormState)
      }}
    >
      <section>
        <h2>Company</h2>
        <label>Name*:</label>
        <input
          type='text'
          id='company-name'
          name='company-name'
          placeholder='Company name'
          value={company.companyName}
          onChange={handleInputChange}
        />
        <label htmlFor='company-location'>Location:</label>
        <input
          type='text'
          id='company-location'
          name='company-location'
          placeholder='City'
          value={company.companyLocation}
          onChange={handleInputChange}
        />
        <label htmlFor='company-website'>Website:</label>
        <input
          type='text'
          id='company-website'
          name='company-website'
          placeholder='Company website'
          value={company.companyWebsite}
          onChange={handleInputChange}
        />
      </section>

      <section>
        <h2>Key Contact</h2>
        <label htmlFor='contact-name'>Name*:</label>
        <input
          type='text'
          id='contact-name'
          name='contact-name'
          placeholder='Contact name'
          value={company.contactName}
          onChange={handleInputChange}
        />
        <label htmlFor='contact-jobtitle'>Job Title:</label>
        <input
          type='text'
          id='contact-jobtitle'
          name='contact-jobtitle'
          placeholder='Contact job title'
          value={company.contactJobtitle}
          onChange={handleInputChange}
        />
        <label htmlFor='contact-phone'>Phone:</label>
        <input
          type='tel'
          id='contact-phone'
          name='contact-phone'
          placeholder='Contact phone'
          value={company.contactPhone}
          onChange={handleInputChange}
        />
        <label htmlFor='contact-email'>Email:</label>
        <input
          type='email'
          id='contact-email'
          name='contact-email'
          placeholder='Contact email'
          value={company.contactEmail}
          onChange={handleInputChange}
        />
      </section>

      <section>
        <h2>Financial Performance</h2>
        <label htmlFor='performance-market'>Market:</label>
        <input
          type='text'
          id='performance-market'
          name='performance-market'
          placeholder='Market'
          value={company.companyMarket}
          onChange={handleInputChange}
        />
        <label htmlFor='performance-employees'>Job Title:</label>
        <input
          type='text'
          id='performance-employees'
          name='performance-employees'
          placeholder='Number of employees'
          value={company.companySize}
          onChange={handleInputChange}
        />
        <label htmlFor='performance-funding'>Funding:</label>
        <input
          type='number'
          id='performance-funding'
          name='performance-funding'
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
