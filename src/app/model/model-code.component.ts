import {Component, Input} from '@angular/core';

@Component({
    selector: 'model-code',
    templateUrl: './model-code.component.html',
})
export class ModelCodeComponent {

    @Input() model;


    download (filename) {
        let el = document.getElementById(filename).getElementsByClassName('language-php')[0].innerHTML;
        const pom = document.createElement('a');
        pom.setAttribute('href', 'data:application/php;charset=utf-8,' + encodeURI(el.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/<!--([^;]*)-->/g, '') ));
        pom.setAttribute('download', filename);

        if (document.createEvent) {
            let event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            pom.dispatchEvent(event);
        }
        else {
            pom.click();
        }
    }

    copy () {

        // Coming Soon
        // let el = document.getElementById(filename).getElementsByClassName('language-php')[0].select();
        // try {
        //     var successful = document.execCommand('copy');
        //     var msg = successful ? 'successful' : 'unsuccessful';
        //     console.log('Copying text command was ' + msg);
        // } catch (err) {
        //     console.log('Oops, unable to copy');
        // }
    }

}