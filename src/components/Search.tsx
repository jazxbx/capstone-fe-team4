import styles from './Search.module.css';
import { IoMdSearch } from 'react-icons/io';

export function Search() {
  return (
    <div className={styles.container}>
      {<IoMdSearch />}
      <input
        className={styles.searchbar}
        type='text'
        placeholder='what are we cooking today?'
      />
    </div>
  );
}
