import { Action, createReducer, on } from '@ngrx/store';
import { loginSuccess } from './auth.action';
import { AuthState, initialState } from './auth.state';

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    console.log(action);
    return {
      ...state,
      user: action.user,
    };
  })
);

export function AuthReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}