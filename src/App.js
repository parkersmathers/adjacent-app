import React, { useState } from 'react'
import CreateTargetForm from './components/CreateTargetForm'
import EditTargetForm from './components/EditTargetForm'
import Header from './components/Header'
import TargetList from './components/TargetList'
import { getData } from './mockData'
import faker from 'faker'
import './App.css'
import { Button } from 'rebass'

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
    companyFunding: '',
    companyTrackingStatus: ''
  }

  const [companies, setCompanies] = useState(companiesData)
  const [creating, setCreating] = useState(false)
  const [editing, setEditing] = useState(false)
  const [currentCompany, setCurrentCompany] = useState(initialFormState)

  const createTarget = company => {
    setCreating(true)
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
      companyFunding: company.companyFunding,
      companyTrackingStatus: company.companyTrackingStatus
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
      <Header />
      <main>
        {creating === false && editing === false && (
          <Button
            onClick={() => setCreating(true)}
            p={5}
            fontWeight={1}
            bg='white'
            border='3px solid rgba(46, 139, 87, 0.2)'
            color='seagreen'
            fontSize={[3, 4]}>
            New
          </Button>
        )}
        {creating === false && editing === false && (
          <TargetList
            companies={companies}
            deleteTarget={deleteTarget}
            editTarget={editTarget}
          />
        )}
        <>
          {editing && (
            <EditTargetForm
              editing={editing}
              setEditing={setEditing}
              currentCompany={currentCompany}
              updateTarget={updateTarget}
            />
          )}
          {creating && (
            <CreateTargetForm
              createTarget={createTarget}
              creating={creating}
              setCreating={setCreating}
            />
          )}
        </>
      </main>
      <div className='App-footer' />
    </div>
  )
}

export default App
