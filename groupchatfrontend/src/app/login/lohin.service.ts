import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: 'root'
})
export class LohinService {


  response:any
  constructor(private apollo: Apollo) { }
  Tokengenerate(data: any): Observable<any> {
    console.log('inside token service',typeof data.username)
     return this.apollo.query<any>({
      query: gql`
      query Login($username: String!, $password: String!) 
      {
        Login(username:$username,password:$password){
          Token
        }
      }
    `,
      variables: {
     username: data.username, password:data.password
      }
    })
     
  }

}
