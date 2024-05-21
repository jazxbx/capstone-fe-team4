import styles from './Header.module.css';
import { Button } from '../components/ui/Button';
import { FaRegUser } from 'react-icons/fa6';
import { CgDarkMode } from 'react-icons/cg';
import { TiThMenu } from 'react-icons/ti';

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div className={styles.hidden}>
          <TiThMenu />
        </div>
        <p className={styles.app}>tastebud</p>
      </div>
      <div className={styles.flex}>
        <div>
          <CgDarkMode className={styles.mode} />
        </div>
        <div className={styles.hidden}>
          <FaRegUser />
        </div>
        <div className={`${styles.button}`}>
          <Button>login</Button>
          {/* USING VARIANTS */}
          {/* <Button variant='danger'>login</Button> */}
        </div>
      </div>
    </div>
  );
}
