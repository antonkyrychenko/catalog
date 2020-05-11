import { createAsyncAction, createAction } from 'typesafe-actions';
import { Product } from '../../../models/product';
import { AuthActionType } from './auth-action-type';
import { UserCredentials } from '../../../models/user-credentials';

export const signUpAction = createAsyncAction(
    AuthActionType.SIGN_UP_REQUEST,
    AuthActionType.SIGN_UP_SUCCESS,
    AuthActionType.SIGN_UP_FAILURE
)<UserCredentials, undefined, string>();

export const signInAction = createAsyncAction(
    AuthActionType.SIGN_IN_REQUEST,
    AuthActionType.SIGN_IN_SUCCESS,
    AuthActionType.SIGN_IN_FAILURE
)<UserCredentials, undefined, string>();

export const signOutAction = createAsyncAction(
    AuthActionType.SIGN_OUT_REQUEST,
    AuthActionType.SIGN_OUT_SUCCESS,
    AuthActionType.SIGN_OUT_FAILURE
)<undefined, undefined, string>();