import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {CatEffects} from './apps/cats/features/cat-search/data-access/state/cat/cat.effects';
import {catReducer} from './apps/cats/features/cat-search/data-access/state/cat/cat.reducer';
import {breedsReducer} from './apps/cats/features/cat-search/data-access/state/breeds/breeds.reducer';
import {BreedsEffects} from './apps/cats/features/cat-search/data-access/state/breeds/breeds.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      cats: catReducer,
      breeds: breedsReducer,
    }),
    provideEffects([CatEffects, BreedsEffects]),
    provideHttpClient(withInterceptorsFromDi()),
  ]
};
