import { createContext, useState } from 'react';
import api from '../services/api';
import { useRouter } from 'next/router';

export const RegisterContext = createContext({});

export function RegisterProvider({
  children,
  ...rest
}) {

  const [name, setName] =  useState('');
  const [email, setEmail] =  useState('');
  const [whatsapp, setWhatsapp] =  useState('');
  const [city, setCity] =  useState('');
  const [state, setState] =  useState('');
  const [password, setPassword] =  useState('');

  const router = useRouter();

  async function handleRegister(e) {
    e.preventDefault();

    if(!name || !email || !whatsapp || !city || !state || !password) {
      return alert('Preencha todos os campos');
    }

    const data = {
      name,
      email,
      whatsapp,
      city,
      state,
      password
    };

    try {
      const response = await api.post('ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      router.push('/');
      
    } catch (error) {
      alert('Erro no cadastro!')      
    }
  }

  return (
    <RegisterContext.Provider
    value={{
      name, setName,
      email, setEmail,
      whatsapp, setWhatsapp,
      city, setCity,
      state, setState,
      password, setPassword,
      handleRegister,
    }}
    >
      {children}
    </RegisterContext.Provider>
  );
}