import { MODEL_ACTIONS } from '../model/model.actions';
import { tassign } from 'tassign';
import {log} from "util";

export interface IModelState {
    id: number;
    name: string;
    softDelete: boolean;
    migration: boolean;
    timestamps: boolean;
    fields: {
        'name': string,
        'db_type': string,
        'validations': string,
        'primary': boolean,
        'searchable': boolean,
        'fillable': boolean
    }[];
}

export interface IModelsState {
    models: IModelState[];
}

// const INIT_STATE: IModelState = {
//     id: + new Date(),
//     name: 'Post',
//     softDelete: false,
//     migration: false,
//     timestamps: false,
//     fields: [
//         {
//             'name': 'id',
//             'db_type': 'increment',
//             'validations': 'string',
//             'primary': true,
//             'searchable': true,
//             'fillable': true
//         }
//
//     ]
// };

const INIT_MODEL_STATE: IModelState[] = [];
const INIT_SELECTED_MODEL_STATE: number = null;

export function modelReducer(
    state = INIT_MODEL_STATE,
    action): IModelState[] {

    switch (action.type) {
        case MODEL_ACTIONS.ADD_FIELD:
            let newFields = [...state[action.payload.index].fields, {}];
            let stateWithNewField = Object.assign({}, state[action.payload.index], {}, {fields: newFields});
            let newState = state.map((val, index)=>{
                return (index === action.payload.index) ? stateWithNewField : val;
            });
            return newState;

        case MODEL_ACTIONS.ADD_MODEL:
            let update = Object.assign({}, {}, {id: + new Date()});
            return [...state, update];

        default:
            return state;
    }
}

export function selectedModelReducer(
    state = INIT_SELECTED_MODEL_STATE,
    action): number {

    switch (action.type) {
        case MODEL_ACTIONS.SELECT_MODEL:
            return action.payload.id;

        default:
            return state;
    }
}


