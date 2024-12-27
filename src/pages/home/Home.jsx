import React from 'react'

import { useAuthValue } from "../../context/AuthContext"

const Home = () => {

  const { user } = useAuthValue()
  console.log(user)

  return (
    <div>
      {user&& <h1 style={{padding: "16px"}}>Olá, seja bem vindo {user.displayName}</h1>}
    </div>
  )
}

export default Home
