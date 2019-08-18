import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ck-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  data: any = [
    {
      name: 'project',
      link: 'IT Intern',
      description: 'dfrwjhfhberwfbrhewfbrejwkfbrhejwbfrhjewfbrjhebfhrewjkfbhjrewjbfhjkrew'
    },
    {
      name: 'project',
      link: 'IT Intern',
      description: 'dfrwjhfhberwfbrhewfbrejwkfbrhejwbfrhjewfbrjhebfhrewjkfbhjrewjbfhjkrew'
    }
  ];

  ngOnInit() {
  }

}
