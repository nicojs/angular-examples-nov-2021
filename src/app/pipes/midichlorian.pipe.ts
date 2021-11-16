import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'midichlorian'
})
export class MidichlorianPipe implements PipeTransform {

  transform(midichlorianCount: number | undefined, formatting?: string): string  {
    if(midichlorianCount === undefined) {
      if(formatting === 'short'){
        return `no mc`;
      } else {
        return `no midichlorians`;
      }
    }
    if(formatting === 'short') {
      return `${midichlorianCount} mc`; // kan "undefined mc" worden
    }
    return `${midichlorianCount} midichlorians`;
  }
}
