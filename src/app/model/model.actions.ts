import { NgRedux } from 'ng2-redux';

export const MODEL_ACTIONS = {
    UPDATE: 'UPDATE',
    MODEL_NOW: 'MODEL_NOW',
    UPDATE_SOFT_DELETE: 'UPDATE_SOFT_DELETE',
    UPDATE_MIGRATE: 'UPDATE_MIGRATE',
    UPDATE_TIMESTAMPS: 'UPDATE_TIMESTAMPS',
};

import { Injectable } from '@angular/core';
import {log} from "util";
@Injectable()
export class ModelActions {

    constructor(private ngRedux: NgRedux<any>) {}

    modelDispatch(name: string) {
        this.ngRedux.dispatch(this.model(name));
    }

    modelOptions(value: boolean, type: string) {
        this.ngRedux.dispatch(this.changeOption(value, type));
    }

    fetchResultDispatch(total: number) {
        this.ngRedux.dispatch(this.fetchNow(total));
    }

    private model(keyword: string) {
        return {
            type: MODEL_ACTIONS.UPDATE,
            payload: keyword
        };
    }

    private changeOption(value: boolean, type: string) {
        return {
            type: MODEL_ACTIONS[type],
            payload: value
        };
    }

    private fetchNow(total: number) {
        return {
            type: MODEL_ACTIONS.MODEL_NOW,
            payload: {
                total: total
            }
        };
    }
}