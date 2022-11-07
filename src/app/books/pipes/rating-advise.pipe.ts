import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingAdvise'
})
export class RatingAdvisePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    value= Math.floor(parseFloat(value)*2); //1-10

    var advises=[
      "", //0 
      "", // 1-->0.5

      "Terrible. Don't waste your time", //1
      "Waste of time.", //1.5
      "Bad. Bad. Bad. Don't go for it",//2
      "You may read, if you have nothing to do",//2.5
      "Average. You may read it once", //3
      "Time Pass. You will not regret reading it", //3.5
      "Good book. Do read it", //4.0
      "Great Book. Must read it", //4.5
      "Make sure your read it at least once" //5
    ]



    return advises[value];
  }

}
