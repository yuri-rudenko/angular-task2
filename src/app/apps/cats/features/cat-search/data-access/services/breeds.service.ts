import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  private http = inject(HttpClient);

  getAll(): Observable<any> {
    return this.http.get(`https://api.thecatapi.com/v1/breeds`);
  }

}
