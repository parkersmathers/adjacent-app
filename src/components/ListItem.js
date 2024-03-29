import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Flex, Box, Text } from "rebass";

const Cell = (props) => <Box {...props} />;

const Row = styled.li`
  border-top: 1px solid red;
  margin-bottom: 20px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);

  h5 {
    margin-left: 8px;
    margin-bottom: 8px;
    font-style: italic;
  }
`;

const Button = styled.button`
  border: none;
  background-color: white;
  border-bottom: 1px solid black;
  padding: 10px 0;
  font-size: 12px;
  font-weight: 200;
  margin: 0 10px;
  width: 30px;
`;

const getColor = (status) => {
  return status === "approved"
    ? "green"
    : status === "declined"
    ? "red"
    : status === "researching"
    ? "purple"
    : status === "pending approval"
    ? "orange"
    : "blue";
};

const ListItem = ({ company, deleteTarget, editTarget }) => {
  const color = getColor(company.companyTrackingStatus);

  return (
    <Row>
      <Flex m={0} p={0} color={color}>
        <Box flex={8} />
        <Box flex={2}>Status: {company.companyTrackingStatus}</Box>
        <Button onClick={() => editTarget(company)}>Edit</Button>
        <Button onClick={() => deleteTarget(company.companyId)}>Delete</Button>
      </Flex>
      <h5>Company Info</h5>
      <Flex flexWrap="wrap">
        <Cell>{company.companyName}</Cell>
        <Cell>{company.companyLocation}</Cell>
        <Cell>{company.companyWebsite}</Cell>
      </Flex>
      <h5>Key Contact</h5>
      <Flex flexWrap="wrap">
        <Cell>{company.contactName}</Cell>
        <Cell>{company.contactJobTitle}</Cell>
        <Cell>{company.contactPhone}</Cell>
        <Cell>{company.contactEmail}</Cell>
      </Flex>
      <h5>Financial Performance</h5>
      <Flex flexWrap="wrap">
        <Cell>Market: {company.companyMarket}</Cell>
        <Cell>Employees: {company.companySize}</Cell>
        <Cell>Funding: ${company.companyFunding}</Cell>
      </Flex>
    </Row>
  );
};

ListItem.propTypes = {
  company: PropTypes.object.isRequired,
  deleteTarget: PropTypes.func.isRequired,
  editTarget: PropTypes.func.isRequired,
};

export default ListItem;
