import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { CommentComponent } from "./comments/comment.component";
import { CommentListComponent } from "./comments/comment-list.component";
import { CommentInputComponent } from "./comments/comment-input.component";
import { CommentsComponent } from "./comments/comments.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AuthorListComponent } from "./comments/author-list.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { AuthorComponent } from "./comments/author.component";

@NgModule({
    declarations: [
        AppComponent,
        CommentComponent,
        CommentListComponent,
        CommentInputComponent,
        CommentsComponent,
        AuthenticationComponent,
        AuthorListComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        AuthorComponent
    ],
    imports: [
    BrowserModule, 
    FormsModule,
    routing,
    ReactiveFormsModule,
    HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}