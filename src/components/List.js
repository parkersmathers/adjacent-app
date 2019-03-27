import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import { Box } from 'rebass'

const List = ({ companies, deleteTarget, editTarget }) => {
  return (
    <section>
      <Box mt='50px' />
      <ul>
        {companies.map(company => (
          <ListItem
            key={company.companyId}
            company={company}
            deleteTarget={deleteTarget}
            editTarget={editTarget}
          />
        ))}
      </ul>
    </section>
  )
}

List.propTypes = {
  companies: PropTypes.array.isRequired,
  deleTarget: PropTypes.func.isRequired,
  editTarget: PropTypes.func.isRequired
}

export default List
