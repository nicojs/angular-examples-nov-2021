import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'midichlorian'
})
export class MidichlorianPipe implements PipeTransform {

  transform(midichlorianCount: number, formatting?: string): string {
    if(formatting === 'short') {
      return `${midichlorianCount} mc`;
    }
    return `${midichlorianCount} midichlorians`;
  }
}
