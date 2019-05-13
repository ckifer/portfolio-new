import {NgModule} from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';

/**
 * NgModule that includes all Material modules.
 */
@NgModule({
  exports: [
    AngularFirestoreModule
  ]
})

export class FirebaseModule { }
