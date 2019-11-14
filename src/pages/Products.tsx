import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import ProductModel from 'src/models/ProductModel';
import ProductComponent from './../components/ProductComponent';
import MainBannerComponent from './../components/MainBannerComponent';
import BannerModel from 'src/models/BannerModel';

const banner: BannerModel = {
  title: 'Promoção do dia',
  subtitle: 'COMPRE 3 E PAGUE 2',
  img: 'banner.png',
  description: 'Promocao valida de segunda a sexta'
}

const productList: Array<ProductModel> = [
  {title: "Guinness Original 500M", subtitle: "", img: "", description: "", price: 9.90},
  {title: "Dogbeer Sabor Frango 355Ml IPET", subtitle: "", img: "", description: "", price: 6.70},
  {title: "Kit Natal ANGELONI Beer Pack", subtitle: "", img: "", description: "", price: 32.50}
];

const renderItems = (data: Array<ProductModel>) => {
  return (
    data.map((product, i) => 
      <IonItem key={i}>
        <ProductComponent product={product} />
      </IonItem>
    )
  );
}

const ProductsPage: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Produtos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        
        <MainBannerComponent banner={banner} />

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Destaques</IonLabel>
          </IonListHeader>
          {renderItems(productList)}
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default ProductsPage;
