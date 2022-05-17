import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIGIFService {

  urlGiphy = environment.url_giphy;
  urlKey = environment.key;

  constructor(private readonly httpCliente: HttpClient) { }

  getData(query: string){
    const url = this.urlGiphy.replace('{query}', `${query}`);
    const urlKey = url.replace('{keygif}', `${this.urlKey}`);
    return this.httpCliente.get(`${urlKey}`)
    .pipe(map((resp: any) => resp.data.map(item => item.images.downsized)));
  }

}
