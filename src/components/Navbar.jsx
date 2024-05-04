import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <div className={styles.navContainer}>
      <p className={styles.app}>tastebud</p>
      <div className={styles.flex}>
        <div>theme</div>
        <div>icon</div>
        <div>menu</div>
      </div>
    </div>
  );
}
