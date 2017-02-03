import { Http, Response, Headers} from "@angular/http";
import { Injectable} from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Comment } from "./comment.model";



@Injectable()
export class CommentService {
    private comments: Comment[] = [];

    constructor(private http: Http) {}

    addComment(comment: Comment) {
        const body = JSON.stringify(comment);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/comment', body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const comment = new Comment(result.obj.content, 'UserNameHere', result.obj._id, null);
                this.comments.push(comment);
                return comment;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getComments() {
        return this.comments;
    }

    // getComments() {
    //     return this.http.get('http://localhost:3000/comment')
    //                 .map((response: Response) => {
    //                     const comments = response.json().obj;
    //                     let convertedComments: Comment[] = [];
    //                     for (let comment of comments){
    //                         convertedComments.push(new Comment(comment.content, 'UserNameHere', comment._id, null));
    //                     }
    //                     this.comments = convertedComments;
    //                     return convertedComments;
    //                 })
    //                 .catch((error: Response) => Observable.throw(error.json()));
    // }

     deleteMessage(comment: Comment) {
        this.comments.splice(this.comments.indexOf(comment), 1);
        return this.http.delete('http://localhost:3000/message/' + comment.commentId)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}