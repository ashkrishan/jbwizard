import { Component } from "@angular/core";

@Component({
    selector: 'app-author-list',
    template: `
        <header class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                    <li routerLinkActive="active"><a [routerLink]="['list']">Author</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['book']">Books</a></li>
                </ul>
            </nav>
        </header>
        <div class="row spacing">
           <router-outlet></router-outlet>
        </div>
    `
})
export class AuthorListComponent {

}