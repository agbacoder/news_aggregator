import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID , Output, output} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NewsServiceService } from '../../services/news-service.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: ``
})
export class NavComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: any,
    public signin: UserService
  ) {
    if(this.signin.isAuthenticated()){
      this.isLoggedIn = true
    }
  }
  

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('tw-elements').then((module) => {
        const { initTWE, Dropdown, Collapse } = module;
        initTWE({ Dropdown, Collapse });
      }).catch((error) => {
        console.error('Failed to load tw-elements:', error);
      });
      
    }
  }
  isLoggedIn = false


  logout(): void {
    localStorage.removeItem('users');
    this.isLoggedIn = false
  }


  

  
  


}
