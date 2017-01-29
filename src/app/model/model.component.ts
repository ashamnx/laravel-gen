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

    @select( state => state.models.find((val) => {return val.id === state.selectedModel})) model$: Observable<string>;
    @select( state => state.models.findIndex((val) => {return val.id === state.selectedModel})) modelIndex$: Observable<string>;
    @select('selectedModel') selectedModel$: Observable<string>;
    // @select(state => state.model.fields.filter(n => n.fillable == true)) fields$: Observable<any>;

    constructor(public actions: ModelActions,
                private ngRedux: NgRedux<IAppState>) {
    }

    addNewField(id: number) {
        this.actions.addField(id);
    }

    addNewModel() {
        this.actions.addModel();
    }

    ngOnInit () {
        this.model$.subscribe(item => {
            console.log('it', item);
        });
    }

}