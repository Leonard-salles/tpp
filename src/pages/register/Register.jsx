import styles from "./Register.module.css"

import { useState, useEffect } from "react"

import { useAuthentication } from "../../hooks/useAuthentication"

import {
  UserRound,
  SquareUserRound,
  Mail,
  Swords,
  Lock,
  Eye,
  EyeClosed
} from 'lucide-react';

import AlertFeedback from "../../components/feedbacks/Alert"
import CircularProgress from '@mui/material/CircularProgress';

const Register = () => {

  const [displayName, setDisplayName] = useState("")
  const [completeName, setCompleteName] = useState("")
  const [email, setEmail] = useState("")
  const [lolName, setLolName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const [passEye, setPassEye] = useState(false)
  const [passEye1, setPassEye1] = useState(false)

  const { createUser, load, error: authError } = useAuthentication();


  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("")

    if (confirmPassword !== password) {
      setError("As senhas precisam ser iguais")
      return
    }

    const user = {
      displayName,
      completeName,
      email,
      lolName,
      password
    }

    console.log(user)

    const res = await createUser(user)
    console.log(res)

  }


  useEffect(() => {
    if(authError){
      setError(authError)
    }

  }, [authError])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Bem vindo ao site oficial da TPP para campeonatos</h1>
        <h4>Crie sua conta para ter acesso a toda nossa plataforma e campeonatos exclusivos !!!</h4>
      </header>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          <span className={styles.label_span}>Usuário : </span>
          <div className={displayName.length >= 1 ? styles.has_value : styles.no_value}>
            <span className={styles.span_icon}><UserRound /></span>
            <input
              type="text"
              name="displayName"
              placeholder="Insira seu nome de usuário"
              onChange={e => setDisplayName(e.target.value)}
              value={displayName}
              required
            />
          </div>
        </label>

        <label className={styles.label}>
          <span className={styles.label_span}>Nome : </span>
          <div className={completeName.length >= 1 ? styles.has_value : styles.no_value}>
            <span className={styles.span_icon}><SquareUserRound /></span>
            <input
              type="text"
              name="name"
              placeholder="Insira seu nome completo"
              onChange={e => setCompleteName(e.target.value)}
              value={completeName}
              required
            />
          </div>
        </label>

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
          <span className={styles.label_span}>Usuário do LoL : </span>
          <div className={lolName.length >= 1 ? styles.has_value : styles.no_value}>
            <span className={styles.span_icon}><Swords /></span>
            <input
              type="text"
              name="lolName"
              placeholder="Insira seu nickname completo do LOL"
              onChange={e => setLolName(e.target.value)}
              value={lolName}
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

        <label className={styles.label}>
          <span className={styles.label_span}>Confirmar senha : </span>
          <div className={confirmPassword.length >= 1 ? styles.has_value : styles.no_value}>
            <span className={styles.span_icon}><Lock /></span>
            <input
              type={passEye1 ? "text" : "password"}
              name="confirmPassword"
              placeholder="Crie uma senha para acessar"
              onChange={e => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
            />
            {passEye1 ?
              <>
                <span><Eye cursor={"pointer"} onClick={() => setPassEye1(false)} /></span>
              </>
              :
              <>
                <span><EyeClosed cursor={"pointer"} onClick={() => setPassEye1(true)} /></span>
              </>}
          </div>
        </label>
        {error &&<AlertFeedback message={error} />}

        {!load && <button className={styles.button}>Criar Conta</button>}
        {load && <button className={styles.button}>
          <CircularProgress size={16} color="inherit" />
        </button>}
      </form>
    </div>
  )
}

export default Register