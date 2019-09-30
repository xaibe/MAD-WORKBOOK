import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { StudentslistPage } from './studentslist.page';
import { StudentslistitemComponent } from './studentslistitem/studentslistitem.component';

const routes: Routes = [
  {
    path: '',
    component: StudentslistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentslistPage, StudentslistitemComponent]
})
export class StudentslistPageModule {}
