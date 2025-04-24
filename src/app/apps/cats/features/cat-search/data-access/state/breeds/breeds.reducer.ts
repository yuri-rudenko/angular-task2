import { createReducer, on } from '@ngrx/store';
import { getBreedsSuccess } from './breeds.actions';

export const initialState: any[] = [];

export const breedsReducer = createReducer(
  initialState,
  on(getBreedsSuccess, (state, { payload }) => [...payload]) // This state ie very simple, and is an array, not the object so changing the array requires editing the state completely
);
