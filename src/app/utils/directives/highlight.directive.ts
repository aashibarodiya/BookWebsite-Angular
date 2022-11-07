import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit{


  @Input("highlight") highlight:string="lightyellow";
  @Input() bold:boolean=false;

  constructor( private el:ElementRef  ) { 
    

  }
  ngOnInit(): void {
    if(!this.highlight)
      this.highlight='lightyellow';
    this.el.nativeElement.style.backgroundColor=this.highlight;
    if(this.bold) 
      this.el.nativeElement.style.fontWeight='bold';
  }

}
