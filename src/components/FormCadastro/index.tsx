import styles from './FormCadastro.module.css';
import { FazendoCadastro } from "./formulario-cadastro/index";
import { useState } from 'react';

type Cadastro = {
  nomeCadastro: string;
}

export function FormCadastro() {        
    const [cadastro, setFazercadastro] = useState<Cadastro[]>([])

    const [novoCadastro, setnovocadastro] = useState<string>('');

    function handleNovoCadastroDeclarativo(event: React.ChangeEvent<HTMLInputElement>) {
        console.log('Novo Cadastro =>',novoCadastro)
        setnovocadastro(event.target.value);
      }

    function handleNovoCadastro(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        setFazercadastro([
            ...cadastro,
            {
              nomeCadastro: novoCadastro
            }
        ])
        setnovocadastro('');
      }

      return (
        <div>
  <form onSubmit={handleNovoCadastro} className={styles.formulario}>
    <div className={styles.inputGroup}>
      <input
        className={styles.input}
        placeholder="Nome"
        name="logins"
        value={novoCadastro}
        onChange={handleNovoCadastroDeclarativo}
      />
      <input
        className={styles.input}
        placeholder="Sobrenome"
        name="senhas" />
      <input 
        className={styles.input}
        placeholder="E-mail"
        name="senhas" />
      <input
        className={styles.input}
        placeholder="Data de Nascimento"
        name="senhas"
      />
      <input 
        className={styles.input}
        placeholder="Numero da CNH"
        name="senhas" />
      <input 
        className={styles.input}
        placeholder="CPF" 
        name="senhas" />
      <input 
        className={styles.input} 
        placeholder="Senha" 
        name="senhas" />
      <input 
        className={styles.input} 
        placeholder="Contra Senha" 
        name="senhas" />
    </div>
    <div>
      <button 
        type="submit" 
        className={styles.botaoproximo}>PROXIMO
      </button>
      <button 
        type="button" 
        className={styles.botaovoltar}>VOLTAR
      </button>
    </div>
  </form>
        {
          cadastro.map((Usuarios) => (
            <FazendoCadastro
            key={Usuarios.nomeCadastro}
            nomeCadastro={Usuarios.nomeCadastro}
            />
          ))}
        </div>
      )

      type UsuarioProps = {
        nomeCadastro: string;
      };
      
      function Usuarios(props: UsuarioProps) {
        return <div>{props.nomeCadastro}</div>
      }
}