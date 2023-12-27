import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import {  } from '@angular/fire';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type Experience = {startDate: {seconds: number}; order: number;}

@Component({
  selector: 'ck-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  data: Observable<Experience[]>;
  constructor(db: AngularFirestore) {
    this.data = db.collection<Experience>('experience', ref => ref.orderBy('order')).valueChanges();
  }

  ngOnInit() {
  }
}
