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
            {companies.map(company => (
              <li key={company.companyId}>
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
