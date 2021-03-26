import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import api from '../services/api';

export const LoginContext = createContext({});

export function LoginProvider({
  children,
  ...rest
}) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();

    if(!id || !password) {
      return alert('Preencha seu ID')
    }

    try {
      const response = await api.post('session', {id, password});

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      router.push('/Profile')
      
    } catch (error) {
      alert('Falha no login, tente novamente')
    }
  }

useEffect(() => {
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', '');


},[]);

  return (
    <LoginContext.Provider
    value={{
      id, setId,
      password, setPassword,
      handleLogin,
    }}
    >
      {children}
    </LoginContext.Provider>
  );
}
