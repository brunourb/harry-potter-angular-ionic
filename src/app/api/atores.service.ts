import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AtoresModel } from './atores-model';

@Injectable({
  providedIn: 'root'
})
export class AtoresService {

  private resourceAtores = environment.base_url+'/characters'; 

  constructor(private http: HttpClient) { }

  getAtores(): Observable<AtoresModel[]>{
    return this.http.get<AtoresModel[]>(this.resourceAtores);
  }
}
