import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ck-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  data: any = [
    {
      skill: 'being cool',
      order: 1
    },
    {
      skill: 'being cool',
      order: 1
    },
    {
      skill: 'being cool',
      order: 1
    },
    {
      skill: 'being cool',
      order: 1
    }
  ];

  ngOnInit() {
  }

}
