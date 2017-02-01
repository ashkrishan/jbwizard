import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {
  private id: number;
  private sub;
  constructor(private route: ActivatedRoute) { }

 ngOnInit() {
    this.sub = this.route.params.subscribe(params =>
      this.id = +params['id']  // + converts string id to a number
    );

  }

ngOnDestroy() {
  this.sub.unsubscribe();
}

}
