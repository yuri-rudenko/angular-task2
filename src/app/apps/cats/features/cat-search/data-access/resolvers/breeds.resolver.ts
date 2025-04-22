import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import {getBreeds, getBreedsSuccess} from '../state/breeds/breeds.actions';

@Injectable({ providedIn: 'root' })
export class BreedsResolver implements Resolve<boolean> {
  constructor(
    private store: Store,
    private actions$: Actions
  ) {}

  resolve(): Observable<boolean> {
    this.store.dispatch(getBreeds());

    return this.actions$.pipe(
      ofType(getBreedsSuccess),
      take(1),
      map(() => true)
    );
  }
}
