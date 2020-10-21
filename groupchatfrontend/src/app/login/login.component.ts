import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LohinService } from './lohin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
body:any
  constructor(private loginservice: LohinService, private router: Router) { }

  ngOnInit(): void {
    
console.log('tok',localStorage.getItem('Token'))
console.log('userName',localStorage.getItem('username'))
console.log('phoneNo',localStorage.getItem('phoneNo'))
console.log('gDescription',localStorage.getItem('groupName'))
localStorage.removeItem('Token')
localStorage.removeItem('username')
localStorage.removeItem('phoneNo')
localStorage.removeItem('groupName')
console.log('after tok',localStorage.getItem('Token'))
console.log('after userName',localStorage.getItem('username'))
console.log('after phoneNo',localStorage.getItem('phoneNo'))
console.log('after gDescription',localStorage.getItem('groupName'))




  }



  generatetoken(user,pass){
    console.log('user',user)
    console.log('pass',pass)
    this.body = {
      "username":user,
      "password": pass            
    }

    if(!user || !pass) {
      console.log('inside user if')
      alert('please login with proper credential')
      this.router.navigate([''])
    }
    else {

    

    this.loginservice.Tokengenerate(this.body)
    .subscribe((result: any) => {
   console.log('final res',result.data.Login.Token)
   if(result.data.Login.Token != 'Username or password incorrect')
   {
    localStorage.setItem('Token',result.data.Login.Token)
    console.log('stored',localStorage.getItem('Token'))
    this.router.navigate(['userLogin'])
   }
   else {
     console.log('inside else')
     alert(result.data.Login.Token)
     this.router.navigate([''])


   }
   


    },((error)=> {
      console.log('error found')
      alert('please login with proper credential')
      this.router.navigate([''])
    }))
  }
   }


}
