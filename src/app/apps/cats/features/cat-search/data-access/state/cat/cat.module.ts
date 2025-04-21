import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiKeyInterceptor} from '../../../../../core/interceptors/api-key.interceptor';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {catReducer} from './cat.reducer';
import {EffectsModule} from '@ngrx/effects';
import {CatEffects} from './cat.effects';
import {AppComponent} from '../../../../../../../app.component';


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
