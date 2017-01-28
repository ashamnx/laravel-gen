import { Component } from '@angular/core';
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
    @select('model') model$: Observable<string>;

    keyword: string;

    constructor(
        public actions: ModelActions,
        private ngRedux: NgRedux<IAppState>) {  }



}