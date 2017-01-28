import { MODEL_ACTIONS } from '../model/model.actions';

import { tassign } from 'tassign';

export interface IModelState {
    name: string;
    softDelete: boolean;
    migrate: boolean;
    timestamps: boolean;
}

const INIT_STATE: IModelState = {
    name: 'Post',
    softDelete: false,
    migrate: false,
    timestamps: false
};

export function modelReducer(
    state = INIT_STATE,
    action): IModelState {

    switch (action.type) {
        case MODEL_ACTIONS.UPDATE:
            return tassign(state, {
                name: action.payload,
                softDelete: state.softDelete,
                migrate: state.migrate,
                timestamps: state.timestamps
            });
        // case MODEL_ACTIONS.MODEL_NOW:
        //     let total = action.payload.total;
        //     return tassign(state, {
        //         onSearch: state.onSearch,
        //         keyword: state.keyword,
        //         total
        //     });

        case MODEL_ACTIONS.UPDATE_SOFT_DELETE:
            let softdel = action.payload;
            return tassign(state, {
                name: state.name,
                softDelete: softdel,
                migrate: state.migrate,
                timestamps: state.timestamps
            });

        case MODEL_ACTIONS.UPDATE_MIGRATE:
            return tassign(state, {
                name: state.name,
                softDelete: state.softDelete,
                migrate: action.payload,
                timestamps: state.timestamps
            });

        case MODEL_ACTIONS.UPDATE_TIMESTAMPS:
            return tassign(state, {
                name: state.name,
                softDelete: state.softDelete,
                migrate: state.migrate,
                timestamps: action.payload
            });

        default:
            return state;
    }
}
