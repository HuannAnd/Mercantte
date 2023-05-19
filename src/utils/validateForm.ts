import { ERRORS_CONTACT } from "@/constants/errors";
import { formatPhone } from "@/utils";

type Warnings = { key: keyof typeof ERRORS_CONTACT; value: string }[]

const validationFunctions = {
  validateEmailFormat: (email?: string): boolean => {
    if (!email) return true
    const removigWhiteSpaces = email.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validation = emailRegex.test(removigWhiteSpaces);

    return validation;
  },

  validatePhoneFormat: (phone?: string): boolean => {
    if (!phone) return true

    const formattedPhone = formatPhone(phone)

    const phoneRegex = /^\(\d{2}\) \d \d{4}-\d{4}$/;
    const validation = phoneRegex.test(formattedPhone);

    return validation;
  },

  checkingForm: (name: string | undefined, term: boolean, email: string | undefined, phone: string | undefined) => {
    console.log(validationFunctions.validatePhoneFormat(phone));
    let errors: ERRORS_CONTACT[] = [];
    if (!name) {
      errors.push(ERRORS_CONTACT.EMPTY_NAME_INPUT);
    }
    if (!phone && !email) {
      errors.push(ERRORS_CONTACT.EMPTY_CONTACT_INPUTS);
    }
    if (phone && !validationFunctions.validatePhoneFormat(phone)) {
      errors.push(ERRORS_CONTACT.WRONG_PHONE_FORMAT);
    }
    if (email && !validationFunctions.validateEmailFormat(email)) {
      errors.push(ERRORS_CONTACT.WRONG_EMAIL_FORMAT);
    }
    if (!term) {
      errors.push(ERRORS_CONTACT.ACCEPT_TERMS_AND_CONDITIONS);
    }
    return errors;
  }
};

type ValidateForm = (term: boolean, name?: string, email?: string, phone?: string) =>
  { isValid: boolean, warnings: ERRORS_CONTACT[] }


const validateForm: ValidateForm = (term, name, email, phone) => {
  const errors = validationFunctions.checkingForm(name, term, email, phone);

  if (errors && errors.length >= 1) {
    return { isValid: false, warnings: errors }
  }

  return { isValid: true, warnings: [] }
}

export default validateForm;