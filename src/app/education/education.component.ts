import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'ck-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

  data: any = [
    {
      startDate: formatDate(Date.now(), 'LLLL yyyy', 'en'),
      endDate: formatDate(Date.now(), 'LLLL yyyy', 'en'),
      school: 'Seton Hill University',
      degree: 'Computer Science',
      description: 'dfrwjhfhberwfbrhewfbrejwkfbrhejwbfrhjewfbrjhebfhrewjkfbhjrewjbfhjkrew'
    },
  ];

  ngOnInit() {
  }
}
