import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-btn-unit',
  template: `
  <input #inputElementRef
        [value]="title" 
        (keyup.enter)="changeTitle('$event.target.value')">
  <button (click)="changeTitle(inputElementRef.value)"> Save </button>
`,
  styleUrls: ['./input-btn-unit.component.css']
})
export class InputBtnUnitComponent implements OnInit { title: string = 'Hello World';

  constructor() { }

    changeTitle(newTitle: string) {
    this.title = newTitle;
  }

  ngOnInit(): void {
    this.title = 'Angular is though';
  }
}