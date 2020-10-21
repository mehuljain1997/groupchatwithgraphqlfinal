import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
//import { variable } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class AppService {
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
    // .subscribe((result: any) => {
    //   console.log('res',result.data.Login.Token)
    //   this.response = result.data.Login.Token
    //    })
     
  }
  
}
