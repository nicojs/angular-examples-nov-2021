import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { Jedi } from "../model/jedi";
import { BACKEND_URL } from "../tokens";

// function sleep(ms: number) {
//   return new Promise(res => setTimeout(res, ms));
// }

@Injectable({
  providedIn: 'root'
})
export class JediService {

  constructor(private http: HttpClient, @Inject(BACKEND_URL) private url: string) {
    console.log('new JediService created')
  }

  async getJedis(): Promise<Jedi[]> {
    const jedisAsObject = await lastValueFrom(this.http.get<Jedi[]>(`${this.url}/jedis`))
    return jedisAsObject;
    // await sleep(3000);
    // return [
    //   { name: 'Qui-Gon Jinn', midichlorian: 10000 },
    //   { name: 'Yaddle', midichlorian: 11300 },
    //   { name: 'Yoda', midichlorian: undefined },
    // ];
  }

  async addJedi(jedi: Jedi): Promise<Jedi> {
    const jediAsObject = await lastValueFrom(this.http.post<Jedi>(`${this.url}/jedis`, jedi))
    return jediAsObject;
  }

}
