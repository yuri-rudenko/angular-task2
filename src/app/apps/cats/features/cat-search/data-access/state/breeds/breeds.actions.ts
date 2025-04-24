import { createAction, props } from '@ngrx/store';

export const getBreeds = createAction(
  '[Breeds] Get Breeds',
);
export const getBreedsSuccess = createAction(
  '[Breeds] Breeds Loaded Success',
  props<{ payload: any[] }>()
);
export const getBreedsFailure = createAction('[Breeds] Breeds Loaded Error');
