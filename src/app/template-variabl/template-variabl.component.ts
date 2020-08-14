import { Component, OnInit } from '@angular/core';

/**
 * *template variables used insted of $event we can give the element variables and using it.
 */
@Component({
  selector: 'app-template-variabl',
  template: `
    <p>
      template-variabl works!
    </p>
    <!-- <input (keyup.enter)="onkeyUp($event)"> -->
    <input #email (keyup.enter) = "onKeyUp(email.value)">
  `,
  styles: [
  ]
})
export class TemplateVariablComponent implements OnInit {
  onKeyUp(email): void{
    console.log(email);
  }
  // onkeyUp($event): void{
  //   alert($event.target.value);
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
