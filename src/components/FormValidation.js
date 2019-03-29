export default function validate(values) {
  let errors = {}
  if (!values.companyName) {
    errors.companyName = 'Company name is required'
  }
  if (!/\S+@\S+\.\S+/.test(values.contactEmail)) {
    errors.contactEmail = 'Email address is invalid'
  }
  if (!/^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/.test(values.contactPhone)) {
    errors.contactPhone = 'Phone number is invalid'
  }
  return errors
}
