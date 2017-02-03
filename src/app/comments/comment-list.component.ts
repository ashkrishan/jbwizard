import { Component, OnInit } from "@angular/core";

import { Comment } from "./comment.model";
import { CommentService } from "./comment.service";

@Component({
    selector: 'app-comment-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-comment
                   [comment]="comment"
                    *ngFor="let comment of comments"></app-comment>
        </div>
    `
})
export class CommentListComponent implements OnInit {
    comments: Comment[];

    constructor(private commentService: CommentService) {}

    // ngOnInit() {
    //     this.commentService.getComments()
    //         .subscribe(
    //             (comments: Comment[]) => {
    //                 this.comments = comments;
    //             }
    //         );
    // }

    ngOnInit() {
        this.comments = this.commentService.getComments();
    }
}