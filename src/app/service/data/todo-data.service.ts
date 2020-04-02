import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { todos } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retrieveAllTodos(username:string)
  {
  return this.http.get<todos[]>(`http://localhost:8080/users/${username}/todos`)
  }

  deleteTodo(username,id)
  {
   return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  retrieveTodo(username,id)
  {
   return this.http.get<todos>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(username,id,todo)
  {
   return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`,todo)
  }

  createTodo(username,todo)
  {
   return this.http.post(`http://localhost:8080/users/${username}/todos`,todo)
  }
}
