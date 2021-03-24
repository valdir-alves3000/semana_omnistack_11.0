import { LoginProvider } from '../contexts/LoginContext';
import styles from '../styles/components/Home.module.css';

import { Login } from '../components/Login';

export default function Home() {
  return (
    <div className={styles.container} >
      <LoginProvider>
      <Login />
      </LoginProvider>
    </div>
  )
}
