import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/services/book';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() book?:Book;
  @Input() width:number=250;
  constructor() { }

  ngOnInit(): void {
  }

}
