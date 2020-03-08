import { useState, useEffect } from 'react'
import { validate } from './validate'

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: '',
    fullname: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    if (e) { e.preventDefault() }
    setErrors(validate(values))
    setIsSubmitting(true)
    // callback()
  }

  const handleChange = (e) => {
    e.persist()
    setValues(values => ({ ...values, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])

  return {
    handleSubmit,
    handleChange,
    values,
    errors
  }
}

export default useForm
