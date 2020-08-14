import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-variabl',
  template: `
    <p>
      template-variabl works!
    </p>
    <input (keyup.enter)="onkeyUp($event)">
  `,
  styles: [
  ]
})
export class TemplateVariablComponent implements OnInit {

  onkeyUp($event): void{
    alert($event.target.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
