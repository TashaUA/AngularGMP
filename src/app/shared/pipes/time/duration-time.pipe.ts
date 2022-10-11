import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationTime'
})
export class DurationTimePipe implements PipeTransform {

  transform(time: any): string {
    if(time > 0 && time/60 < 1) {
      return time + ' min';

    } else {
      const hours = Math.floor(time/60);
      const minutes = time - 60*hours;
      console.log(hours, minutes);
      return hours + 'h '+ minutes + 'min';
    }
  }
}
