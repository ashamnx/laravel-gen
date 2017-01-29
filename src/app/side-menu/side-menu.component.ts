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
    @select() models$: Observable<string>;
    @select('selectedModel') selectedModel$: Observable<string>;

    constructor(public actions: ModelActions,
                private ngRedux: NgRedux<IAppState>) {
    }

    ngOnInit () {

    }

    selectModel(id: number) {
        console.log('id', id);
        this.actions.selectModel(id);
    }

}
