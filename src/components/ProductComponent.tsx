import React from 'react';
import { IonCard,IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import BannerModel from 'src/models/ProductModel';

type PropType = {
    product: BannerModel
}

const ProductComponent: React.FC<PropType> = (props: PropType) => {
  return (
    <IonCard>
        <img src="/assets/guinness.jpeg" alt={props.product.title} />
        <IonCardHeader>
            <IonCardSubtitle>{props.product.title}</IonCardSubtitle>
            <IonCardTitle>{props.product.subtitle}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            <p>{props.product.description}</p>
        </IonCardContent>
    </IonCard>
  );
};

export default ProductComponent;