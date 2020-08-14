import { Component, OnInit } from '@angular/core';

/**
 * *angular provide built-in event like keyup.enter, to help us
 */
@Component({
  selector: 'app-event-filtering',
  template: `
    <p>
      event-filtering works!
    </p>
    <button type="button" class="btn btn-primary mb-3">
      Notifications <span class="badge badge-light ml-2">{{like}}</span>
    </button>
    <button class="btn btn-success d-block" (keyup.enter)="Like()">Like</button>
  `,
  styles: [
  ]
})
export class EventFilteringComponent implements OnInit {
  like = 0;
  Like(): void{
    this.like ++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
