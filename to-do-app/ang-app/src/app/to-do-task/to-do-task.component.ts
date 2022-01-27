import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.css']
})
export class ToDoTaskComponent implements OnInit {

  @Input()
  tasksList: Array<string> = [];

  @Output()
  emitDone = new EventEmitter<string>();

  @Output()
  emitRemove = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  remove(task: string){
    this.emitRemove.emit(task);
  }
  done(task: string){
    this.emitDone.emit(task);
  }
}
