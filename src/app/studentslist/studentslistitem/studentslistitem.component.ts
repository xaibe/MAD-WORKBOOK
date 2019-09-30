import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-studentslistitem',
  templateUrl: './studentslistitem.component.html',
  styleUrls: ['./studentslistitem.component.scss']
})
export class StudentslistitemComponent implements OnInit {
  constructor(private router: Router) {}
  @Input() item;
  ngOnInit() {}

  changeUrl(user) {
    const id = user.id.substring(0, 4);
    const url = `studentslist/${id}`;

    this.router.navigateByUrl(url);

    // or

    // this.router.navigate([url]);
  }
}
