// To validate email:
// We need the string to be longer then 0 charters
// and to be an email with an @

export const validate = (values) => {
  let errors = {}

  // If false/blank or invalid characters send error messsage
  if (!values.email) {
    errors.email = "Please enter an email address"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Please enter a valid email address"
  }
  // If false/blank or invalid email send error messsage
  if (!values.name) {
    errors.name = "Please enter your name"
  } else if (!/^[ a-zA-Z\u00C0-\u00FF]+$/.test(values.name)) {
    errors.name = "Please enter a valid name"
  }
  // If false/blank subject or message send error messsage
  if (!values.subject) {
    errors.subject = "Please enter a subject (e.g. Plumbing enquiry)"
  }
  if (!values.message) {
    errors.message = "Please enter a message"
  }
  return errors
}

