import { useState, useEffect } from 'react'

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: '',
    name: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    if (e) { e.preventDefault() }
    setErrors(validate(values))
    setIsSubmitting(true)
    callback(e)
  }

  const handleChange = (e) => {
    e.persist()
    setValues(values => ({ ...values, [e.target.name]: e.target.value }))
  }

  useEffect((e) => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(e)
    }
  }, [errors, callback, isSubmitting])

  return {
    handleSubmit,
    handleChange,
    values,
    errors
  }
}

export default useForm
