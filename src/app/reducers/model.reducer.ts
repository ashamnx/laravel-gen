import { MODEL_ACTIONS } from '../model/model.actions';
import { tassign } from 'tassign';
import {log} from "util";

export interface IFieldsState {
    name: string,
    db_type: string,
    validations: string,
    primary: boolean,
    searchable: boolean,
    fillable: boolean,
}

export interface IRelationState {
    model: string,
}

export interface IModelState {
    id: number;
    name: string;
    polymorphic : boolean
    softDelete: boolean;
    migration: boolean;
    timestamps: boolean;
    fields: IFieldsState[];
    relations: IFieldsState[];
}

export interface IModelsState {
    [index: number]: IModelState;
}

const INIT_STATE: IModelState = {
    id: + new Date(),
    name: 'Post',
    softDelete: true,
    polymorphic: false,
    migration: true,
    timestamps: true,
    fields: [],
    relations:[]
};


const INIT_MODELS_STATE: IModelsState = {};
const INIT_SELECTED_MODEL_STATE: number = null;

export function fieldReducer (
    state = [],
    action) {
    switch (action.type) {
        case MODEL_ACTIONS.ADD_FIELD:
            return [...state, {}];
        default:
            return state;
    }
}

export function relationReducer (
    state = [],
    action) {
    switch (action.type) {
        case MODEL_ACTIONS.ADD_RELATION:
            return [...state, {}];
        default:
            return state;
    }
}

export function modelReducer(
    state = INIT_MODELS_STATE,
    action): IModelsState {

    switch (action.type) {
        case MODEL_ACTIONS.ADD_FIELD:
            let updatedFields = { fields : fieldReducer(state[action.payload.id].fields, action)};
            let updatedModel = Object.assign({}, state[action.payload.id], updatedFields);
            return Object.assign({}, state, {[action.payload.id]:updatedModel});

        case MODEL_ACTIONS.ADD_RELATION:
            let updatedRelations = { relations : relationReducer(state[action.payload.id].fields, action)};
            let updatedEModel = Object.assign({}, state[action.payload.id], updatedRelations);
            return Object.assign({}, state, {[action.payload.id]:updatedEModel});

        case MODEL_ACTIONS.ADD_MODEL:
            let id = + new Date();
            let update = { [id] : Object.assign({}, INIT_STATE, {id: id})};
            return Object.assign({}, state, update);

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


