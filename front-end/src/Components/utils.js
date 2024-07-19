export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email) ? "" : "Email inválido"
}

export const validatePassword = (password) => {
  return password.length >= 6 ? "" : "A senha deve ter pelo menos 6 caracteres"
}

export const saveLogin = (email, rememberMe) => {
  if (rememberMe) {
    localStorage.setItem("rememberMe", "true")
    localStorage.setItem("email", email)
  } else {
    localStorage.removeItem("rememberMe")
    localStorage.removeItem("email")
  }
}

export const getSavedLogin = () => {
  const rememberMe = localStorage.getItem("rememberMe") === "true"
  const email = rememberMe ? localStorage.getItem("email") : ""
  return { email, rememberMe }
}
