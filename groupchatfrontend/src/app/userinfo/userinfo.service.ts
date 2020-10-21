import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  constructor(private apollo: Apollo) { }


  insertUserIntoGraphQl(nm , ph): Observable<any> {

    let gname = localStorage.getItem('groupName')
    //if(msg){
    console.log('group name',gname)
    console.log('inside groupchat service')
     return this.apollo.mutate<any>({
      mutation: gql`
      mutation addUser($name: String!, $phoneNo: String!) 
      {
        addUser(name:$name, phoneNo:$phoneNo){
          _id
          name
          phoneNo
        }
      } 
    ` ,
    variables: {
      name:nm, phoneNo:ph.toString()
       }
    })
  //}
  // else {
  //   console.log('inside else',msg)
  //   return this.apollo.mutate<any>({
  //     mutation: gql`
  //     mutation addMessageNew($name: String!) 
  //     {
  //      addMessageNew(name:$name){
  //         gMessage
  //       }
  //     } 
  //   ` ,
  //   variables: {
  //     name:gname
  //      }
  //   })
  // }

    
  }


}
