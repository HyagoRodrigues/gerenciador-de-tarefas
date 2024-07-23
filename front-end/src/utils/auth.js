export const saveLogin = (email, password, rememberMe) => {
  if (rememberMe) {
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
    localStorage.setItem("rememberMe", "true")
  } else {
    sessionStorage.setItem("email", email)
    sessionStorage.setItem("password", password)
  }
}

export const getSavedLogin = () => {
  return {
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
    rememberMe: localStorage.getItem("rememberMe") === "true",
  }
}
