import { Component } from '@angular/core';

import { CommentService } from "./comments/comment.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [CommentService]
})
export class AppComponent {

}