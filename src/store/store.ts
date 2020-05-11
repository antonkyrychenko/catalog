import { createEpicMiddleware } from 'redux-observable';
import services, { Services } from '../services';
import { applyMiddleware, createStore, Store } from 'redux';
import rootReducer, { RootState } from './reducers';
import rootEpic from './epics';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import history from './history';
import { RootAction } from './actions';

const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, Services>({
    dependencies: services
});

export default (initialState?: RootState): Store<RootState> => {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),
                epicMiddleware
            )
        )
    );

    epicMiddleware.run(rootEpic);

    return store;
}

declare module 'typesafe-actions' {
    interface Types {
        RootAction: RootAction,
        RootState: RootState
    }
}

