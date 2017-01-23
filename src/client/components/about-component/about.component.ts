﻿import { Component } from '@angular/core';

import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
    selector: 'snapp-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    providers: [Modal]
})

export default class AboutComponent {
    constructor(public modal: Modal) {

    }

    onClick() {
        this.modal.alert()
        .size('lg')
        .title('About')
        .body(`
            <b>Snapp<i>!</i></b> was developed in 2015 by <a href="https://github.com/Rydion" target="_blank"><b>Adrian Hintze</b></a>.
			<br><br>
            Original idea by <a href="https://github.com/bromagosa" target="_blank" class="linked-name">Bernat Romagosa</a>
            (<a href="http://edutec.citilab.eu/" target="_blank" class="linked-institution">Edutec</a>-<a href="http://citilab.eu/en" target="_blank" class="linked-institution">Citilab</a>).
			<br><br>
			<b>Snapp<i>!</i></b> is open source and available at <a href="https://github.com/Rydion/Snapp" target="_blank" class="linked-institution">GitHub</a>.
			<br><br>
			If you have any suggestions or find any issues with the application contact the author at <b>hintze.adrian AT gmail DOT com</b> or open a new GitHub issue.
            <br><br>
            Version 2.0.0-RC2
        `)
        .open();
    }
}