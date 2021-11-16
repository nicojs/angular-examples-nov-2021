import { Pipe, PipeTransform } from '@angular/core';
import { Jedi } from '../model/jedi';

let count= 0;

@Pipe({
  name: 'jediMaster',
  pure: true
})
export class JediMasterPipe implements PipeTransform {

  transform(jediName: string): string {
    console.log(`${++count} Call pipe with ${jediName}`)
    return `Master ${jediName}`;
  }
}
