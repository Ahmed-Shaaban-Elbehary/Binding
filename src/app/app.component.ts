import { Component } from '@angular/core';
/**
 * * we use curly brackets {{}} in text binding h1, span, div, p...
 * ! this's a one way data binding, from component to DOM.
 */
@Component({
  selector: 'app-root',
  template: `
  <h2>{{title}}</h2>
  <h1 [textContent]="someText"></h1>
  <img [src]="imgUrl" alt="logo">
  <hr>
  <app-atrr-binding></app-atrr-binding>
  <hr>
  <app-class-binding></app-class-binding>
  `,
  styles: []
})
export class AppComponent {
  title = 'HandellerAndBinding';
  imgUrl = 'http://lorempixel.com/400/200/';
  someText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry';
}
