import styles from './Abas.module.css';
const Abas = () => {
    return (
        <div className={styles.cx_aba}>
            <div className={styles.prim}>
              <a href="#">
                <p>Pronto Atendimento</p>
              </a>
            </div>
            <div className={styles.intern}>
              <a href="#">
                <p>Uti Adulto</p>
              </a>{" "}
            </div>
            <div className={styles.intern}>
              <a href="#">
                <p>Maternidade</p>
              </a>{" "}
            </div>
            <div className={styles.intern}>
              <a href="#">
                <p>Pré Parto</p>
              </a>{" "}
            </div>
            <div className={styles.intern}>
              <a href="#">
                <p>Particular 2</p>
              </a>
            </div>
            <div className={styles.intern}>
              <a href="#">
                <p>Particular 3</p>
              </a>{" "}
            </div>
            <div className={styles.intern}>
              <a href="#">
                <p>Uti Neonatal</p>
              </a>
            </div>
            <div className={styles.ultima}>
              <a href="#">
                <p>Pediatria</p>
              </a>
            </div>
          </div>
    );
}

export default Abas;