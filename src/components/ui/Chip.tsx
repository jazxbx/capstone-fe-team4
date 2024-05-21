import styles from './Chip.module.css';

export function Chip() {
  return (
    <div>
      <div className={styles.dark}>Lunch</div>
      <div className={styles.default}>Lunch</div>
    </div>
  );
}
