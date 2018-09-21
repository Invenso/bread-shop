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

            <!--<div class="collapse navbar-collapse" id="navbarSupportedContent">-->
                <!--<ul class="navbar-nav mr-auto">-->
                    <!--<li class="nav-item active">-->
                        <!--<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>-->
                    <!--</li>-->
                    <!--<li class="nav-item">-->
                        <!--<a class="nav-link" href="#">Link</a>-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</div>-->
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
