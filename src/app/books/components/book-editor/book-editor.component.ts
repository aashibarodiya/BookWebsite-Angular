import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/services/book';

@Component({
  selector: 'book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.css']
})
export class BookEditorComponent implements OnInit {

  @Input() book?:Book;
  @Output() bookChange=new EventEmitter<Book>();

  dead=false;

  @Output() save=new EventEmitter<Book>();
  constructor() { }

  ngOnInit(): void {
  }
  
  handleSave(){
    if(this.book!.tags)
    this.book!.tagList=this.book!.tags.split(',');

    //this.author!.biography=`Biography of ${this.author!.name}. A great and an interesting author. you must read few books by this author and you may enjoy it`;

    this.bookChange.emit(this.book);
    this.save.emit(this.book);
  }


}
