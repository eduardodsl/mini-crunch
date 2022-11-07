import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'angular-blog';
  dataService:DataService;
  news:Array<any> = [];
  main:any|null = null;

  constructor(dataService: DataService){ this.dataService = dataService; this.getNews() }

  async getNews(): Promise<void>{
    
    const newsCount:number = 11;
    const news:Array<any> = await this.dataService.getNews(newsCount);

    this.main = news[0];
    this.news = news.splice(1, news.length-1);
  }

  ngOnInit(): void {
      
  }

}
