import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {CatEffects} from './apps/cats/features/cat-search/data-access/state/cat.effects';
import {catReducer} from './apps/cats/features/cat-search/data-access/state/cat.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      cats: catReducer
    }),
    provideEffects([CatEffects]),
    provideHttpClient(withInterceptorsFromDi()),
  ]
};
