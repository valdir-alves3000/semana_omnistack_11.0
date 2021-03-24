import { useContext } from 'react';
import { RegisterContext } from '../contexts/RegisterContext';

import styles from '../styles/components/Register.module.css';
import { FiArrowLeft } from 'react-icons/fi';

import { useRouter } from  'next/router';

export function Register() {
  const router = useRouter();
  const { 
    handleRegister,
    name, setName,
    email, setEmail,
    whatsapp, setWhatsapp,
    city, setCity,
    state, setState,
    password, setPassword
   } = useContext(RegisterContext);

  return (
    <div className={styles.registerContainer}>
      <div className={styles.content}>
        <section>
          <img src="icons/logo.svg" alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os cacos da sua ONG.</p>
       
        <a 
        className="back-link"
        onClick={() => router.push('/')}
        >
          <FiArrowLeft size={16} color="#e02041" />
          Já tenho cadastro
        </a>
        </section>

        <form onSubmit={handleRegister}>
          <input 
          placeholder="Nome da Ong"
          value={name}
          onChange={text => setName(text.target.value)}
           />
          <input 
          placeholder="E-mail" 
          type="email" 
          value={email}
          onChange={text => setEmail(text.target.value)}
          />

          <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={text => setPassword(text.target.value)}
          />

          <input 
          placeholder="Whatsapp" 
          value={whatsapp}
          onChange={text => setWhatsapp(text.target.value)}
          />

          <div className={styles.inputGroup}>
            <input 
            type="text" 
            placeholder="Cidade" 
            value={city}
            onChange={text => setCity(text.target.value)}
            />
            <input 
            style={{width: 80}}
            type="text" 
            placeholder="UF" 
            value={state}
            onChange={text => setState(text.target.value)}
            />
          </div>

          <button 
          type="submit"
          className="button" 
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}