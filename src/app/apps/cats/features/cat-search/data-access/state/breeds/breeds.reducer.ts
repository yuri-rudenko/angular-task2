import {createReducer, on} from '@ngrx/store';
import {getBreedsSuccess} from './breeds.actions';

export const initialState: any[] = [];

export const breedsReducer = createReducer(
  initialState,
  on(getBreedsSuccess, (_, { payload }) => [...payload])
)
