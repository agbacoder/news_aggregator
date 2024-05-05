import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

interface IUser{
  uid: string,
  email: string,
  password: string,
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: ``
})
export class SigninComponent {
   constructor(private user: UserService, private router: Router){}

   control: FormControl = new FormControl();
   @ViewChild('loginForm') loginForm!: NgForm; 

   credentials = {
    email: '',
    password: ''  
  }
  showMessage = false;
  messageColor = ''
  messageTxt = ''
 

  login(){
      if(!this.loginForm.valid){
        
      this.messageTxt = "Invalid Credentials! Please try again";
      this.messageColor = "red"
      this.showMessage = true
      setTimeout(() => {
        this.showMessage = false  
      }, 2000);
    
      return
      }
      this.user.newUser(this.credentials).subscribe({
        next: (res) =>{
          localStorage.setItem('users', JSON.stringify(res))
         setTimeout(() => {
          this.router.navigate(['/'])
         }, 1000); 
        
        },  
        error: (err) => {
          this.messageTxt = "An error has occurred! Please try again";
          this.messageColor = "red"
          this.showMessage = true
      setTimeout(() => {
        this.showMessage = false  
      }, 2000);
        }
  
      })  

    }
   
}

