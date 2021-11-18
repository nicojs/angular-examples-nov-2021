import { Inject, LOCALE_ID, Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'midichlorian'
})
export class MidichlorianPipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) private  locale: string){}

  transform(midichlorianCount: number | undefined, formatting?: string): string  {
    if(midichlorianCount === undefined) {
      if(formatting === 'short'){
        if(this.locale === 'nl-NL') {
          return 'geen mc';
        }
        return `no mc`;
      } else {
        if(this.locale === 'nl-NL') {
          return 'geen midichlorians';
        }
        return `no midichlorians`;
      }
    }
    if(formatting === 'short') {
      return `${midichlorianCount} mc`; // kan "undefined mc" worden
    }
    return `${midichlorianCount} midichlorians`;
  }
}
