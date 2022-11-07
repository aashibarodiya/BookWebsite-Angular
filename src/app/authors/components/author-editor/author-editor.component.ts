import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from 'src/app/services/author';

@Component({
  selector: 'author-editor',
  templateUrl: './author-editor.component.html',
  styleUrls: ['./author-editor.component.css']
})
export class AuthorEditorComponent implements OnInit {

  @Input() author?:Author;
  @Output() authorChange=new EventEmitter<Author>();

  dead=false;

  @Output() save=new EventEmitter<Author>();

constructor() { 
  }
  ngOnInit(): void {
  }

  handleSave(){

    if(this.author!.tags)
      this.author!.tagList=this.author!.tags.split(',');

    //this.author!.biography=`Biography of ${this.author!.name}. A great and an interesting author. you must read few books by this author and you may enjoy it`;

    this.authorChange.emit(this.author);
    this.save.emit(this.author);
  }

}
