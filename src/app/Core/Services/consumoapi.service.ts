import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {

  constructor(private HttpClient : HttpClient) {

   }
   getCEP(cep){
     return this.HttpClient.get(`https://viacep.com.br/ws/${cep}/json/`)
   }
}
