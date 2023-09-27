import styles from './Formulario-login.module.css';

export function FazendoLogin({nomeLogin}: { nomeLogin: string }) {
    return (
        <div className={styles.fazerlogin}>{nomeLogin}</div>
    )
}