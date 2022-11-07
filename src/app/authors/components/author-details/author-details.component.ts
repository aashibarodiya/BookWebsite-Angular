import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/services/author';

@Component({
  selector: 'author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  @Input() author:Author|null|undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
