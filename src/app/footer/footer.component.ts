import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'ck-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  icons: Observable<any[]>;
  year = new Date().getFullYear();
  constructor(db: AngularFirestore) {
    this.icons = db.collection('socialIcons').valueChanges();
  }

  ngOnInit() {
  }

}
