import { Routes, RouterModule } from "@angular/router";

import { CommentsComponent } from "./comments/comments.component";
import { AuthorListComponent} from "./comments/author-list.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import { AUTHOR_ROUTES } from "./comments/author.routes";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'author', pathMatch: 'full' },
    { path: 'author', component: AuthorListComponent, children: AUTHOR_ROUTES  },
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES },
    
    { path: 'comments', component: CommentsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);