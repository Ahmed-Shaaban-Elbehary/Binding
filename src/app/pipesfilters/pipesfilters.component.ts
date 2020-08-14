import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesfilters',
  template: `
    <p>
      pipesfilters works!
    </p>
    <ul class="list-group">
      <li class="list-group-item">{{operator.name | uppercase}}</li>
      <li class="list-group-item">{{operator.age | number}}</li>
      <li class="list-group-item">{{operator.salary | currency:'EGP ':'symbol'}}</li>
      <li class="list-group-item">{{operator.hireDate | date: 'shortDate'}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class PipesfiltersComponent implements OnInit {

  operator = {
    name: 'Ahmed Shaaban',
    age: 35,
    salary: 5888,
    hireDate: new Date()
  };

  constructor() { }

  ngOnInit(): void {
  }

}
