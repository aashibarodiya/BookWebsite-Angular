import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/services/book';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor() { }

  @Input() book?:Book|null;

  ngOnInit(): void {
  }

}
