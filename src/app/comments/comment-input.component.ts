import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { CommentService } from "./comment.service";
import { Comment } from "./comment.model";

@Component({
    selector: 'app-comment-input',
    templateUrl: './comment-input.component.html'
})
export class CommentInputComponent {
    comment: Comment;

    constructor(private commentService: CommentService) {}

    onSubmit(form: NgForm) {
        const comment = new Comment(form.value.content, 'Josh');
        this.commentService.addComment(comment)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        form.resetForm();
    }

     onClear(form: NgForm) {
        this.comment = null;
        form.resetForm();
    }
}