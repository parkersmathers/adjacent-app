import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'

const Button = styled.button`
  border: 3px solid rgba(46, 139, 87, 0.2);
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 200;
`

const ListHeader = ({ setCreating }) => (
  <Box mx={4}>
    <Flex>
      <h2>Companies</h2>
      <Box mx='auto' />
      <Button onClick={() => setCreating(true)}>New</Button>
    </Flex>
  </Box>
)

ListHeader.propTypes = {
  setCreating: PropTypes.bool.isRequired
}

export default ListHeader
