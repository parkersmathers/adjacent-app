import React, { useState } from 'react'
import CreateTargetForm from './components/CreateTargetForm'
import EditTargetForm from './components/EditTargetForm'
import TargetList from './components/TargetList'
import { getData } from './mockData'
import faker from 'faker'
import './App.css'

const App = () => {
  const companiesData = getData()

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

  const [companies, setCompanies] = useState(companiesData)
  const [editing, setEditing] = useState(false)
  const [currentCompany, setCurrentCompany] = useState(initialFormState)

  const createTarget = company => {
    company.companyId = faker.random.uuid()
    setCompanies([...companies, company])
  }

  const deleteTarget = id => {
    setCompanies(companies.filter(company => company.companyId !== id))
  }

  const editTarget = company => {
    setEditing(true)

    setCurrentCompany({
      companyId: company.companyId,
      companyName: company.companyName,
      companyLocation: company.companyLocation,
      companyWebsite: company.companyWebsite,
      contactName: company.contactName,
      contactJobTitle: company.contactJobTitle,
      contactPhone: company.contactPhone,
      contactEmail: company.contactEmail,
      companyMarket: company.companyMarket,
      companySize: company.companySize,
      companyFunding: company.companyFunding
    })
  }

  const updateTarget = (id, updatedCompany) => {
    setEditing(false)

    setCompanies(
      companies.map(company =>
        company.companyId === id ? updatedCompany : company
      )
    )
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>AdjacenT</h1>
        <h4>Track and analyze your potential target companies.</h4>
      </header>
      <main>
        <TargetList
          companies={companies}
          deleteTarget={deleteTarget}
          editTarget={editTarget}
        />
        <>
          {editing ? (
            <EditTargetForm
              editing={editing}
              setEditing={setEditing}
              currentCompany={currentCompany}
              updateTarget={updateTarget}
            />
          ) : (
            <CreateTargetForm createTarget={createTarget} />
          )}
        </>
      </main>
      <div className='App-footer' />
    </div>
  )
}

export default App
