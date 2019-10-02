import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.page.html',
  styleUrls: ['./addstudent.page.scss']
})
export class AddstudentPage implements OnInit {
  listOfStudents = [];
  studentsForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.studentsForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      id: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  // Reactive / Model-Driven Form
  saveStudent() {
    console.log(this.studentsForm.valid);
    console.log(this.studentsForm.value);

    if (this.studentsForm.valid) {
      this.listOfStudents.unshift(this.studentsForm.value);
      this.studentsForm.reset();
      //   this.listOfStudents.push(this.studentsForm.value);
    }
  }

  // template Driven Forms
  // onSubmit(form) {
  //   console.log('value', form);
  // if(form.valid){
  //   this.listOfStudents.push(form.value);
  // }
  // }
}
