import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [];
  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit() {
    this.loadAllTodoList();
  }
  loadAllTodoList() {
    this.todos = this.todoService.getAllTodos();
  }

  onClickEditTodoDetail(id: number) {
    console.log(id);
    this.router.navigate(['/todo-detail'], { queryParams: { id: id } });
  }

  onClickAddTodo() {
    this.router.navigate(['/todo-detail']);
  }

  onClickTodoDelete(id: number) {
    this.todoService.deleteTodoDetail(id);
    this.loadAllTodoList();
  }

}
