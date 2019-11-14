import React from 'react';
import { IonCard,IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

import BannerModel from 'src/models/BannerModel';

type PropType = {
    banner: BannerModel
}

const MainBannerComponent: React.FC<PropType> = (props: PropType) => {
  return (
    <IonCard className="welcome-card">
        <img src="/assets/shapes.svg" alt="" />
        <IonCardHeader>
            <IonCardSubtitle>Descontos do dia</IonCardSubtitle>
            <IonCardTitle>Promoção compre 3 e ganhe 1</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
        <p>Super pack</p>
        </IonCardContent>
    </IonCard>

  );
};

export default MainBannerComponent;