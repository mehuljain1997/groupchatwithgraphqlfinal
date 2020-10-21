import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private apollo: Apollo) { }

  



  fetchGroupFromGraphql( ): Observable<any> {
    console.log('inside token service')
     return this.apollo.query<any>({
      query: gql`
      {
       Groups{
        _id
        name
        gDescription
      }
    } 
    `
    })
  }
}
