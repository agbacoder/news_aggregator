import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { NewsServiceService } from '../../services/news-service.service';
import { INews } from '../../models/news-model';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styles: ``
})
export class HompageComponent  implements OnInit {

  constructor ( private newsService: NewsServiceService, 
                private router: Router, 
                private sigin: UserService,
                @Inject(PLATFORM_ID) private platformId: Object) { 
  if(this.sigin.isAuthenticated() ){
    this.isLoggedIn = true
  }
                }

  news: INews[] = []
  headlines: INews[] = []
  isLoggedIn = false

  ngOnInit(): void {
     this.getNews()
     this.getHeadlines()

  } 
 


  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: Event){
  //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
  //     this.loadNextPage()
  //   }
  // }

  favPosts: INews[] = []
  query :string = '';
  page  :number = 1;
  inSearchMode = false;
  showMessage = false;
  messageColor = ''
  messageTxt = ''


  getNews(){
    this.newsService.getAllTopNews(this.page).subscribe({
     next: (res) =>{
        console.log(res)
        this.news = [...this.news, ...res.articles]     
      }
  })
  }
  getHeadlines(){
    this.newsService.getTopHeadlines().subscribe({
     next: (res) =>{
        console.log(res)
        this.headlines = res.articles
     }
  })
  }
  searchBarOperation(){
 
    if (this.query !== ''){
       this.newsService.getSearchResults(this.query, this.page).subscribe({
        next: (res) => {
          console.log(res)
          this.news = res.articles
          this.inSearchMode = true;

       }
       })
    } 
  }

  loadNextPage(){
    this.page++
    if(!this.inSearchMode){
      this.getNews()
           console.log(this.getNews())
    } else {
       if (this.query !== ''){
       this.newsService.getSearchResults(this.query, this.page).subscribe({
        next: (res) => {
          console.log(res)
          this.news = [...this.news, ...res.articles] 
          this.inSearchMode = true;

       }
       })
    } 
    }
    
    
  }
  
  onSelectFavPost(post: INews){
    if (!this.sigin.isAuthenticated()){
      this.showMessage = true 
        this.messageTxt = "Please login to choose your favorite news";
        this.messageColor = "red"
      setTimeout(() => {
        this.showMessage = false
      }, 2000);
      return
     } 
     const isDuplicate = this.favPosts.some(favPost => favPost.title === post.title);

     if (isDuplicate) {
      
       this.showMessage = true;
       this.messageTxt = "This post is already in your favorites";
       this.messageColor = "red";
       setTimeout(() => {
        this.showMessage = false
      }, 2000);
       return;
     }
      
      this.messageTxt = "Added Successfuly";
      this.messageColor = "green"
      this.showMessage = true


      const favPosts: INews[] = JSON.parse(localStorage.getItem('favnews') as string)||[];
    
      favPosts.push(post);

      this.favPosts = favPosts;
      localStorage.setItem('favnews', JSON.stringify(favPosts))

      setTimeout(() => {
        this.showMessage = false 
      }, 2000);
      
      console.log(post)
    
   
   
  }
 
}
