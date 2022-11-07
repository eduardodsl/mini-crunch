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

  async getPost(id:number): Promise<any>{
    const post:any = await this.#getRequest(`https://techcrunch.com/wp-json/wp/v2/posts/${id}`);
    return post;
  }

  async getNews(perPage:number = 10): Promise<any>{
    const news:any = await this.#getRequest(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=${perPage}&context=embed`);
    return news;
  }

}
