import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'ck-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  data: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.data = db.collection('projects').valueChanges();
  }

  ngOnInit() {
  }

}
