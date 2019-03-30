import { useState, useEffect } from 'react'

const useForm = (callback, validate, initialFormState) => {
  const [values, setValues] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  // Prevent form from submitting on render
  const [isSubmitting, setIsSubmitting] = useState(false)

  // As a 'side effect' of the errors value changing, do this ...
  useEffect(() => {
  // ... check if the errors object is empty & isSubmitting ...
    if (Object.keys(errors).length === 0 && isSubmitting) {
  // ... and if so, call the callback function.
      callback()
    }
  }, [errors])

  const handleInputChange = event => {
    event.persist()
    const { name, value } = event.target

    setValues({ ...values, [name]: value })
  }

  const handleSubmitForm = event => {
    if (event) event.preventDefault()
    setIsSubmitting(true)
    setErrors(validate(values))
  }

  return {
    handleInputChange,
    handleSubmitForm,
    values,
    errors
  }
}

export default useForm
