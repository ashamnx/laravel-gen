import { MODEL_ACTIONS } from '../model/model.actions';

import { tassign } from 'tassign';

export interface IModelState {
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

const INIT_STATE: IModelState = {
    name: 'Post',
    softDelete: false,
    migration: false,
    timestamps: false,
    fields: [
        {
            'name': 'id',
            'db_type': 'increment',
            'validations': 'string',
            'primary': true,
            'searchable': true,
            'fillable': true
        }

    ]
};

export function modelReducer(
    state = INIT_STATE,
    action): IModelState {

    switch (action.type) {
        case MODEL_ACTIONS.ADD_FIELD:
            state.fields.push(INIT_STATE.fields[0]);

            return tassign(state, {
                name: state.name,
                softDelete: state.softDelete,
                migration: state.migration,
                timestamps: state.timestamps,
                fields: state.fields
            });

        default:
            return state;
    }
}
