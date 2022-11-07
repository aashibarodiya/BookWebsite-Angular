import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-range',
  template: `
    <div class='row'>
    <button class="btn btn-dark col col-4" 
          (click)='changeValue(-delta)'
          [disabled]='value<=min'
          >
        <i class="fa-solid fa-chevron-down"></i>
    </button>
    <span class='col col-4'>{{value}}</span>
    <button class="btn btn-dark col col-4" 
            (click)='changeValue(delta)'
            [disabled]='value>=max'
            >
      <i class="fa-solid fa-chevron-up"></i>
    </button>
    </div>
  `,
  styles: [
    `
    div{ 
      width:150px;
      text-align:center;
      font-size:1.25em; 
    }
    
    `
  ]
})
export class AppRangeComponent implements OnInit {

  @Input() value: number=0;

  @Output() valueChange= new EventEmitter<number>();
  
  
  changeValue(factor:number){
    var info:any={
      oldValue:this.value,
      direction: this.delta >0 ?"up":"down",
      newValue:0
    };
    
    this.value+= factor;
    
    this.value = Math.min(this.value, this.max);
    this.value = Math.max(this.value,this.min);
    
    info.newValue=this.value;
    console.log('this.change in app-range',this.change);
    
    if(info.newValue!==info.oldValue){
      this.change.emit(info);
      this.valueChange.emit(this.value);
    }
    
    
  }
  
  @Output() change=new EventEmitter<any>();
    @Input() min:number=0; 
    @Input() max:number=10;
    @Input() delta:number=1;
  constructor() { }

  ngOnInit(): void {
  }

}
