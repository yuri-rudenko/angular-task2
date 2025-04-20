import {createReducer, on} from '@ngrx/store';
import {getCats, getCatsSuccess} from './cat.actions';

export const initialState: any[] = [];

export const catReducer = createReducer(
  initialState,
  on(getCatsSuccess, (_, { payload }) => [...payload])
)
