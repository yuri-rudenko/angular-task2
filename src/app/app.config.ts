import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { CatEffects } from './apps/cats/features/cat-search/data-access/state/cat/cat.effects';
import { catReducer } from './apps/cats/features/cat-search/data-access/state/cat/cat.reducer';
import { breedsReducer } from './apps/cats/features/cat-search/data-access/state/breeds/breeds.reducer';
import { BreedsEffects } from './apps/cats/features/cat-search/data-access/state/breeds/breeds.effects';
import { ApiKeyInterceptor } from './apps/cats/core/interceptors/api-key.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      cats: catReducer,
      breeds: breedsReducer,
    }),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true
    },
    provideEffects([CatEffects, BreedsEffects]),
    provideHttpClient(withInterceptorsFromDi()),
  ]
};
