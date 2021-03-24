import { createContext, useState } from 'react';

import { useRouter } from 'next/router';
import api from '../services/api';

export const NewIncidentContext = createContext({});

export function NewIncidentProvider({
  children,
  ...rest
}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');

  const router = useRouter();
  
  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      });
      
      router.push('/Profile')

    } catch (error) {
      alert('Erro ao cadastrar, tente novamente');
    }
  }

  return (
    <NewIncidentContext.Provider
    value={{
      title, setTitle,
      description, setDescription,
      value, setValue,
      handleNewIncident
    }}
    >
      {children}
    </NewIncidentContext.Provider>
  );
}