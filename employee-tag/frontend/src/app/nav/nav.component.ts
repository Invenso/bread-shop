import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-nav',
    template: `
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand text-white" href="#">Bread shop</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

        </nav>`,
    styles: [`
		.navbar {
			background: #265eac;
		}

		.nav-link {
            color: white !important;
		}
    `]
})
export class NavComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
