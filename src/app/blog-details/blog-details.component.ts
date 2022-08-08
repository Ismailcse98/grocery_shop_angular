import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  public blogInfo:any;

  constructor(private api:ApiService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((param:ParamMap)=>{
      this.api.getBlogDetails(param.get('id')).subscribe((data)=>{
        this.blogInfo = data;
      });
    });
  }

}
