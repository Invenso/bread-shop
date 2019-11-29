import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-root',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <!--The content below is only a placeholder and can be replaced.-->
        <app-nav class="mb-4"></app-nav>
        <router-outlet></router-outlet>
    `,
    styles: [`
		:host {
			display: flex;
			flex-direction: column;
		}
    `]
})
export class AppComponent {

}
