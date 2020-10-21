import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
response:any
username:any
phoneNo:any
  constructor(private router:Router, private homeservice:HomeService) { }

  ngOnInit(): void {
    if(!localStorage.getItem('Token') || !localStorage.getItem('username') || !localStorage.getItem('phoneNo')){
      console.log('data not found')
      alert('please Login app with proper credential you dont have access')
      this.router.navigate([''])

    }
    else{
      this.username = localStorage.getItem('username')
      this.phoneNo = localStorage.getItem('phoneNo')
      this.getGroups()
    }
  
  }

  removeToken(){
    console.log('inside remove token')
    console.log('before tok',localStorage.getItem('Token'))
    localStorage.removeItem('Token')
    console.log('tok',localStorage.getItem('Token'))
    this.router.navigate([''])

  }

  getGroups(){
    console.log('inside getgroups')
    this.homeservice.fetchGroupFromGraphql().subscribe((result: any) => {
      console.log('final res',result.data.Groups)
      this.response = result.data.Groups
    })
  }

  groupChat(groupname:any, gDescription){
    console.log('inside chatbox',groupname)
    localStorage.setItem('groupName',groupname)
    localStorage.setItem('gDescription',gDescription)
    console.log('groupname for local',localStorage.getItem('groupName'))
    this.router.navigate(['groupchat'])
  }

}
