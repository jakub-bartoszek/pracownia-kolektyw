import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router';
import { routes } from './app.routes';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: 'AIzaSyAgdnw4ucnZH3JvSudWKpHfXrsB_vHbugM',
  authDomain: 'pracownia-kolektyw.firebaseapp.com',
  projectId: 'pracownia-kolektyw',
  storageBucket: 'pracownia-kolektyw.appspot.com',
  messagingSenderId: '724265975052',
  appId: '1:724265975052:web:d36baaa614ea972c691d29',
};

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, inMemoryScrollingFeature),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
  ],
};

bootstrapApplication(AppComponent, {
  providers: appConfig.providers,
});
