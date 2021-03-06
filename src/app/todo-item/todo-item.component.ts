import { Component, Input, OnInit } from '@angular/core';
import { todoItem } from 'src/app/interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input () item; TodoItem;

  constructor() { }

  ngOnInit(): void {
  }
}

