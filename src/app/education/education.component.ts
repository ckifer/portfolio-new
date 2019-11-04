import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'ck-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  data: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.data = db.collection('education').valueChanges();
  }

  ngOnInit() {
  }
}
