import styles from './Header.module.css';

import deltaLogo from '../../assets/delta-logo.png';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={deltaLogo} alt="Logotipo da Faculdade Delta" />
    </header>
  );
}
