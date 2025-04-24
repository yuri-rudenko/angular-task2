import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private http = inject(HttpClient);

  getAll(breed: string | undefined, limit: number = 10): Observable<any> {
    console.log(`${environment.url}/images/search?${breed ? `breed_ids=${breed}` : ''}&limit=${limit}`);
    return this.http.get(`${environment.url}/images/search?${breed ? `breed_ids=${breed}` : ''}&limit=${limit}`);
  }

}
