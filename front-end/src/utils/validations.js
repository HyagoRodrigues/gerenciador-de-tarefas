export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email) ? "" : "Email inválido"
}

export const validatePassword = (password) => {
  return password.length >= 6 ? "" : "A senha deve ter pelo menos 6 caracteres"
}
