import React, { useState, useEffect } from "react"
import { FaUser, FaLock } from "react-icons/fa"
import "./LoginForm.css"
import {
  validateEmail,
  validatePassword,
  saveLogin,
  getSavedLogin,
} from "../utils"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState({ email: "", password: "" })

  useEffect(() => {
    const savedLogin = getSavedLogin()
    setEmail(savedLogin.email)
    setRememberMe(savedLogin.rememberMe)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailError = validateEmail(email)
    const passwordError = validatePassword(password)

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError })
    } else {
      console.log("Formulário enviado!")
      saveLogin(email, rememberMe)
    }
  }

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser className="icon" />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="input-field">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="remember-me">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe">Lembrar de mim</label>
          <a href="/forgot-password" className="forgot-password">
            Esqueceu a senha?
          </a>
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default LoginForm
