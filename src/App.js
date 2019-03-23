import React from 'react'
import { createData } from './mockData'
import './App.css'

const App = () => {
  const companyData = createData(10)

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
            {companyData.map((c, i) => (
              <li key={i}>
                {/* <div>
                  <p>{}</p>
                </div> */}
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
              </li>
            ))}
          </ul>
        </section>
      </main>
      <div className='App-footer' />
    </div>
  )
}

export default App
