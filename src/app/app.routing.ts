import { Routes, RouterModule } from '@angular/router';

import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { AuthorComponent } from './comments/author.component';
import { AuthorListComponent } from './comments/author-list.component';


const APP_ROUTE: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    // { path: 'comments', component: CommentsComponent },
    {
        path: 'comments', component: CommentsComponent,
        children: [
            { path: '', redirectTo: 'author-list', pathMatch: 'full' },
            {path: 'author-list', component: AuthorListComponent, pathMatch: 'full'},
            {path: 'author-list/:id', component: AuthorComponent},
        ]

    },

];

export const routing = RouterModule.forRoot(APP_ROUTE);
