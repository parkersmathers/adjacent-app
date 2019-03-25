import React, { useState } from 'react'
import CreateTargetForm from './CreateTargetForm'
import { getData } from './mockData'
import faker from 'faker'
import './App.css'

const App = () => {
  const companiesData = getData()

  const [companies, setCompanies] = useState(companiesData)

  const createTarget = company => {
    company.companyId = faker.random.uuid()
    setCompanies([...companies, company])
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>AdjacenT</h1>
        <h4>Track and analyze your potential target companies.</h4>
      </header>
      <main>
        <section>
          <header>
            <h2>Companies</h2>
          </header>
          <ul>
            {companies.map(c => (
              <li key={c.companyId}>
                <div>
                  <p>{c.companyCard.company.name}</p>
                  <p>{c.companyCard.address.city}</p>
                  <p>{c.companyCard.website}</p>
                </div>
                <div>
                  <p>{c.contactName}</p>
                  <p>{c.contactJobTitle}</p>
                  <p>{c.contactPhone}</p>
                  <p>{c.contactEmail}</p>
                </div>
                <div>
                  <p>Market: {c.companyMarket}</p>
                  <p>Employees: {c.companySize}</p>
                  <p>Funding: ${c.companyFunding}</p>
                </div>
                <div>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
                <div>
                  <button>Researching</button>
                  <button>Pending Approval</button>
                  <button>Approved</button>
                  <button>Declined</button>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <CreateTargetForm createTarget={createTarget} />
      </main>
      <div className='App-footer' />
    </div>
  )
}

export default App
