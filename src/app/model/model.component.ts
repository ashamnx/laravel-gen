import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Rx';
import { ModelActions } from './model.actions';
import { IAppState } from '../store';

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

  @select('model') model$: Observable<string>;

  constructor(
      public actions: ModelActions,
      private ngRedux: NgRedux<IAppState>) { }

  addNewField () {
      this.actions.addField();
  }

}