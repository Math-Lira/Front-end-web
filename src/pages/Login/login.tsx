import { House, UserPlus, Warning } from "phosphor-react";
import logo from "../../assets/logo-motos.png";
import fundo from "../../assets/imagem-de-fundo.png";
import styles from "./login.module.css";

import "../../global.css";

export function Login() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.article}>
          <div>
            <img src={logo} alt="Logo da empresa" className={styles.logo} />
          </div>
        </div>
      </div>
      <main className={styles.titulo}>
        <h1>LOGIN</h1>
      </main>
      <button className={styles.botaoLogin}>Login</button>
      <button className={styles.botaoSenha}>Senha</button>
    </div>
  );
}
