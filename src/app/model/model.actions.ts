import { NgRedux } from 'ng2-redux';
import { Injectable } from '@angular/core';

export const MODEL_ACTIONS = {
    ADD_MODEL: 'ADD_MODEL',
    ADD_FIELD: 'ADD_FIELD',
    SELECT_MODEL: 'SELECT_MODEL',
};

@Injectable()
export class ModelActions {

    constructor(private ngRedux: NgRedux<any>) {}

    addField(id: number) {
        this.ngRedux.dispatch(this._addField(id));
    }

    addModel() {
        this.ngRedux.dispatch(this._addModel());
    }

    selectModel(id: number) {
        this.ngRedux.dispatch(this._selectModel(id));
    }

    private _addField(id: number) {
        return {
            type: MODEL_ACTIONS.ADD_FIELD,
            payload: {
                id: id
            }
        };
    }

    private _addModel() {
        return {
            type: MODEL_ACTIONS.ADD_MODEL,
            payload: {}
        };
    }

    private _selectModel(id: number) {
        return {
            type: MODEL_ACTIONS.SELECT_MODEL,
            payload: {
                id: id
            }
        };
    }

}