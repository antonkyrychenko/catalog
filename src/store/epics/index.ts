import { combineEpics } from 'redux-observable';
import { Services } from '../../services';
import { RootAction } from '../actions';
import { RootState } from '../reducers';
import * as productEpics from './product.epics';
import * as authEpics from './auth.epics';

export default combineEpics<RootAction, RootAction, RootState, Services>(
    ...Object.values(productEpics),
    ...Object.values(authEpics),
);
