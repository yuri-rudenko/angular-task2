import {createAction, props} from '@ngrx/store';

export const getCats = createAction('[Cats] Get Cats');
export const getCatsSuccess = createAction(
  '[Cats] Cats Loaded Success',
  props<{ payload: any[] }>()
);
export const getCatsFailure = createAction('[Cats] Cats Loaded Error');
