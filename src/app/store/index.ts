import { combineReducers } from 'redux';
const persistState = require('redux-localstorage');
import { counterReducer } from './counter.reducer';
import { IPathDemoData, pathDemoReducer } from './path-demo.reducer';
import { ISearchState, searchReducer } from './search.reducer';
import { IModelState, modelReducer } from '../reducers/model.reducer';

export class IAppState {
    counter?: number;
    pathDemo?: IPathDemoData;
    search?: ISearchState;
    model?: IModelState;
};

export const rootReducer = combineReducers<IAppState>({
    counter: counterReducer,
    pathDemo: pathDemoReducer,
    search: searchReducer,
    model: modelReducer
});

export const enhancers = [
    persistState('model', { key: 'ng2-redux/examples/model' }),
    persistState('counter', { key: 'ng2-redux/examples/counter' })
];