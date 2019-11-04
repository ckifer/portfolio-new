import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'ck-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.about = db.collection('about').valueChanges();
  }

  ngOnInit() {
  }

}
