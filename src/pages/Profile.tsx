import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent } from '@ionic/react';

const ProfilePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>My Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent />
    </IonPage>
  );
};

export default ProfilePage;
