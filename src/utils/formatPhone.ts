const formatPhone = (phone: string): string => {
  const regexToPhone = /^(\d{2})(\d{1})(\d{4})(\d{4})$/

  return phone.replace(regexToPhone, "($1) $2 $3-$4");
}

export default formatPhone;