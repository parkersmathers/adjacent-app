import React, { useState } from "react";
import CreateTargetForm from "./components/CreateTargetForm";
import EditTargetForm from "./components/EditTargetForm";
import Header from "./components/Header";
import ListHeader from "./components/ListHeader";
import List from "./components/List";
import { getData } from "./mockData";
import faker from "faker";
import "./App.css";
import { Flex } from "rebass";

const App = () => {
  const companiesData = getData();

  const initialFormState = {
    companyId: null,
    companyName: "",
    companyLocation: "",
    companyWebsite: "",
    contactName: "",
    contactJobTitle: "",
    contactPhone: "",
    contactEmail: "",
    companyMarket: "",
    companySize: "",
    companyFunding: "",
    companyTrackingStatus: "",
  };

  // Use React State Hooks to manage state

  const [companies, setCompanies] = useState(companiesData);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentCompany, setCurrentCompany] = useState(initialFormState);

  // Create, delete, edit, and update list items

  const createTarget = (company) => {
    setCreating(true);
    company.companyId = faker.random.uuid();

    setCompanies([...companies, company]);
  };

  const deleteTarget = (id) => {
    setCompanies(companies.filter((company) => company.companyId !== id));
  };

  const editTarget = (company) => {
    setEditing(true);

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
      companyTrackingStatus: company.companyTrackingStatus,
    });
  };

  const updateTarget = (id, updatedCompany) => {
    setEditing(false);

    setCompanies(
      companies.map((company) =>
        company.companyId === id ? updatedCompany : company
      )
    );
  };

  return (
    <Flex flexDirection="column">
      <Header />
      <main>
        {creating === false && editing === false && (
          <ListHeader setCreating={setCreating} />
        )}
        {creating === false && editing === false && (
          <List
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
      <div className="App-footer" />
    </Flex>
  );
};

export default App;
