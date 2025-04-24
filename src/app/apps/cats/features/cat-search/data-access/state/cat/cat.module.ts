import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { catReducer } from './cat.reducer';
import { ApiKeyInterceptor } from '../../../../../core/interceptors/api-key.interceptor';
import { CatEffects } from './cat.effects';


@NgModule({
  declarations: [],
  imports: [BrowserModule, StoreModule.forRoot({cats: catReducer}), EffectsModule.forRoot([CatEffects])],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiKeyInterceptor,
    multi: true
  }],
  bootstrap: []
})
export class CatModule {}
