import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{
    usuario: string;
    rol: string;
    token: string;
    refresh: string;
    mensaje: string;
  }>()
);