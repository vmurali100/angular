import { createReducer, on } from '@ngrx/store';
import { visitMice } from './app.actions';
import { AppState } from './app.state';

const initialState: AppState = {
  miceVisited: false,
};

export const appReducer = createReducer(
  initialState,
  on(visitMice, (state) => ({
    ...state,
    miceVisited: true,
  }))
);
