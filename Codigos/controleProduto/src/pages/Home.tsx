import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Controle de Estoque</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
         <br />
        <IonInput label="Descrição do Produto" labelPlacement="floating" fill="outline" placeholder="Digite aqui"></IonInput> 
      
      <br />

        <IonInput label="Preço" labelPlacement="floating" fill="outline" placeholder="Digite aqui"></IonInput>
      <br />

        <IonInput label="Estoque" labelPlacement="floating" fill="outline" placeholder="Digite aqui"></IonInput>
      </IonContent>
    </IonPage>
  );
};

export default Home;
