import { Injectable } from '@angular/core';
import { Firestore, docData, getFirestore, collectionData, collection, CollectionReference, doc, setDoc, getDocs, DocumentData, collectionSnapshots  } from '@angular/fire/firestore';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  db: any;
  constructor(
    private firestore: Firestore,
  ) {}

  getAll(): Observable<any> {
    const jc = collection(this.firestore, 'Test');
    console.log(jc);
    
    const a = collectionSnapshots(jc)
    .pipe(
      map((snapshots) =>
       {
        console.log(snapshots);
        snapshots.map((snapshot) => {
          return { ...snapshot.data(), id: snapshot.id }
        })
       }
      )
    )
    console.log(a);
    return a;
  }
}
