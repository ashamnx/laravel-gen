import { NgRedux } from 'ng2-redux';

export const MODEL_ACTIONS = {
    ADD_FIELD: 'ADD_FIELD',
};

import { Injectable } from '@angular/core';
import {log} from "util";
@Injectable()
export class ModelActions {

    constructor(private ngRedux: NgRedux<any>) {}

    addField() {
        this.ngRedux.dispatch(this._addField());
    }

    private _addField() {
        return {
            type: MODEL_ACTIONS.ADD_FIELD,
            payload: {}
        };
    }

}