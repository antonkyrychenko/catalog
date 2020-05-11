import { Epic, ofType } from "redux-observable";
import { RootAction } from "../actions";
import { RootState } from "../reducers";
import { Services } from "../../services";
import { isActionOf } from "typesafe-actions";
import { from, of } from "rxjs";
import { catchError, filter, mergeMap, switchMap } from 'rxjs/operators';
import { addProductAction, getProductAction, removeProductAction, updateProductAction } from "../actions/product/product.actions";
import { ProductActionType } from "../actions/product/product-action-type";

type EpicType = Epic<RootAction, RootAction, RootState, Services>;

export const addProductEpic: EpicType =
    (action$, state$, { api }) => action$.pipe(
        filter(isActionOf(addProductAction.request)),
        switchMap(action => from(api.productService.addProduct(action.payload)).pipe(
            mergeMap(response => of(addProductAction.success())),
            catchError(error => of(addProductAction.failure())))));

export const addProductSuccessEpic: EpicType =
    (action$, state$, { api }) => action$.pipe(
        ofType(ProductActionType.CREATE_PRODUCT_SUCCESS),
        switchMap(action => of(getProductAction.request())));

export const getProductsEpic: EpicType =
    (action$, state$, { api }) => action$.pipe(
        filter(isActionOf(getProductAction.request)),
        switchMap(action => from(api.productService.getProducts()).pipe(
            mergeMap(response => of(getProductAction.success(response))))));

export const removeProductsEpic: EpicType =
    (action$, state$, { api }) => action$.pipe(
        filter(isActionOf(removeProductAction.request)),
        switchMap(action => from(api.productService.removeProduct(action.payload)).pipe(
            mergeMap(response => of(removeProductAction.success())))));

export const removeProductSuccessEpic: EpicType =
    (action$, state$, { api }) => action$.pipe(
        ofType(ProductActionType.REMOVE_PRODUCT_SUCCESS),
        switchMap(action => of(getProductAction.request())));

export const updateProductEpic: EpicType =
    (action$, state$, { api }) => action$.pipe(
        filter(isActionOf(updateProductAction.request)),
        switchMap(action => from(api.productService.updateProduct(action.payload)).pipe(
            mergeMap(response => of(updateProductAction.success())),
            catchError(error => { console.log(error); return of(updateProductAction.failure())}))));

export const updateProductSuccessEpic: EpicType =
    (action$, state$, { api }) => action$.pipe(
        ofType(ProductActionType.UPDATE_PRODUCT_SUCCESS),
        switchMap(action => of(getProductAction.request())));