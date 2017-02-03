import {Component} from '@angular/core';
import {NgRedux, select} from 'ng2-redux';
import {Observable} from 'rxjs/Rx';
import {ModelActions} from './model.actions';
import {IAppState} from '../store';

/**
 * Component that demonstrates merging input and selector streams
 * to react to user input.
 */
@Component({
    selector: 'model',
    templateUrl: './model.component.html',
    styleUrls: ['./model.component.css']
})
export class ModelComponent {
    // @select(state => state.models[Object.keys(state.models)[0]]) models$: Observable<string>;
    @select(state => state.models[state.selectedModel || state.models[Object.keys(state.models)[0]].id]) model$: Observable<string>;
    @select('selectedModel') selectedModel$: Observable<string>;
    // @select(state => state.model.fields.filter(n => n.fillable == true)) fields$: Observable<any>;

    currentModelIndex;
    selectedModel;

    constructor(public actions: ModelActions,
                private ngRedux: NgRedux<IAppState>) {
        this.currentModelIndex = 0;
    }


    addNewField(id) {
        this.actions.addField(Number(id));
    }

    addNewModel() {
        this.actions.addModel();
    }

    ngOnInit () {
        this.selectedModel$.subscribe(val => {
            this.selectedModel = val;
        });
    }

}