import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  @Input() done:any;
  @Input() message:string="loading...";
  @Input() image:string='/assets/images/loading.gif';

  ngOnInit(): void {
  }

}
