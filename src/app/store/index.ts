import { combineReducers } from 'redux';
const persistState = require('redux-localstorage');
import { IModelState, modelReducer, selectedModelReducer } from '../reducers/model.reducer';

export class IAppState {
    models?: IModelState;
}

export const rootReducer = combineReducers<IAppState>({
    selectedModel: selectedModelReducer,
    models: modelReducer
});

export const enhancers = [
    persistState('models', { key: 'ng2-redux/examples/model' }),
    persistState('selectedModel', { key: 'ng2-redux/examples/selectedModel' }),
];