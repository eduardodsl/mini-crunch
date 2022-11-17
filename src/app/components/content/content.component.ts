import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  image:string = "";
  title:string = "";
  date:string = "";
  text:string = "";

  constructor(private route:ActivatedRoute, private dataService:DataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( async (value) => {
      const id:number = parseInt(value.get("id") ?? "0");
      const content:any = await this.dataService.getPost(id);
      this.image = content.jetpack_featured_media_url;
      this.title = content.title.rendered;
      this.date = content.formatted_date;
      this.text = content.content.rendered;
    });
  }

}
