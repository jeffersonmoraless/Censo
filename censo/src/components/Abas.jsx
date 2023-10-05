import styles from './Abas.module.css';
const Abas = ({aba,setAba}) => {
  const changeAba =(iten)=>{
    setAba(iten)
  }
    return (
        <div className={styles.cx_aba}>
            <div className={styles.prim} onClick={()=>changeAba(1)}>
              
                <p>Pronto Atendimento</p>
              
            </div>
            <div className={styles.intern} onClick={()=>changeAba(2)}>
              
                <p>Uti Adulto</p>
              
            </div>
            <div className={styles.intern} onClick={()=>changeAba(3)}>
              
                <p>Maternidade</p>
              
            </div>
            <div className={styles.intern} onClick={()=>changeAba(4)}>
              
                <p>Pré Parto</p>
              
            </div>
            <div className={styles.intern} onClick={()=>changeAba(5)}>
              
                <p>Particular 2</p>
              
            </div>
            <div className={styles.intern} onClick={()=>changeAba(6)}>
              
                <p>Particular 3</p>
              
            </div>
            <div className={styles.intern} onClick={()=>changeAba(7)}>
              
                <p>Uti Neonatal</p>
              
            </div>
            <div className={styles.ultima} onClick={()=>changeAba(8)}>
              
                <p>Pediatria</p>
              
            </div>
          </div>
    );
}

export default Abas;