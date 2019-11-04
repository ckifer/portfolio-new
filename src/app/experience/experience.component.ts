import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'ck-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  data: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.data = db.collection('experience').valueChanges();
  }

  ngOnInit() {
  }

}
