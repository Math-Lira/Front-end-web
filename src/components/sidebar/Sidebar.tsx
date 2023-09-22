import { House, UserPlus, Warning } from 'phosphor-react'

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <div className={styles.profile}>

        <strong>Nome do Aluno</strong>
        <span>Curso</span>
        <span>Perído</span>
      </div>

      <footer>
        <a href="#">
          <House size={20} />
          Home
        </a>
        <a href="#">
          <UserPlus size={20} />
          Novo Usuário
        </a>
        <a href="#">
          <Warning size={20} />
          Escolha do aluno
        </a>
      </footer>
    </aside>
  );
}
