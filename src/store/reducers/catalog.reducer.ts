
import { Product } from '../../models/product';
import { getProductAction, addProductAction } from '../actions/product/product.actions';
import { createReducer } from 'typesafe-actions';

export interface CatalogState {
    products: Product[] | null;
}

const initialState: CatalogState = {
    products: null
};

const catalogReducer = createReducer(initialState)
    .handleAction(getProductAction.success, (state, action) => ({ ...state, products: action.payload }));

export default catalogReducer;
