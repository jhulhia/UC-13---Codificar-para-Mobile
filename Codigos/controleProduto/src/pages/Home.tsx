import React, {useState, useRef} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonNavLink } from '@ionic/react';
import './Home.css';
import { Produto } from '../models/Produto';
import Cadastro from './Cadastro';
const Home: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Controle de Estoque</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
         
      </IonContent>
    </IonPage>
  );
};

export default Home;
