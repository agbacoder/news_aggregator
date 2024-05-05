import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { INews } from '../models/news-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000/users';


  constructor (private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object){ }

  newUser(data: any): Observable<any>{
    return this.http.post(`${this.baseUrl}`, data)
}


 
  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('users');
    }
    return false;
  }

  getFavoriteNews(): INews[] {
    const favoriteNews = localStorage.getItem('favnews');
    return favoriteNews ? JSON.parse(favoriteNews) : [];
  }
  
 }


