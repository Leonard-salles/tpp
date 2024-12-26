import React from 'react'

import styles from "./Pontuacao.module.css"

import TablePoints from '../../components/table-points/TablePoints'

const Pontuacao = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header_h1}>Tabela de Pontos</h1>
      <div className={styles.container_main}>
        <TablePoints />
        <span style={{width: "30%"}}>
          <h1>Partidas</h1>
        </span>
      </div>
    </div>
  )
}

export default Pontuacao
