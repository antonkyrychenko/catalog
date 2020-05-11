import { routerActions } from 'connected-react-router';
import { ActionType } from 'typesafe-actions';
import * as productActions from './product/product.actions';
import * as authActions from './auth/auth.actions';

const actions = {
    router: routerActions,
    auth: authActions,
    product: productActions,
};

export default actions;

export type RootAction = ActionType<typeof actions>;