import { Component } from '@angular/core';
import { todoItem } from 'src/app/interfaces/todo-item';

@Component({
  selector: 'app-root',
  template: `
<h1>
Welcome to {{ title }}!
</h1>
<app-input-btn-unit></app-input-btn-unit>

<ul>
<li *ngFor="let todoItem of todoList">
<app-todo-item [item]="todoItem"></app-todo-item>
</li>
</ul>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  todoList : todoItem[] =[
{title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},  
    ];
}
