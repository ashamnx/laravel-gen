import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { SearchActions } from './search/search.actions';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SelectByPathComponent } from './select-by-path/select-by-path.component';
import { SelectRootStateComponent } from './select-root-state/select-root-state.component';
import { RandomNumberService } from './common/random-number.service';
import 'hammerjs';

import { ModelCodeComponent } from './model/model-code.component';
import { ModelComponent } from './model/model.component'
import {ModelActions} from "./model/model.actions";

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import { PluralizePipe } from './pluralize.pipe';

import { NgReduxForms } from 'ng2-redux-form';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        NgReduxModule,
        MaterialModule.forRoot(),
        FlexLayoutModule.forRoot(),
        NgReduxForms
    ],
    declarations: [
        AppComponent,
        SearchComponent,
        SelectByPathComponent,
        SelectRootStateComponent,

        ModelCodeComponent,

        ModelComponent,

        PluralizePipe,

        SideMenuComponent,
    ],
    bootstrap: [ AppComponent ],
    providers: [
        SearchActions,
        RandomNumberService,
        ModelActions,
    ]
})
export class AppModule {}