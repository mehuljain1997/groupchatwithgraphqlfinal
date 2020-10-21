import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'groupchatfrontend';
//    body:any
// constructor(private appservice:AppService,private router:Router){

// }


//   generatetoken(user,pass){
//     console.log('user',user)
//     console.log('pass',pass)
//     this.body = {
//       "username":user,
//       "password": pass            
//     }

//     this.appservice.Tokengenerate(this.body)
//     .subscribe((result: any) => {
//    console.log('final res',result.data.Login.Token)
//    if(result.data.Login.Token != 'Username or password incorrect')
//    {
//     localStorage.setItem('Token',result.data.Login.Token)
//     console.log('stored',localStorage.getItem('Token'))
//    }
//    else {
//      console.log('inside else')
//      alert(result.data.Login.Token)
//      this.router.navigate([''])


//    }
   


//     })
//    }
}


