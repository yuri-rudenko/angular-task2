import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { getBreedsSuccess, getBreeds, getBreedsFailure}  from './breeds.actions';
import { BreedsService } from '../../services/breeds.service';

@Injectable()
export class BreedsEffects {
  private actions$ = inject(Actions);
  private breedsService = inject(BreedsService);

  loadBreeds$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getBreeds),
      exhaustMap(action =>
        this.breedsService.getAll().pipe(
          map(breeds => getBreedsSuccess({ payload: breeds })),
          catchError(() => of(getBreedsFailure())
          )
        )
      )
    );
  });
}
