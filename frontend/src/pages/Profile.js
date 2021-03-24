import { ProfileProvider } from '../contexts/ProfileContext';
import { Profile } from '../components/Profile';

export default function ProfilePage() {
  return (  
    <ProfileProvider>  
     <Profile />
     </ProfileProvider>
  )
}
