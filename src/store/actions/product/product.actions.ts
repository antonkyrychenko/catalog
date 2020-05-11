import { createAsyncAction, createAction } from 'typesafe-actions';
import { Product } from '../../../models/product';
import { ProductActionType } from './product-action-type';

export const addProductAction = createAsyncAction(
    ProductActionType.CREATE_PRODUCT_REQUEST,
    ProductActionType.CREATE_PRODUCT_SUCCESS,
    ProductActionType.CREATE_PRODUCT_FAILURE
)<Product, undefined, undefined>();

export const getProductAction = createAsyncAction(
    ProductActionType.GET_PRODUCTS_REQUEST,
    ProductActionType.GET_PRODUCTS_SUCCESS,
    ProductActionType.GET_PRODUCTS_FAILURE
)<undefined, Product[], undefined>();

export const removeProductAction = createAsyncAction(
    ProductActionType.REMOVE_PRODUCT_REQUEST,
    ProductActionType.REMOVE_PRODUCT_SUCCESS,
    ProductActionType.REMOVE_PRODUCT_FAILURE
)<string, undefined, undefined>();

export const updateProductAction = createAsyncAction(
    ProductActionType.UPDATE_PRODUCT_REQUEST,
    ProductActionType.UPDATE_PRODUCT_SUCCESS,
    ProductActionType.UPDATE_PRODUCT_FAILURE
)<Product, undefined, undefined>();