import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  async #getRequest(url: string): Promise<any> {
    try {
        const data = await fetch(url);
        const json = await data.json();
        return json;
    }catch(e){
        throw e;
    }
  }

  fmtdDate(text: string): string {
    const date = new Date(text);
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
  }

  dataFormat(data: any){
    if(data.date) data.formatted_date = this.fmtdDate(data.date);
  }

  async getPost(id: number): Promise<any> {
    const post:any = await this.#getRequest(`https://techcrunch.com/wp-json/wp/v2/posts/${id}`);
    this.dataFormat(post);
    return post;
  }

  async getNews(perPage: number = 10): Promise<any> {
    const news:any = await this.#getRequest(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=${perPage}&context=embed`);
    for(let i = 0; i < news.length; i++){
      this.dataFormat(news[i]);
    }
    return news;
  }

}
