import { Injectable } from '@angular/core';
import { Firestore, docData, getFirestore, collectionData, collection, CollectionReference, doc, setDoc, getDocs, DocumentData, collectionSnapshots  } from '@angular/fire/firestore';
import { Observable, from, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  db: any;
  constructor(
    private firestore: Firestore,
  ) {}

  getAll(): Observable<any> {
    let allDoc: any[] = [];
    const collectionRef = collection(this.firestore, 'Test');
    from(getDocs(collectionRef))
    .pipe(
       map((users: any) => {
        users.forEach((doc: any) => {
          allDoc.push(doc.data());
        })
      })
    )
    .subscribe();
    return of(allDoc);
  }
}
