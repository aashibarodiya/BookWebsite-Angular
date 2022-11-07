import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[show]'
})
export class ShowDirective implements OnInit {

 
  private _show: any = true;
  public get show(): any {
    return this._show;
  }

  @Input()
  public set show(value: any) {
    this._show = value;
    this.update();
  }
  constructor(private el: ElementRef) { }


  ngOnInit(): void {
    this.update(); 
  }


  private update() {
    console.log(this.el.nativeElement);
    console.log('show', this.show);
    if (this.show) {
      this.el.nativeElement.style.display = "block";
    } else {
      this.el.nativeElement.style.display = "none";

    }
  }
}
