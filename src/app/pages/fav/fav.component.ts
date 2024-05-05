import { Component, Input, OnInit } from '@angular/core';
import { INews } from '../../models/news-model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styles: ``
})
export class FavComponent implements OnInit {

  ngOnInit(): void {
    if(this.user.isAuthenticated() ){
      this.getFavNewsFromStorage()
    }
  }

  favnews: INews [] = []

  constructor( private user: UserService ){
    if(this.user.isAuthenticated() ){
      this.isLoggedIn = true
    }
    if (this.hasFavoriteContent()){
      this.hasFavContent = true
    }

  } 


  isLoggedIn = false;
  hasFavContent = false;

  showMessage = false;
  messageColor = ''
  messageTxt = ''


  
  hasFavoriteContent(): boolean {
    const storedItem = localStorage.getItem('favnews');
    return storedItem !== null && JSON.parse(storedItem).length > 0;
  }

  getFavNewsFromStorage(){
    const favoriteNews = localStorage.getItem('favnews')
    if(favoriteNews !== null){
      this.favnews = JSON.parse(favoriteNews)
    }
  }
  removeFavoriteNews(index: number): void {
    const favoriteNews = this.user.getFavoriteNews();
    if (index >= 0 && index < favoriteNews.length) {
      favoriteNews.splice(index, 1); 
      localStorage.setItem('favnews', JSON.stringify(favoriteNews));
      this.showMessage = true 
        this.messageTxt = "Post deleted successfully";
        this.messageColor = "green"
      setTimeout(() => {
        this.showMessage = false
      }, 2000); 

     
    }
    this.getFavNewsFromStorage();
  }


}
