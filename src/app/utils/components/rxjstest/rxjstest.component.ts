import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, take } from 'rxjs';

@Component({
  //  selector: 'app-rxjstest',  //not needed if this component is loaded using routes
  templateUrl: './rxjstest.component.html',
  styleUrls: ['./rxjstest.component.css']
})
export class RxjstestComponent implements OnInit {

  constructor() { }

  obs=interval(1000);

  value?:number;
  subscription:any;

  handleSubscribe(){
    console.log('subscribing');
    this.subscription=this.obs.subscribe(v=>this.value=v);
  }

  handleUnsubscribe(){
    console.log('unsubscribing');
    this.subscription.unsubscribe();
    console.log(this.obs);
  }

  ngOnInit(): void {
    this.obs=this.obs.pipe(
      take(5),
      map(v=>v*10)
    );
  }

}
