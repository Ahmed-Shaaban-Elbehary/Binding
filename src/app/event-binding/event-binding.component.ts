import { Component, OnInit } from '@angular/core';

/**
 * *this's called event binding it's a traditional js event handling with angular
 */
@Component({
  selector: 'app-event-binding',
  template: `
    <p>
      event-binding works!
    </p>
    <button type="button" class="btn btn-primary mb-3">
      Notifications <span class="badge badge-light ml-2">{{likeCount}}</span>
    </button>
    <button class="btn btn-success d-block" (click)="onClickLike()">Like</button>
  `,
  styles: [],
})
export class EventBindingComponent implements OnInit {
  likeCount = 1;
  onClickLike(): void{
    this.likeCount ++;
    console.log('Like Clicked!');
  }
  constructor() {}

  ngOnInit(): void {}
}
