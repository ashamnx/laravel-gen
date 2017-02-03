import {Component, Input} from '@angular/core';

@Component({
    selector: 'model-code',
    templateUrl: './model-code.component.html',
})
export class ModelCodeComponent {

    @Input() model;

}