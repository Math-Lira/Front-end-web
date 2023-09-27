import styles from './cadastro.module.css'
import logo from "../../assets/Logo2.png";
import { FormCadastro } from '../../components/FormCadastro/index'

export function Cadastro() {
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
          <h1>CADASTRO</h1>
        </div>
        <FormCadastro/>
      </div>

    )
}