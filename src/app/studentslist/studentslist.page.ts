import { Component, OnInit } from '@angular/core';

import { EverythingstudentService } from '../everythingstudent.service';
import { Router } from '@angular/router';
import { StudentsListService } from './../students-list.service';

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.page.html',
  styleUrls: ['./studentslist.page.scss']
})
export class StudentslistPage implements OnInit {
  constructor(
    private router: Router,
    private everythingstudentService: EverythingstudentService // private studentsListService: StudentsListService
  ) {}

  students = [];

  ngOnInit() {
    console.log('nothing on init');
  
    // this.students = this.everythingstudentService.returnStudentsList();

    // this.students = this.studentsListService.getStudents;
    // this.students = this.studentsListService.getAllStudents();
  }

  changeUrl(user) {
    const id = user.id.substring(0, 4);
    const url = `studentslist/${id}`;

    this.router.navigateByUrl(url);

    // or

    // this.router.navigate([url]);
  }

  ionViewDidEnter() {
    console.log('view Enter');
    this.students = this.everythingstudentService.returnStudentsList();
  }
}
