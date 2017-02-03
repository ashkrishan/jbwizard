import { Component } from "@angular/core";

@Component({
    selector: 'app-comments',
    template: `
        <div class="row">
            <app-comment-input></app-comment-input>
        </div>
        <hr>
        <div class="row">
            <app-comment-list></app-comment-list>
        </div>
    `
})
export class CommentsComponent {

}


  