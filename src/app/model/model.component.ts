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
  // Selected observables to test async pipe model.
  @select('model') model$: Observable<string>;

  // Members to test subscribe model.
  name: string;
  softdeletes = false;
  migration = false;
  timestamps = false;

  constructor(
      public actions: ModelActions,
      private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    // Exercise the flow where a state change results in a new action.
    // this.model$.subscribe(keyword => {
    //   console.log('du', keyword);
    //   if (keyword != '') {
    //     this.actions.fetchResultDispatch(keyword.length)
    //   }
    // });

  }

  handleKeyUp(value) {
    this.name = value;
    this.actions.modelDispatch(value);
  }

  optionChange(value, type) {
    this.actions.modelOptions(value, type);
  }

}