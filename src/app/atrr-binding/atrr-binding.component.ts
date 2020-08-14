import { Component, OnInit } from '@angular/core';

/**
 * * Attribut Biniding, it's used to tell DOM this is A HTML Attribut NOT a DOM Attribut
 */
@Component({
  selector: 'app-atrr-binding',
  template: `
    <p class="h1">
      atrr-binding works!
    </p>
    <table class="table-dark">
      <tr [attr.colspan]="colspan">
        <td>{{someText}}</td>
        <td>{{someText}}</td>
        <td>{{someText}}</td>
        <td>{{someText}}</td>
      </tr>
      <tr [attr.colspan]="colspan">
        <td>{{someText}}</td>
        <td>{{someText}}</td>
        <td>{{someText}}</td>
        <td>{{someText}}</td>
      </tr>
    </table>
  `,
  styles: [
  ]
})
export class AtrrBindingComponent implements OnInit {

  colspan = 1;
  someText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry';
  constructor() { }

  ngOnInit(): void {
  }

}
