import { useState } from "react";
import styles from "./Tabelas.module.css";

const Tabelas = ({ aba, quarto01, quarto02, quarto03, setor }) => {
  const [valor,setValor]=useState({qtd_01:'',qtd_02:'',qtd_03:''})
  
  const salas ={ nome: 'quarto', quantidade:5}
  
  const somaLeitosTotal=()=>{
    return 'soma'
  }
  const somaLeitosUtilizados=()=>{
    return 'utiliza'
  }
  const somaLeitosLivres=()=>{
    return 'livres'
  }
  const calcularPercent=()=>{
    return '%'+aba
  }
  return (
    <table border={1} style={{ height: "316px" }}>
      <thead>
        <th className={styles.pa}>{setor.nome}</th>
        <th className={styles.inter}>Leitos</th>
        <th>Ocupados</th>
        <th>Livres</th>
        <th>Taxa De Ocupação</th>
      </thead>

      <tbody>
        <tr>
          <td className={styles.pcol}>{salas.nome}</td>
          <td>{salas.quantidade}</td>
          <td className={styles.value}>
            <input type="text" placeholder="0" value={valor.qtd_01} />
          </td>
          <td>{8 - 0}</td>
          <td rowSpan={4} className={styles.tx}>
            {calcularPercent()}
          </td>
        </tr>
        <tr>
          <td className={styles.pcol}>{salas.nome}</td>
          <td>{salas.quantidade}</td>
          <td className={styles.value}>
            <input type="text" placeholder="0" value={valor.qtd_02} />
          </td>
          <td>{1 - 0}</td>
        </tr>

        {aba === 5 || aba === 6 ? (
          <></>
        ) : (
          <tr>
            <td className={styles.pcol}>{salas.nome}</td>
            <td>{salas.quantidade}</td>
            <td className={styles.value}>
              <input type="text" placeholder="0" value={valor.qtd_03} />
            </td>
            <td>{4 - 0}</td>
          </tr>
        )}
        <tr className="trtotal">
          <td className={styles.total}>Total</td>
          <td className={styles.total}>{somaLeitosTotal()}</td>
          <td className={styles.total}>{somaLeitosUtilizados()}</td>
          <td className={styles.total}>{somaLeitosLivres()}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={5}>Observações</td>
        </tr>
        <tr>
          <td colSpan={5}>
            <div class={styles.expandableinput}>
              <textarea rows="3" placeholder="Digite aqui..."></textarea>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Tabelas;
