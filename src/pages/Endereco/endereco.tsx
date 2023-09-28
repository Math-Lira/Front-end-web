import styles from './endereco.module.css';
import logo from "../../assets/Logo2.png";
import { FormEndereco } from '../../components/FromEndereco/index';

export function Endereco() {
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
          <h1>ENDEREÇO</h1>
        </div>
        <FormEndereco/>
      </div>

    )
}