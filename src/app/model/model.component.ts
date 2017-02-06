import {Component, OnInit} from '@angular/core';
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
    styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit{
    @select() models$: Observable<string>;
    @select(state => state.models[state.selectedModel || state.models[Object.keys(state.models)[0]].id]) model$: Observable<string>;
    @select('selectedModel') selectedModel$: Observable<string>;

    selectedModel;
    modelKeys: string[];

    constructor(public actions: ModelActions,
                private ngRedux: NgRedux<IAppState>) {
    }

    addNewField(id) {
        this.actions.addField(Number(id));
    }

    addNewRelation(id) {
        this.actions.addRelation(Number(id));
    }

    downloadAll () {
        // let el = document.getElementById(filename).getElementsByClassName('language-php')[0].innerHTML;
        // const pom = document.createElement('a');
        // pom.setAttribute('href', 'data:application/php;charset=utf-8,' + encodeURI(el.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/<!--([^;]*)-->/g, '') ));
        // pom.setAttribute('download', filename);
        //
        // if (document.createEvent) {
        //     let event = document.createEvent('MouseEvents');
        //     event.initEvent('click', true, true);
        //     pom.dispatchEvent(event);
        // }
        // else {
        //     pom.click();
        // }
    }

    ngOnInit () {
        this.selectedModel$.subscribe(val => {
            this.selectedModel = val;
        });

        this.models$.subscribe(val => {
            this.modelKeys = Object.keys(val);
        });
    }

}