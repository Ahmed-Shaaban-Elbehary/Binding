import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <p>
      style-binding works!
    </p>
    <p class="content"
    [style.background] = "isActive ? 'blue' : 'black'">
    Sets or returns all the background properties in one declaration
    </p>
  `,
  styles: [`
  .content{
    padding:20px;
    color: #fff;
  }
  `]
})
export class StyleBindingComponent implements OnInit {
  isActive = true;
  constructor() { }

  ngOnInit(): void {
  }

}
