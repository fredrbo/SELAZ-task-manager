import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { environment } from '../environments/environment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_NATIVE_DATE_FORMATS, NativeDateAdapter } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  provideFirestore(() => getFirestore()),
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes), provideClientHydration(), provideAnimationsAsync(),
  { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
  { provide: DateAdapter, useClass: NativeDateAdapter },
  { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS },
  { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },



  ]
};
