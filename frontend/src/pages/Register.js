import { RegisterProvider } from '../contexts/RegisterContext';

import { Register } from '../components/Register';

export default function RegisterPage() {
  return (
    <RegisterProvider>
      <Register />
    </RegisterProvider>
  )
}
