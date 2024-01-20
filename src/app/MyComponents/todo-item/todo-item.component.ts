import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
 @Input() td: Todo;
 @Output() todoDelete: EventEmitter<Todo>=new EventEmitter();
 @Output() todoCheckbox: EventEmitter<Todo>=new EventEmitter();

 onClick(td: Todo){
  this.todoDelete.emit(td);
  console.log("Onclick has been triggerd")
 }
 onCheckboxClick(td:Todo){
  this.todoCheckbox.emit(td);
 }
}
