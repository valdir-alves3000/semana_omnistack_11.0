import { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';

import { FiLogIn } from 'react-icons/fi';
import { useRouter } from 'next/router';

import styles from '../styles/components/Login.module.css';

export function Login() {
  const {
    id, setId,
    password, setPassword,
    handleLogin,
  } = useContext(LoginContext);
  const router = useRouter();

  return (
    <div className={styles.logoContainer}>
      <section className={styles.form}>
       
        <img src="icons/logo.svg" alt=""/>
        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>

          <input 
          type="text" 
          placeholder="Sua ID"
          value={id}
          onChange={text => setId(text.target.value)}
          />

          <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={text => setPassword(text.target.value)}
          />

          <button
            className="button"
           type="submit" 
           >
             Entrar
           </button>
        
          <a 
          className="back-link"
          onClick={() => router.push('/Register')}>
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </a>
        </form>
      </section>

      <img src="icons/heroes.png" alt=""/>
    </div>
  )
}