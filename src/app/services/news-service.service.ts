import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INews } from '../models/news-model';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  private headlines = "https://newsapi.org/v2/top-headlines?apiKey=75bd2624e91d425a95e18015c29f833a";

  private everything = "https://newsapi.org/v2/everything?apiKey=75bd2624e91d425a95e18015c29f833a";


  constructor(private http: HttpClient) { }

  getAllTopNews(pageNo: number): Observable<any>{
    return this.http.get(`${this.headlines}&category=general&language=en&pageSize=9&page=${pageNo}`);  
  }

  getTopHeadlines(): Observable<any>{
    return this.http.get(`${this.headlines}&pageSize=4&country=us&sortBy=popularity&language=en`);
  }

  getSearchResults(search: string, pageNo: number): Observable<any>{
    return this.http.get(`${this.everything}&q=${search}&pageSize=9&page=${pageNo}&language=en`);  
  }

}
