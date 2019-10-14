import { Injectable } from '@angular/core';
import  {AngularFirestore} from '@angular/fire/firestore';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class FbserviceService {

  constructor(public afDB: AngularFireDatabase) { }

    public getDatos(){
        return this.afDB.list('agenda/').valueChanges(); 
       
    }

  getdatos(){

  }
}
