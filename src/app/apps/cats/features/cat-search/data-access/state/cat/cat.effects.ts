import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {of, tap} from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { CatService } from '../../services/cat.service';
import { getCats, getCatsSuccess, getCatsFailure } from './cat.actions';

@Injectable()
export class CatEffects {
  private actions$ = inject(Actions);
  private catService = inject(CatService);

  loadCats$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCats),
      exhaustMap(action =>
        this.catService.getAll(action?.breed, action.limit).pipe(
          map(cats => getCatsSuccess({ payload: cats })),
          catchError(() => of(getCatsFailure())
          )
        )
      )
    );
  });
}
