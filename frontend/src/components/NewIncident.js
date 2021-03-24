import { useContext } from 'react';
import { NewIncidentContext } from '../contexts/NewIncidentContext';

import styles from '../styles/components/NewIncident.module.css';
import { FiArrowLeft } from 'react-icons/fi';

import { useRouter } from  'next/router';

export function NewIncident() {
  const {
    title, setTitle,
    description, setDescription,
    value, setValue,
    handleNewIncident
  } = useContext(NewIncidentContext);

  const router = useRouter();
  return (
    <div className={styles.newIncidentContainer}>
      <div className={styles.content}>
        <section>
          <img src="icons/logo.svg" alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
       
        <a 
        className="back-link"
        onClick={() => router.push('/Profile')}
        >
          <FiArrowLeft size={16} color="#e02041" />
          Voltar
        </a>
        </section>

        <form>
          <input
           placeholder="Título do caso"
           value={title} 
           onChange={text => setTitle(text.target.value)}
          />
          <textarea 
            placeholder="Descrição" 
            value={description}
            onChange={text => setDescription(text.target.value)}
          />
          <input 
            placeholder="Valor em reais"
            value={value}
            onChange={text => setValue(text.target.value)}
             />

          <button 
          className="button" 
          onClick={handleNewIncident}
          >
            Cadastrar
            </button>
        </form>
      </div>
    </div>
  );
}