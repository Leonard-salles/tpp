

import styles from "./TablePoints.module.css"

const data = [
    {
        id: 1,
        nome: "Brenno Leite Paterno",
        jogos: 3,
        vitorias: 2,
        derrotas: 1,
    },
    {
        id: 2,
        nome: "Herison Wells",
        jogos: 3,
        vitorias: 2,
        derrotas: 1,
    },
    {
        id: 3,
        nome: "Philipe Satânico",
        jogos: 3,
        vitorias: 2,
        derrotas: 1,
    },
    {
        id: 4,
        nome: "Manso Manso Manso",
        jogos: 3,
        vitorias: 2,
        derrotas: 1,
    },
]

const TablePoints = () => {
  return (
    <table className={styles.table}>
        <thead className={styles.table_head}>
            <tr className={styles.header_table_row}>
                <th style={{width: "50%", textAlign: "left"}}>Classificação</th>
                <th>J</th>
                <th>V</th>
                <th>D</th>
            </tr>
        </thead>
        <tbody className={styles.tbody}>
            {data.map((person) => (
                <tr key={person.id} className={styles.tr_body}>
                    <td style={{width: "50%", textAlign: "left"}}>{person.nome}</td>
                    <td>{person.jogos}</td>
                    <td>{person.vitorias}</td>
                    <td>{person.derrotas}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default TablePoints
