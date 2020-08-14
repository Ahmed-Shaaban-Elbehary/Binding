import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-ways-binding',
  template: `
    <p>
      two-ways-binding works!
    </p>
    <input type="text" [(ngModel)]="username" (keyup.enter)="onkeyUp()">
  `,
  styles: [
  ]
})
export class TwoWaysBindingComponent implements OnInit {
  username = 'User Name';
  onkeyUp(): void {
    alert(this.username);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
