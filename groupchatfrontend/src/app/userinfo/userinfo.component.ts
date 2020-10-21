import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserinfoService } from './userinfo.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
usersuccess: Boolean = false
  constructor(private userinfoservice:UserinfoService , private router:Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('Token')){
      console.log('if token not found')
      alert('please Login app with proper credential you dont have access')
      this.router.navigate([''])

    }
  }

  insertUser(nm,phn){
    console.log('phn',phn)

    if(!phn || !nm){
      alert('please insert proper Credentials!')
      this.router.navigate(['userLogin'])
    }
    else {
      var phoneno = /^\d{10}$/;
      if(phn.match(phoneno)){
         this.userinfoservice.insertUserIntoGraphQl(nm,phn).subscribe((result:any)=> {
           localStorage.setItem('username',nm)
           localStorage.setItem('phoneNo',phn)
           alert('successfully login')
           this.router.navigate(['home'])
         }, (error)=>{
         alert('this No. is already register')
         this.router.navigate(['userLogin'])
         })

      }
     else{
      alert("Invalid phone no");
      this.router.navigate(['userLogin'])

      }

    }


  }

}
