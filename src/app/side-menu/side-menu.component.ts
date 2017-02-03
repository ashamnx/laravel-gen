import {Component, OnInit} from '@angular/core';
import {NgRedux, select} from 'ng2-redux';
import {Observable} from 'rxjs/Rx';
import {ModelActions} from '../model/model.actions';
import {IAppState} from '../store';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
    @select(state => state.models) models$: Observable<string>;
    // @select('selectedModel') selectedModel$: Observable<string>;

    modelKeys: string[];
    constructor(public actions: ModelActions,
                private ngRedux: NgRedux<IAppState>) {
    }

    ngOnInit () {
        this.models$.subscribe(val => {
            this.modelKeys = Object.keys(val);
        });
    }

    selectModel(id: number) {
        console.log('id', id);
        this.actions.selectModel(id);
    }

}
