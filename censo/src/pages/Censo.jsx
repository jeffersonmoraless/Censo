import styles from "./Censo.module.css";

import santaScasas from "../img/santaScasa.webp";
import proximo from "../img/pp.png";
import voltar from "../img/voltar.png";
import Abas from "../components/Abas";
import { useState } from "react";
import Tabelas from "../components/Tabelas";
const Censo = () => {
    const[aba,setAba]= useState(1)
  
    
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <img src={santaScasas} />
        <h1>Nucleo Interno de Regulação</h1>
      </div>
        
      <div className={styles.body}>
        <div className={styles.subBody}>
      {
        aba===1?<Tabelas aba={aba} setor={"Pronto Atendimento"} quarto01={'Sala Amarela'}quarto02={'Sala Vermelha'}quarto03={'Observação'}/>:
        aba===2?<Tabelas aba={aba} setor={"Uti Adulto"} quarto01={'Leitos Sus'}quarto02={'Leitos PT'}quarto03={'Bloqueados'}/>:
        aba===3?<Tabelas aba={aba} setor={"Maternidade"} quarto01={'Leitos'}quarto02={'Isolamento'}quarto03={'RN / Acom'} />:
        aba===4?<Tabelas aba={aba} setor={"Pré Parto"} quarto01={'Leitos Sus'}quarto02={'Leitos PTT'}quarto03={'Observação'} />:
        aba===5?<Tabelas aba={aba} setor={"Particular 2"} quarto01={'Leitos Sus'}quarto02={'Isolamento'}/>:
        aba===6?<Tabelas aba={aba} setor={"Particular 3"} quarto01={'Leitos AP'}quarto02={'Ambulatorio'}/>:
        aba===7?<Tabelas aba={aba} setor={"Uti Neonatal"} quarto01={'Leitos Uti Neo'}quarto02={'Leitos Uti Ped'}quarto03={'Uci'} />:
        aba===8?<Tabelas aba={aba} setor={"Pediatria"} quarto01={'Leitos Sus'}quarto02={'isolamento'}quarto03={'Acomp'} />:<></>

        
        
          
        

      }
        
        {/*<table border={1}>
            <thead>
              <th className={styles.pa}>Pronto Atendimento</th>
              <th className={styles.inter}>Leitos</th>
              <th>Ocupados</th>
              <th>Livres</th>
              <th>Taxa De Ocupação</th>
            </thead>

            <tbody>
              <tr>
                <td className={styles.pcol}>Sala Amarela</td>
                <td>8</td>
                <td className={styles.value}>
                  <input type="text" placeholder="0" />
                </td>
                <td>{8 - 0}</td>
                <td rowSpan={4} className={styles.tx}>
                  75%
                </td>
              </tr>
              <tr>
                <td className={styles.pcol}>Sala Vermelha</td>
                <td>1</td>
                <td className={styles.value}>
                  <input type="text" placeholder="0" />
                </td>
                <td>{1 - 0}</td>
              </tr>
              <tr>
                <td className={styles.pcol}>Observação</td>
                <td>4</td>
                <td className={styles.value}>
                  <input type="text" placeholder="0" />
                </td>
                <td>{4 - 0}</td>
              </tr>
              <tr className="trtotal">
                <td className={styles.total}>Total</td>
                <td className={styles.total}>{8 + 1 + 4}</td>
                <td className={styles.total}>{0 + 0 + 0}</td>
                <td className={styles.total}>{8 + 1 + 4}</td>
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
          </table>*/}
          <Abas aba={aba} setAba={setAba}/>
        </div>
      </div>

      <div className={styles.footer}>footer</div>
    </div>
  );
};

export default Censo;
