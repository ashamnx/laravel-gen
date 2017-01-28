import { Component } from '@angular/core';
import { NgRedux, DevToolsExtension } from 'ng2-redux';
import { IAppState, rootReducer, enhancers } from './store/index';
import {composeReducers} from "ng2-redux-form/dist/source";
const createLogger = require('redux-logger');
import { defaultFormReducer } from 'ng2-redux-form';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: './app.component.html',
})

export class AppComponent {
  constructor(
      private ngRedux: NgRedux<IAppState>,
      private devTool: DevToolsExtension) {

    this.ngRedux.configureStore(
        composeReducers(rootReducer, defaultFormReducer()),
        {},
        [ createLogger() ],
        [ ...enhancers, devTool.isEnabled() ? devTool.enhancer() : f => f]);
  }
}