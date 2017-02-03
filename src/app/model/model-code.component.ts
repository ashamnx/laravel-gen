import {Component, state} from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Rx';
import { ModelActions } from '../model/model.actions';
import { IAppState } from '../store';

/**
 * Component that demonstrates merging input and selector streams
 * to react to user input.
 */
@Component({
selector: 'model-code',
templateUrl: './model-code.component.html',
})
export class ModelCodeComponent {
    @select(state => state.models[state.selectedModel]) model$: Observable<string>;
    @select('selectedModel') selectedModel$: Observable<string>;
    // @select(state => state.model.fields.map(n => n.db = '$table->'+n.db_type+'(\''+n.name+'\');')) dbfields$: Observable<any>;

    constructor(
        public actions: ModelActions,
        private ngRedux: NgRedux<IAppState>) {  }

    ngOnInit () {
        // this.model$.subscribe(function (ncie) {
        //     console.log(ncie);
        // });
    }

}