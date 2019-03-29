import { useState } from 'react'

const useForm = callback => {
  const [values, setValues] = useState({})

  const handleInputChange = event => {
    event.persist()
    const { name, value } = event.target

    setValues({ ...values, [name]: value })
  }

  const handleSubmitForm = event => {
    if (event) event.preventDefault()
    callback()
  }

  return {
    handleInputChange,
    handleSubmitForm,
    values
  }
}

export default useForm
