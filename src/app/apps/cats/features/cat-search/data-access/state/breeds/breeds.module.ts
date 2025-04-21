import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiKeyInterceptor} from '../../../../../core/interceptors/api-key.interceptor';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {breedsReducer} from './breeds.reducer';
import {EffectsModule} from '@ngrx/effects';
import {BreedsEffects} from './breeds.effects';
import {AppComponent} from '../../../../../../../app.component';


@NgModule({
  declarations: [],
  imports: [BrowserModule, StoreModule.forRoot({breeds: breedsReducer}), EffectsModule.forRoot([BreedsEffects])],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiKeyInterceptor,
    multi: true
  }],
  bootstrap: []
})
export class BreedsModule {}
