import { Epic } from "redux-observable";
import { RootAction } from "../actions";
import { RootState } from "../reducers";
import { Services } from "../../services";
import { isActionOf } from "typesafe-actions";
import { from, of } from "rxjs";
import { catchError, filter, mergeMap, switchMap } from 'rxjs/operators';
import { signInAction, signUpAction, signOutAction } from "../actions/auth/auth.actions";

type EpicType = Epic<RootAction, RootAction, RootState, Services>;

export const signUpEpic: EpicType =
    (action$, state$, { api }) => action$.pipe(
        filter(isActionOf(signUpAction.request)),
        switchMap(action => from(api.authService.signUp(action.payload)).pipe(
            mergeMap(() => of(signUpAction.success())),
            catchError(error => of(signUpAction.failure(error.message))))));

export const signInEpic: EpicType =
    (action$, state$, { api }) => action$.pipe(
        filter(isActionOf(signInAction.request)),
        switchMap(action => from(api.authService.signIn(action.payload)).pipe(
            mergeMap(() => of(signInAction.success())),
            catchError((error) => of(signInAction.failure(error.message))))));

export const signOutEpic: EpicType =
    (action$, state$, { api }) => action$.pipe(
        filter(isActionOf(signOutAction.request)),
        switchMap(() => from(api.authService.signOut()).pipe(
            mergeMap(() => of(signOutAction.success())),
            catchError((error) => of(signOutAction.failure(error.message))))));