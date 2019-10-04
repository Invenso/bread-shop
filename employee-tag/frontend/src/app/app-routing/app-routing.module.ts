import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateTagComponent} from '../create/create-tag.component';
import {DownloadComponent} from '../download/download.component';

const routes: Routes = [
    {
        path: '',
        component: CreateTagComponent,
    },
    {
        path: 'download',
        component: DownloadComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {}
