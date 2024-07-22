export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email) ? "" : "Email inválido"
}

export const validatePassword = (password) => {
  return password.length >= 6 ? "" : "A senha deve ter pelo menos 6 caracteres"
}

export const saveLogin = (email, password, rememberMe) => {
  if (rememberMe) {
    localStorage.setItem("rememberMe", "true")
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
  } else {
    localStorage.removeItem("rememberMe")
    localStorage.removeItem("email")
    localStorage.removeItem("password")
  }
}

export const getSavedLogin = () => {
  const rememberMe = localStorage.getItem("rememberMe") === "true"
  const email = rememberMe ? localStorage.getItem("email") : ""
  const password = rememberMe ? localStorage.getItem("password") : ""
  return { email, password, rememberMe }
}
