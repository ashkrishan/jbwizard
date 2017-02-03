import { Routes } from "@angular/router";

import { AuthorComponent} from "./author.component";
import { CommentComponent} from "./comment.component";


export const AUTHOR_ROUTES: Routes = [
   { path: '', redirectTo: 'list', pathMatch: 'full' },
   { path: 'list', component: AuthorComponent },
   { path: 'book', component: CommentComponent }
];