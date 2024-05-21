import styles from './Button.module.css';

export function Button({ variant = 'default', children, onClick }) {
  return (
    <button onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
}
