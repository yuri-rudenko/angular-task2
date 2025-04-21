import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private http = inject(HttpClient);

  getAll(breed: string | undefined, limit: number = 10): Observable<any> {
    console.log(`https://api.thecatapi.com/v1/images/search?${breed ? `breed_ids=${breed}` : ''}&limit=${limit}`);
    return this.http.get(`https://api.thecatapi.com/v1/images/search?${breed ? `breed_ids=${breed}` : ''}&limit=${limit}`);
  }

}
