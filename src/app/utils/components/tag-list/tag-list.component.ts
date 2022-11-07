import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tag-list',
  template: `
    <div>
    <span *ngFor="let tag of tags"
      class='badge bg-dark'
    >{{tag}}</span>  
    </div>
  `,
  styles:[
    `
      span{ 
        margin-right:5px;
      }
    `
  ]
  
})
export class TagListComponent implements OnInit {

  @Input() tags:string[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
