import { Component, Input, OnInit } from '@angular/core';
import { SmallCardComponent } from '../small-card/small-card.component';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  id:number = 0;

  @Input()
  title:string = "";

  @Input()
  date:Date|null = null;

  @Input()
  img:string = "";

  constructor() {}
  
  ngOnInit(): void {
  }

}
