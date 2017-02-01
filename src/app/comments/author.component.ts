import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
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
