import {createReducer, on} from '@ngrx/store';
import {changePage, getCats, getCatsFailure, getCatsSuccess} from './cat.actions';

export interface catsState {
  cats: any[];
  loading: boolean;
  page: number;
}

export const initialState: catsState = {
  cats: [],
  loading: false,
  page: 1,
};

export const catReducer = createReducer(
  initialState,
  on(getCats, state => ({ ...state, loading: true })),
  on(getCatsSuccess, (state, { payload }) => ({
    loading: false,
    cats: [...payload],
    page: 1
  })),
  on(getCatsFailure, (state) => ({
    ...state,
    loading: false,
    page: 1
  })),
  on(changePage, (state, {page}) => ({ ...state, page: page })),
)
