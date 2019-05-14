import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'ck-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('headerItems', ref => ref.orderBy('index')).valueChanges();
  }

  ngOnInit() {

  }

}
