import { useContext } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';

import styles from '../styles/components/Profile.module.css';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { useRouter } from 'next/router';

export function Profile() {
  const {
    ongName,
    incidents,
    handleLogout,
    hanleDeleteIncident,
  } = useContext(ProfileContext);
  const router = useRouter();

  return (
    <div className={styles.profileContainer}>
      <header>
        <img src="icons/logo.svg" alt="Be The Hero" />
        <span>Bem Vindo, {ongName}</span>

        <a
          onClick={() => router.push('/NewIncident')}
          className="button"
        >
          Cadastrar novo caso
        </a>
        <button
          type="button"
          onClick={handleLogout}
        >
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>
      <ul>
        {
          incidents.map(incident => (
            <li key={incident.id}>
              <strong>CASO:</strong>
              <p>{incident.title}</p>

              <strong>DESCRIÇÃO:</strong>
              <p>{incident.description}</p>

              <strong>VALOR:</strong>
              <p>{
                Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(incident.value)
              }
              </p>

              <button 
              type="button"
              onClick={() => hanleDeleteIncident(incident.id)}
              >
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
