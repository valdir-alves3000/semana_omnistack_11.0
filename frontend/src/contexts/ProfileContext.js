import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import { useRouter } from 'next/router';
import api from '../services/api';

export const ProfileContext = createContext({});

export function ProfileProvider({
  children,
  ...rest
}) {
  const [incidents, setIncidents] = useState([]);
  const ongId = Cookies.get('ongId');
  const ongName = Cookies.get('ongName');

  const router = useRouter();

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ongId]);

  async function hanleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear();

    router.push('/');
  }

   return (
     <ProfileContext.Provider
     value={{
       ongName,
       incidents,
       handleLogout,
       hanleDeleteIncident
     }}
     >
       {children}
     </ProfileContext.Provider>
   );
}
