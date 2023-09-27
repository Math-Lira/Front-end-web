import styles from './Formulario-cadastro.module.css';

export function FazendoCadastro({nomeCadastro}: { nomeCadastro: string }) {
    return (
        <div className={styles.fazerlogin}>{nomeCadastro}</div>
    )
}