import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../store/user/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'api/users';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }
}
