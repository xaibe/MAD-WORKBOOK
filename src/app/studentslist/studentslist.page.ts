import { Component, OnInit } from '@angular/core';

import { StudentsListService } from './../students-list.service';

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.page.html',
  styleUrls: ['./studentslist.page.scss']
})
export class StudentslistPage implements OnInit {
  constructor(private studentsListService: StudentsListService) {}

  students = [];

  ngOnInit() {
    // this.students = this.studentsListService.getStudents;
    this.students = this.studentsListService.getAllStudents();
  }
}
