import { Component, OnInit } from '@angular/core';

/**
 * *class binding excute under a condition, if it true it will be applyed to this element.
 */
@Component({
  selector: 'app-class-binding',
  template: `
    <button class="btn btn-primary" [class.active]="isActive">save</button>
  `,
  styles: [`
  button{
    display:none;
  }
  .active{
    display: block;
  }
  `
  ]
})
export class ClassBindingComponent implements OnInit {
isActive = false;
  constructor() { }

  ngOnInit(): void {
  }

}
