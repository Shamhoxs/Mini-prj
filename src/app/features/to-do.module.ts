import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './toDo/to-do/to-do.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToDoComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [ToDoComponent]
})
export class ToDoModule { }
