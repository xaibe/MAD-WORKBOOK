import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { StudentsListService } from '../students-list.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss']
})
export class StudentPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private studentsListService: StudentsListService
  ) {}
  students = [];

  singleStudent;
  ngOnInit() {
    this.students = this.studentsListService.getAllStudents();

    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('studentid');

      this.singleStudent = this.students.find(obj => {
        return obj.id.includes(val);
      });
    });
  }
}
