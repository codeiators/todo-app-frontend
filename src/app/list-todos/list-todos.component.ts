import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class todos{

  constructor(public id:number, 
    public description:string,
    public done:boolean,
    public targetDate: Date)
  {

  }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: todos[]
//   todos = [
//     new todos(1,"Learn Angular", false,new Date()),
//     new todos(2,"Learn Java", false,new Date()),
//     new todos(1,"Learn To Dance", false,new Date())

  message: string   
 
// ]
  constructor(private todoDataService:TodoDataService,
    private router:Router) { }

  ngOnInit() {

      this.refreshTodos()
  }

  refreshTodos()
  {
    
    this.todoDataService.retrieveAllTodos('in28minutes').subscribe(

      response => {
        this.todos=response
        console.log(response)
      }

  )
  }

  deleteTodo(id)
  {
   this.todoDataService.deleteTodo('in28minutes',id).subscribe(
     response => {
       console.log(response);
       this.message = "delete successfull"
       this.refreshTodos()
     }
   )
  }

  updateTodo(id)
  {
   this.router.navigate(['todos',id])
  }

  addTodo()
  {
    this.router.navigate(['todos',-1])
  }

}
