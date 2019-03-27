import React from 'react'
import styled, { css } from 'styled-components'
import { Flex, Box } from 'rebass'

const Button = styled.button`
  border: 3px solid rgba(46, 139, 87, 0.2);
  padding: 15px 20px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 200;
`

const ListHeader = ({ setCreating }) => (
  <Flex>
    <h2>Companies</h2>
    <Box mx='auto' />
    <Button onClick={() => setCreating(true)}>New</Button>
  </Flex>
)

export default ListHeader
