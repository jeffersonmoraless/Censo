import { useEffect, useState } from "react";
import styles from "./Tabelas.module.css";
import axios from "axios";

const Tabelas = ({ aba, setor }) => {
  const [valor, setValor] = useState({ qtd_01: "", qtd_02: "", qtd_03: "" });
  const [setores, setSetores] = useState();
  const salas = { nome: "quarto", quantidade: 5 };

  const fetch = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/listTeste");
      console.log(data);

      setSetores(data);

      /*
      console.log(Object.keys(setores[0])])
      console.log('sdsd',setores[3])
    */
    } catch (error) {
      console.log("deu error?", error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);
  const somaLeitosTotal = () => {
    let soma =
      parseInt(setores[0].qtd) +
      parseInt(setores[1].qtd) +
      parseInt(setores[2].qtd);
    return soma;
  };
  const somaLeitosUtilizados = () => {
    let vl_01 = Number(valor.qtd_01)
    let vl_02 = Number(valor.qtd_02)
    let vl_03 = Number(valor.qtd_03)
    
    return vl_01 + vl_02 + vl_03 
  };
  const somaLeitosLivres = () => {
    return (Number(setores[0].qtd) - Number(valor.qtd_01))+(Number(setores[1].qtd) - Number(valor.qtd_02)) + (Number(setores[2].qtd) - Number(valor.qtd_03))  
  };
  const calcularPercent = () => {
    return (somaLeitosUtilizados()*100 / somaLeitosTotal()).toFixed(2)+'%';
  };

  const livres = (n1,n2) => {
    return n1-n2
  };

  return (
    <table border={1} style={{ height: "316px" }}>
      <thead>
        <th className={styles.pa}>{setores ? setores[0].setor : ""}</th>
        <th className={styles.inter}>Leitos</th>
        <th>Ocupados</th>
        <th>Livres</th>
        <th>Taxa De Ocupação</th>
      </thead>

      <tbody>
        <tr>
          <td className={styles.pcol}>
            {setores ? Object.keys(setores[0])[1] : ""}
          </td>
          <td>{setores ? setores[0].qtd: ""}</td>
          <td className={styles.value}>
            <input
              type="text"
              placeholder="0"
              value={valor.qtd_01}
              onChange={(e) => {
                setValor({
                  qtd_01: e.target.value,
                  qtd_02: valor.qtd_02,
                  qtd_03: valor.qtd_03,
                });
              }}
            />
          </td>
          <td>{setores ? livres(setores[0].qtd ,valor.qtd_01)  :'0'}</td>
          <td rowSpan={4} className={styles.tx}>
            {calcularPercent()}
          </td>
        </tr>
        <tr>
          <td className={styles.pcol}>
            {setores ? Object.keys(setores[1])[1] : ""}
          </td>
          <td>{setores ? setores[1].qtd : ""}</td>
          <td className={styles.value}>
            <input
              type="text"
              placeholder="0"
              value={valor.qtd_02}
              onChange={(e) => {
                setValor({
                  qtd_01: valor.qtd_01,
                  qtd_02: e.target.value,
                  qtd_03: valor.qtd_03,
                });
              }}
            />
          </td>
          <td>{setores ? livres(setores[1].qtd ,valor.qtd_02)  :'0'}</td>
        </tr>

        {aba === 5 || aba === 6 ? (
          <></>
        ) : (
          <tr>
            <td className={styles.pcol}>
              {setores ? Object.keys(setores[2])[1] : ""}
            </td>
            <td>{setores ? setores[2].qtd : ""}</td>
            <td className={styles.value}>
              <input
                type="text"
                placeholder="0"
                value={valor.qtd_03}
                onChange={(e) => {
                  setValor({
                    qtd_01: valor.qtd_01,
                    qtd_02: valor.qtd_02,
                    qtd_03: e.target.value,
                  });
                }}
              />
            </td>
            <td>{setores ? livres(setores[2].qtd ,valor.qtd_03)  :'0'}</td>
          </tr>
        )}

        <tr className="trtotal">
          <td className={styles.total}>Total</td>
          <td className={styles.total}>{setores ? somaLeitosTotal() : ""}</td>
          <td className={styles.total}>
            {valor.qtd_01 >= 1 ? somaLeitosUtilizados() : "0"}
          </td>
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
