import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value?: string,length:number=50,showElipses:boolean=true, ...args: unknown[]): string {
    if(!value) return "";

    if(value.length<=length) return value;
    
    var result= value.substring(0,length);
    if(showElipses)
      result+=' . . .';

    return result;
  }

}
