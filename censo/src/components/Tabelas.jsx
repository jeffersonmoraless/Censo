import styles from "./Tabelas.module.css";
const Tabelas = ({aba}) => {
    const inf_01 = 0;
    const inf_02 = 0;
    const inf_03 = 0;


    return (
<>
<table border={1}>
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


             {aba === 5 || aba === 6? 
              <></>:<tr>
                <td className={styles.pcol}>Observação</td>
                <td>4</td>
                <td className={styles.value}>
                  <input type="text" placeholder="0" />
                </td>
                <td>{4 - 0}</td>
            </tr>}
              <tr className="trtotal">
                <td className={styles.total}>Total</td>
                <td className={styles.total}>{8 + 1 + 4}</td>
                <td className={styles.total}>{inf_01 + inf_02 + inf_03}</td>
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
          </table>


{
        /*<table border={1}>
            <thead>
              <th className={styles.pa}>{setor}</th>
              <th className={styles.inter}>Leitos</th>
              <th>Ocupados</th>
              <th>Livres</th>
              <th>Taxa De Ocupação</th>
            </thead>

            <tbody>
              <tr>
                <td className={styles.pcol}>{quarto1}</td>
                <td>{qtd_total1}</td>
                <td className={styles.value}>
                  <input type="text" placeholder="0" />
                </td>
                <td>{qtd_total1 - vl_01 }</td>
                <td rowSpan={4} className={styles.tx}>
                  {((qtd_total1 - vl_01) + (qtd_total2 - vl_02) + (qtd_total3 - vl_03) * 100)/(qtd_total1 + qtd_total2 + qtd_total3)}
                </td>
              </tr>
              <tr>
                <td className={styles.pcol}>{quarto2}</td>
                <td>{qtd_total2}</td>
                <td className={styles.value}>
                  <input type="text" placeholder="0" />
                </td>
                <td>{qtd_total2 - vl_02}</td>
              </tr>
              <tr>
                <td className={styles.pcol}>{quarto3}</td>
                <td>{qtd_total3}</td>
                <td className={styles.value}>
                  <input type="text" placeholder="0" />
                </td>
                <td>{qtd_total3 - vl_03}</td>
              </tr>
              <tr className="trtotal">
                <td className={styles.total}>Total</td>
                <td className={styles.total}>{qtd_total1 + qtd_total2 + qtd_total3}</td>
                <td className={styles.total}>{vl_01 + vl_02 + vl_03}</td>
                <td className={styles.total}>{(qtd_total1 - vl_01) + (qtd_total2 - vl_02) + (qtd_total3 - vl_03)}</td>
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
          </>
    );
}

export default Tabelas;