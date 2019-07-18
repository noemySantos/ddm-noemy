import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmeServiceService {

  URL_BASE = 'https://5d262d00eeb36400145c59b3.mockapi.io/filme'

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(this.URL_BASE);
  }

  add(filme) {
    return this.http.post(this.URL_BASE, filme);
  }

  excluir(filme){
  return this.http.delete(this.URL_BASE + filme.id)
  }
}
