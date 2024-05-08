import styles from './Card.module.css';

export function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>Recipe name</div>
        <div>Tags</div>
      </div>
    </div>
  );
}
