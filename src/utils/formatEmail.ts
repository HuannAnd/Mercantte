const formatEmail = (email: string): string => {
  const atIndex = email.indexOf("@");
  if (atIndex === -1) return email;

  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex + 1);

  // Limita o comprimento do nome de usuário a 20 caracteres
  const formattedUsername = username.slice(0, 20);

  return `${formattedUsername}@${domain}`;
}

export default formatEmail;