import React, { useState } from 'react'
import TargetForm from './components/TargetForm'
import TargetList from './components/TargetList'
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

  const deleteTarget = id => {
    setCompanies(companies.filter(company => company.companyId !== id))
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>AdjacenT</h1>
        <h4>Track and analyze your potential target companies.</h4>
      </header>
      <main>
        <TargetList companies={companies} deleteTarget={deleteTarget} />
        <TargetForm createTarget={createTarget} />
      </main>
      <div className='App-footer' />
    </div>
  )
}

export default App
