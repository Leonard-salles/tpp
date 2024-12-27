import { useState, useEffect } from "react"

import styles from "../register/Register.module.css"

import {
  Mail,
  Lock,
  Eye,
  EyeClosed
} from 'lucide-react';

import { useAuthentication } from "../../hooks/useAuthentication"


import AlertFeedback from "../../components/feedbacks/Alert"
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const [passEye, setPassEye] = useState(false)

  const { login, load, error: authError } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      email,
      password
    }

    const res = await login(user)
    console.log(res)
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }

  }, [authError])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Bem vindo ao site oficial da TPP para campeonatos</h1>
        <h4>Faça o Login para acessar todas as infomações</h4>
      </header>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          <span className={styles.label_span}>E-mail : </span>
          <div className={email.length >= 1 ? styles.has_value : styles.no_value}>
            <span className={styles.span_icon}><Mail /></span>
            <input
              type="email"
              name="email"
              placeholder="Insira seu endereço de e-mail"
              onChange={e => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
        </label>

        <label className={styles.label}>
          <span className={styles.label_span}>Senha de acesso : </span>
          <div className={password.length >= 1 ? styles.has_value : styles.no_value}>
            <span className={styles.span_icon}><Lock /></span>
            <input
              type={passEye ? "text" : "password"}
              name="password"
              placeholder="Crie uma senha para acessar"
              onChange={e => setPassword(e.target.value)}
              value={password}
              required
            />
            {passEye ?
              <>
                <span><Eye cursor={"pointer"} onClick={() => setPassEye(false)} /></span>
              </>
              :
              <>
                <span><EyeClosed cursor={"pointer"} onClick={() => setPassEye(true)} /></span>
              </>}
          </div>
        </label>
        {error && <AlertFeedback message={error} />}

        {!load && <button className={styles.button}>Acessar</button>}
        {load && <button className={styles.button}>
          <CircularProgress size={16} color="inherit" />
        </button>}
      </form>
    </div>
  )
}

export default Login