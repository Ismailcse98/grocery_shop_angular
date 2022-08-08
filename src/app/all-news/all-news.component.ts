import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {
  
  public blog:any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getBlog().subscribe((data)=>{
      this.blog = data;
    });
  }

}
