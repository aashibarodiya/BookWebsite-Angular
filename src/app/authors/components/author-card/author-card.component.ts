import { Component, Input, OnInit } from '@angular/core';
import { AuthorSummary } from '../../../services/author';

@Component({
  selector: 'author-card',
  templateUrl: './author-card.component.html',
  styles: [
  ]
})
export class AuthorCardComponent implements OnInit {

  @Input() author?:AuthorSummary;
  @Input() width:number=250;
  constructor() { }

  ngOnInit(): void {
  }

}
