import styles from './Navbar.module.css';

export function Navbar() {
  const navItems = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Create Recipe'];
  return (
    <div>
      <nav>
        <ul className={styles.nav}>
          {navItems.map((item) => (
            <li key={item}>
              <a>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
