import styles from './Cadastro.module.css';
import santaScasas from '../img/santaScasas.png'
const Cadastro = () => {
        return (
                <form action="" className={styles.container}>
                        <div className={styles.icone}>
                                <img src={santaScasas}/>
                        </div>

                        <div className={styles.campo}>

                                <input className={styles.input} type="text" name="name" placeholder="Digite seu nome" />
                                <label className={styles.label}>Nome</label>

                        </div>

                        <div className={styles.campo}>

                                <input className={styles.input} type="email" name="email" placeholder="Digite seu E-mail" />
                                <label className={styles.label}>E-mail</label>

                        </div>

                       
                        <div className={styles.campo}>

                                <input className={styles.input} type="tel" name="cell" placeholder="(00)9 9999-9999" />
                                <label className={styles.label}>Telefone</label>

                        </div>

                        <div className={styles.campo}>

                                <input className={styles.input} type="password" name="password" placeholder="Digite sua senha" />
                                <label className={styles.label}>Senha</label>

                        </div>
                        <div className={styles.campo}>

                                <input className={styles.input} type="password" name="confirmPassword" placeholder="sua senha" />
                                <label className={styles.label}>Confirme a Senha</label>

                        </div>
                       


                        <div className={styles.campoButton}>

                                <button>enviar</button>
                                
                        </div>

                        
                        
                        

                </form>
        );
}

export default Cadastro;