
import { Product } from '../../models/product';
import { getProductAction, addProductAction } from '../actions/product/product.actions';
import { createReducer } from 'typesafe-actions';
import { signInAction, signUpAction, signOutAction } from '../actions/auth/auth.actions';

export interface AuthState {
    errors: {
        signUp: string;
        signIn: string;
        signOut: string;
    }
}

const initialState: AuthState = {
    errors: {
        signUp: "",
        signIn: "",
        signOut: "",
    }
};

const authReducer = createReducer(initialState)
    .handleAction(signInAction.failure, (state, action) => ({
        ...state,
        errors: {
            ...state.errors,
            signIn: action.payload
        }
    }))

    .handleAction(signUpAction.failure, (state, action) => ({
        ...state,
        errors: {
            ...state.errors,
            signUp: action.payload
        }
    }))

    .handleAction(signOutAction.failure, (state, action) => ({
        ...state,
        errors: {
            ...state.errors,
            signOut: action.payload
        }
    }))

export default authReducer;
