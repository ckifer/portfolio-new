import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'ck-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  data: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.data = db.collection('skills', ref => ref.orderBy('order')).valueChanges();
  }

  ngOnInit() {
  }

}
