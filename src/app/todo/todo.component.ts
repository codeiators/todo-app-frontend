import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { todos } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number;
  todo: todos;
  constructor(private router: Router ,private todoService:TodoDataService,private route:ActivatedRoute)
   { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new todos(this.id,'',false,new Date())
    if(this.id!=-1)
    {
    this.todoService.retrieveTodo('in28minutes',this.id).subscribe(
      response => 
        this.todo = response
      
    )

    }
  }

  saveTodo()
    {
      if(this.id===-1)
      {

        this.todoService.createTodo('in28minutes',this.todo).subscribe(
     
       
          data => { console.log(data)
            this.router.navigate(['/todos'])
    
            }
        )

      }
      else{
    this.todoService.updateTodo('in28minutes',this.id,this.todo).subscribe(
     
       
      data => { console.log(data)
        this.router.navigate(['/todos'])

        }
    )
      }
  }

}
