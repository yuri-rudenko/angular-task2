import {createReducer, on} from '@ngrx/store';
import {getCats, getCatsFailure, getCatsSuccess} from './cat.actions';

export interface catsState {
  cats: any[];
  loading: boolean;
}

export const initialState: catsState = {
  cats: [],
  loading: false,
};

export const catReducer = createReducer(
  initialState,
  on(getCats, state => ({ ...state, loading: true })),
  on(getCatsSuccess, (_, { payload }) => ({
    loading: false,
    cats: [...payload]
  })),
  on(getCatsFailure, (state) => ({
    ...state,
    loading: false,
  }))
)
