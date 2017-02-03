export class Comment{
    content: string;
    screenName: string; 
    commentId?: string;
    userId?: string;
   

    constructor(content: string, screenName: string, commentId?: string, userId?: string){
        this.content = content;
        this.screenName = screenName;
        this.commentId = commentId;
        this.userId = userId;

    }
}