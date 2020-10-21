import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cpuUsage } from 'process';
import { GroupchatService } from './groupchat.service';

@Component({
  selector: 'app-groupchat',
  templateUrl: './groupchat.component.html',
  styleUrls: ['./groupchat.component.css']
})
export class GroupchatComponent implements OnInit {

  constructor(private router:Router, private groupchatservice:GroupchatService) { }
AllMessage:any
groupName: String
username:String
phoneNo:String
gDescription: String
latestmessage: String
messageByuser:String
messageByPhnNo:String
  ngOnInit(): void {
    if(!localStorage.getItem('groupName')){
      console.log('if token not found')
      alert('please Login app with proper credential you dont have access')
      this.router.navigate([''])

    }
    else {
      console.log('inside ngononit')
      this.groupName = localStorage.getItem('groupName')
      this.gDescription = localStorage.getItem('gDescription')
      this.username = localStorage.getItem('username')
      this.phoneNo = localStorage.getItem('phoneNo')
      this.getAllMessage()
    }

 
  }



  closeForm(){
    console.log('inside closeform')
    this.router.navigate(['home'])
  }

  getMessage(msg){
    if(msg){
      console.log('msg',msg)
      console.log('inside getMessage',localStorage.getItem('groupName'))
      this.groupchatservice.fetchMessageFromGraphql(msg).subscribe((result:any)=> {
         console.log('final res message',result.data.addMessageInMongo.gMessage)
         window.location.reload();
        // this.router.navigate(['groupchat'])
        //this.getAllMessage()

         
      // this.AllMessage= result.data.addMessageInMongo.gMessage
      })
    }
    else {
      alert('please insert message')
      this.router.navigate(['groupchat'])
    }
  }

  getAllMessage(){
      console.log('inside getMessage',localStorage.getItem('groupName'))
      this.groupchatservice.fetchAllMessageFromGraphql().subscribe((result:any)=> {
         console.log('final res message',result.data.MessageByGroupName)
      this.AllMessage = result.data.MessageByGroupName
      console.log('allmessage',this.AllMessage)
      })
   
    

  }

}
