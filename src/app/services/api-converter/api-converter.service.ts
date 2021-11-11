
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




interface InterfaceModedas {
  ARS: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  },
  USD: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  }
  BTC: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  }
  EUR: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  }

}

@Injectable({
  providedIn: 'root'
})

export class ApiConverterService {

  constructor(private http: HttpClient) { }

  findAllMoedas() {
    return this.http.get<InterfaceModedas>(`https://economia.awesomeapi.com.br/json/all`);
  }
}
