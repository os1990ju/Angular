import { Component } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  task1: ITask = {
    title: 'Task 1',
    description: 'Descrition 1',
    completed: true,
    level: Levels.Urgent,
  }

  task2: ITask = {
    title: 'Task 2',
    description: 'Descrition 2',
    completed: false,
    level: Levels.Info,
  }
  deleteTask(task:ITask){
    alert(`Se procede a eliminar la tarea: ${task.title}`);
  }

}
