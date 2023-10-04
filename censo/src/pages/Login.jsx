import styles from './Login.module.css';
import santaScasas from '../img/santaScasas.png'
const Login = () => {
    return (
        <div className={styles.containerExt}>

        <form action="" className={styles.container}>
            <div className={styles.icone}>
                <img src={santaScasas} />
            </div>
            <div className={styles.campo}>

                <input className={styles.input} type="email" name="email" placeholder="Digite seu E-mail" />
                <label className={styles.label}>E-mail</label>

            </div>

            <div className={styles.campo} >

                <input className={styles.input} type="password" name="password" placeholder="Digite sua senha" />
                <label className={styles.label}>Password</label>

            </div>

            <div className={styles.link}>
                <div>
                    <p className={styles.account}>don't have an account? <a href='#'>Register</a>  </p>
                </div>
                <div >
                    <p className={styles.forget}><a href="#">forget password?</a></p>
                </div>

            </div>
                <div className={styles.campoButton}>

                    <button>entrar</button>
                </div>


        </form>
        </div>
    );
}

export default Login;

