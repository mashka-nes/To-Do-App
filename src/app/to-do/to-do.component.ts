import { Component, OnInit } from '@angular/core';
import { tasks } from '../tasks';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})

export class ToDoComponent implements OnInit {
  tasks = tasks;

  constructor() { 
  }
  
  ngOnInit() {
  }

  newTask: string;
  filterInput: string;
  filtertodo = [...this.tasks];


  removeTask(searchTask) {
    let index = tasks.indexOf(searchTask);
    tasks.splice(index, 1);
    this.filtertodo= [...this.tasks];
  }

  taskCompleted(task) {
    task.completed = true
  }

  addTask = (newTask) => {
    const newItem = {
      task: this.newTask,
      completed: false,
    };
  
    this.tasks.push(newItem);
    this.filterSearch();
    this.newTask = null;
    
  }
///addTask(newTask) {
    //tasks.push({task: newTask, completed: false});
    //this.filtertodo= [...this.tasks];
  //}

  filterSearch = () => {
    const lower = this.filterInput ? this.filterInput.toLowerCase(): '';
    this.filtertodo = this.tasks.filter(task => task.task.toLowerCase().includes(lower));
    }



}

interface Todo {
  task: string;
  completed: boolean;
}


