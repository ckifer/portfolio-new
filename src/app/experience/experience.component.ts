import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'ck-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  data: any = [
    {
      startDate: formatDate(Date.now(), 'LLLL yyyy', 'en'),
      endDate: formatDate(Date.now(), 'LLLL yyyy', 'en'),
      employer: 'Kennametal',
      title: 'IT Intern',
      description: 'dfrwjhfhberwfbrhewfbrejwkfbrhejwbfrhjewfbrjhebfhrewjkfbhjrewjbfhjkrew'
    },
    {
      startDate: formatDate(Date.now(), 'LLLL yyyy', 'en'),
      endDate: formatDate(Date.now(), 'LLLL yyyy', 'en'),
      employer: 'Kennametal',
      title: 'IT Intern',
      description: 'dfrwjhfhberwfbrhewfbrejwkfbrhejwbfrhjewfbrjhebfhrewjkfbhjrewjbfhjkrew'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
