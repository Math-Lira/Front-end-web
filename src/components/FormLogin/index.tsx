import { FazendoLogin } from "../FormLogin/formulario-login/index";
import styles from './FormLogin.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

type Usuarios = {
    nomeUsuario: string;
  }

export function FormLogin() {
    const [usuario, setFazerusuario] = useState<Usuarios[]>([])

    const [novousuario, setnovousuario] = useState<string>('');

    function handleNovoLoginDeclarativo(event: React.ChangeEvent<HTMLInputElement>) {
        console.log('Novo Cadastro =>',novousuario)
        setnovousuario(event.target.value);
      }

    function handleNovoCadastro(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        setFazerusuario([
            ...usuario,
            {
              nomeUsuario: novousuario
            }
        ])
        setnovousuario('');
      }

      return (
        <div>
            <form onSubmit={handleNovoCadastro}>
              <a className={styles.esqueciasenha} href="/pagina-do-link"> ESQUECI A SENHA</a> {/* Adicione o link aqui */}
            <input 
                className={styles.caixadetextousuario}
                placeholder="Usuário"
                name="logins"
                value={novousuario}
                onChange={handleNovoLoginDeclarativo}
                />
            <input 
                className={styles.caixadetestosenha}
                placeholder="Senha"
                name="senhas"
                />
            <div className={styles.iconuser}>
                <FontAwesomeIcon icon={faUser}/>
            </div>
            <div className={styles.iconcadeado}>
                <FontAwesomeIcon icon={faLock}/>
            </div>
            <button type="submit" className={styles.botaologin}>ENTRAR</button>
            <button type="button" className={styles.botaocadastrar}>CADASTRAR</button>
        </form>
        {
          usuario.map((Usuarios) => (
            <FazendoLogin
            key={Usuarios.nomeUsuario}
            nomeLogin={Usuarios.nomeUsuario}
            />
          ))}
        </div>
      )

      type UsuarioProps = {
        nomeUsuario: string;
      };
      
      function Usuarios(props: UsuarioProps) {
        return <div>{props.nomeUsuario}</div>
      }
}