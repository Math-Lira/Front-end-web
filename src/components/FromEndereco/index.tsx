import styles from './FormEndereco.module.css';
import { FazendoEndereco } from "./formulario-endereco/index";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

type Endereco = {
  nomeEndereco: string;
}

export function FormEndereco() {
    const [checkboxSelecionado, setCheckboxSelecionado] = useState<number | null>(null);
    const [numero, setNumero] = useState<number | null>(null);

    const handleCheckboxChange = (numero: number) => {
    if (checkboxSelecionado === numero) {
      setCheckboxSelecionado(null);
    } else {
      setCheckboxSelecionado(numero);
    }
};

    const [endereco, setFazerendereco] = useState<Endereco[]>([])

    const [novoEndereco, setnovoendereco] = useState<string>('');

    function handleNovoCadastroDeclarativo(event: React.ChangeEvent<HTMLInputElement>) {
        console.log('Novo Endereço =>',novoEndereco)
        setnovoendereco(event.target.value);
      }

    function handleNovoCadastro(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        setFazerendereco([
            ...endereco,
            {
              nomeEndereco: novoEndereco
            }
        ])
        setnovoendereco('');
      }

      return (
        <div>
  <form onSubmit={handleNovoCadastro} className={styles.formulario}>
    <div className={styles.inputGroup}>
      <input
        className={styles.input}
        placeholder="CEP"
        name="logins"
        value={novoEndereco}
        onChange={handleNovoCadastroDeclarativo}
      />
      <input
        className={styles.input}
        placeholder="Endereço"
        name="senhas" />
      <input 
        className={styles.input}
        placeholder="Bairro"
        name="senhas" />
      <input
        className={styles.input}
        placeholder="Cidade"
        name="senhas"
      />
      <input 
        className={styles.input}
        placeholder="UF"
        name="senhas" />
      <input 
        className={styles.input}
        placeholder="Numero" 
        name="senhas" />
      <input 
        className={styles.input} 
        placeholder="Complemento" 
        name="senhas" />
    </div>
    <div>
      <button 
        type="submit" 
        className={styles.botaoFinalizar}>FINALIZAR
      </button>
      <button 
        type="button" 
        className={styles.botaovoltar}>VOLTAR
      </button>
      <div
        className={`${styles.checkboxContainer1} ${checkboxSelecionado === 1 ? 'checked' : 'unchecked'}`}
        onClick={() => handleCheckboxChange(1)}
      >
        <FontAwesomeIcon
          icon={checkboxSelecionado === 1 ? faCheckCircle : faCircle}
          style={{
            fontSize: '24px',
            verticalAlign: 'middle',
            color: checkboxSelecionado === 1 ? '#00b981' : '#3f3f3f'}}/>
        <span
          className={styles.nomecheck}
          style={{ verticalAlign: 'middle', fontSize: '18px' }}> Plano Prata
        </span>
      </div>
      <div
          className={`${styles.checkboxContainer2} ${checkboxSelecionado === 2 ? 'checked' : 'unchecked'}`}
          onClick={() => handleCheckboxChange(2)}>
        <FontAwesomeIcon
          icon={checkboxSelecionado === 2 ? faCheckCircle : faCircle}
          style={{
            fontSize: '24px',
            verticalAlign: 'middle',
            color: checkboxSelecionado === 2 ? '#00b981' : '#3f3f3f'}}/>
        <span
          className={styles.nomecheck2}
          style={{ verticalAlign: 'middle', fontSize: '18px' }}> Plano Gold
        </span>
      </div>
      <div
        className={`${styles.checkboxContainer3} ${checkboxSelecionado === 3 ? 'checked' : 'unchecked'}`}
        onClick={() => handleCheckboxChange(3)}
      >
        <FontAwesomeIcon
          icon={checkboxSelecionado === 3 ? faCheckCircle : faCircle}
          style={{
            fontSize: '24px',
            verticalAlign: 'middle',
            color: checkboxSelecionado === 3 ? '#00b981' : '#3f3f3f'}}/>
        <span
          className={styles.nomecheck3}
          style={{ verticalAlign: 'middle', fontSize: '18px' }}> Plano Diamante
        </span>
      </div>
    </div>
  </form>
        {
          endereco.map((Endereco) => (
            <FazendoEndereco
            key={Endereco.nomeEndereco}
            nomeEndereco={Endereco.nomeEndereco}
            />
          ))}
        </div>
      )

      type EnderecoProps = {
        nomeEndereco: string;
      };
      
      function Endereco(props: EnderecoProps) {
        return <div>{props.nomeEndereco}</div>
      }
}