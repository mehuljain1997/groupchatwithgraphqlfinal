import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: 'root'
})
export class GroupchatService {

  constructor(private apollo: Apollo) { }

//phnno,username,groupname
  // fetchMessageFromGraphql(msg: String): Observable<any> {
  //   console.log('msg',msg)
  //   let gname = localStorage.getItem('groupName')
  //   if(msg){
  //   console.log('group name',gname)
  //   console.log('inside groupchat service')
  //    return this.apollo.mutate<any>({
  //     mutation: gql`
  //     mutation addMessageNew($name: String!, $gMessage: String!) 
  //     {
  //      addMessageNew(name:$name,gMessage:$gMessage){
  //         gMessage
  //       }
  //     } 
  //   ` ,
  //   variables: {
  //     name:gname, gMessage:msg
  //      }
  //   })
  // }
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


  // }

  fetchMessageFromGraphql(msg: String): Observable<any> {
    console.log('msg',msg)
    let gname = localStorage.getItem('groupName')
    let username = localStorage.getItem('username')
    let phoneNo = localStorage.getItem('phoneNo')
    if(msg){
    console.log('group name',gname)
    console.log('inside groupchat service')
     return this.apollo.mutate<any>({
      mutation: gql`
      mutation addMessageInMongo($gname: String!, $gMessage: String!, $userName: String!, $phoneNo: String!) 
      {
        addMessageInMongo(gname:$gname,gMessage:$gMessage,userName:$userName, phoneNo:$phoneNo){
          gMessage
          userName
          phoneNo
        }
      } 
    ` ,
    variables: {
      gname:gname, gMessage:msg,userName:username,phoneNo:phoneNo
       }
    })
  }
  else {
    console.log('inside else',msg)
    return this.apollo.query<any>({
      query: gql`
      {
        MessageDetail{
          gname
          gMessage
          phoneNo
          userName
       }
     } 
    ` 
    })


    
  }


  }


  fetchAllMessageFromGraphql(): Observable<any> {
    let gname = localStorage.getItem('groupName')
    console.log('group name',gname)
    console.log('inside groupchat service')
     return this.apollo.query<any>({
      query: gql`
      query MessageByGroupName($gname: String!) 
      {
        MessageByGroupName(gname:$gname){
          gMessage
          userName
          phoneNo
          gname
        }
      } 
    ` ,
    variables: {
      gname:gname
       }
    })
  }
  

  





}
