import { NewIncidentProvider } from '../contexts/NewIncidentContext';
import { NewIncident } from '../components/NewIncident';

export default function NewIncidentPage() {
  return (    
    <NewIncidentProvider>
       <NewIncident />
    </NewIncidentProvider>
  )
}
