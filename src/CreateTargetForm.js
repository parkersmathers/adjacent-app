import React, { useState } from 'react'
import './CreateTargetForm.css'

const CreateTargetForm = () => {
  return (
    <form id='form'>
      <section>
        <h2>Company</h2>
        <label for='company-name'>Name:</label>
        <input
          type='text'
          id='company-name'
          name='company-name'
          placeholder='Company name'
        />
        <label for='company-location'>Location:</label>
        <input
          type='text'
          id='company-location'
          name='company-location'
          placeholder='City'
        />
        <label for='company-website'>Website:</label>
        <input
          type='text'
          id='company-website'
          name='company-website'
          placeholder='Company website'
        />
      </section>

      <section>
        <h2>Key Contact</h2>
        <label for='contact-name'>Name:</label>
        <input
          type='text'
          id='contact-name'
          name='contact-name'
          placeholder='Contact name'
        />
        <label for='contact-jobtitle'>Job Title:</label>
        <input
          type='text'
          id='contact-jobtitle'
          name='contact-jobtitle'
          placeholder='Contact job title'
        />
        <label for='contact-phone'>Phone:</label>
        <input
          type='tel'
          id='contact-phone'
          name='contact-phone'
          placeholder='Contact phone'
        />
        <label for='contact-email'>Email:</label>
        <input
          type='email'
          id='contact-email'
          name='contact-email'
          placeholder='Contact email'
        />
      </section>

      <section>
        <h2>Financial Performance</h2>
        <label for='performance-market'>Market:</label>
        <input
          type='text'
          id='performance-market'
          name='performance-market'
          placeholder='Market'
        />
        <label for='performance-employees'>Job Title:</label>
        <input
          type='text'
          id='performance-employees'
          name='performance-employees'
          placeholder='Number of employees'
        />
        <label for='performance-funding'>Funding:</label>
        <input
          type='number'
          id='performance-funding'
          name='performance-funding'
          placeholder='Total funding'
        />
      </section>

      <button type='submit'>Track</button>
    </form>
  )
}

export default CreateTargetForm
