import { Component, Input, Output } from "@angular/core";

import { Comment } from "./comment.model";
import { CommentService } from "./comment.service";

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class CommentComponent {
    @Input() comment: Comment;
    
    constructor(private commentService: CommentService) {
        console.log(this.comment)
    }

    onDelete() {
        this.commentService.deleteMessage(this.comment)
            .subscribe(
                result => console.log(result)
            );
    }
}