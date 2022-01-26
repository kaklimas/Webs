import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getDefaultSettings } from 'http2';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public httpClient:HttpClient) {}

}
