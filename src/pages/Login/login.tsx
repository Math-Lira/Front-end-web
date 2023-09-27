import { FormLogin } from "../../components/FormLogin/index";
import logo from "../../assets/Logo2.png";
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
      <div className={styles.titulo}>
        <h1 className={styles.tituloH1}>LOGIN</h1>
      </div>
      <FormLogin />
    </div>
  );
}
