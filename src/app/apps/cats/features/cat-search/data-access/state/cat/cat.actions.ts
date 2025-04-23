import {createAction, props} from '@ngrx/store';

export const getCats = createAction(
  '[Cats] Get Cats',
  props<{ breed?: string; limit?: number }>()
);
export const getCatsSuccess = createAction(
  '[Cats] Cats Loaded Success',
  props<{ payload: any[] }>()
);
export const getCatsFailure = createAction('[Cats] Cats Loaded Error');
export const changePage = createAction('[Cats] Cats Change Page', props<{ page: number }>());
