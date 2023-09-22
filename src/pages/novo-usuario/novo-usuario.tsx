import { FormEvent, useState } from 'react';
import { Header } from '../../components/header/Header';
import { Sidebar } from '../../components/sidebar/Sidebar';

import styles from './novo-usuario.module.css';

import '../../global.css';

export interface UsuarioProps {
  id: number;
  nome: string;
  email: string;
  senha: string;
  ativo: boolean;
}

export function NovoUsuario() {

  const [usuario, setUsuario] = useState<UsuarioProps>();

  function handleSalvarUsuario(event: FormEvent) {
    event.preventDefault()
  }

  function handleNovoNome(event: FormEvent) {
    // setUsuario()
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <article className={styles.article}>

            <div className={styles.content}>
              Dados do usuário
            </div>

            <form onSubmit={handleSalvarUsuario} className={styles.form}>

              <label>Informe o nome</label>
              <input
                placeholder='Informe o nome'
                name='nome'
                value={usuario?.nome}
                onChange={handleNovoNome}
              />

              <footer>
                <button type="submit" >
                  Salvar
                </button>
              </footer>

            </form>
          </article>
        </main>
      </div>
    </div>
  )
}