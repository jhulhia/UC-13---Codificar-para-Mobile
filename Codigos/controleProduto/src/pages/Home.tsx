import React, { useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonLabel, IonItem, useIonViewWillEnter } from '@ionic/react';
import { useState } from 'react';
import { ProdutoService } from '../service/ProdutoService';
import { useHistory } from 'react-router';

const Home: React.FC = () => {
  const history = useHistory();

  const [produtos, setProdutos] = useState<any[]>([]);

  //criando uma instância do serviço para manipular os produtos
  const service = new ProdutoService();

  //carregando os produtos ao montar o componente e sempre que a view entrar em foco
  useIonViewWillEnter(() => {
    carregarProdutos();
  });

  async function carregarProdutos() {
    const produtosCarregados = await service.listar();
    setProdutos(produtosCarregados);
  }
  
  //navegando para a página de cadastro
  function navegarParaCadastro(){
    history.push('/cadastro');
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Controle de Estoque</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <h2>Bem-vindo ao Controle de Estoque</h2>

        <IonButton onClick={navegarParaCadastro}> Cadastrar Produto</IonButton>
         
         <IonList>
          {produtos.map((produto, index) => {
            const estoque = produto.estoque ?? produto.quantidade ?? 0;
            return (
              <IonItem key={index}>
                <IonLabel>
                  {produto.nome} - R$ {produto.preco.toFixed(2)} | Estoque: {estoque}
                </IonLabel>
              </IonItem>
            );
          })}

         </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
