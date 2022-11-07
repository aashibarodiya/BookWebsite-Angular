import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  @Input() showContactForm:any=true;
  @Input() title:string="Not Found";
  @Input() message?:string="Sorry we can't find what you're looking for";
  @Input() show:any=false;
  constructor() { }

  ngOnInit(): void {
    console.log('not found component initialized');
  }

}
