import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {config as API} from '../config/musixmatch';

@Injectable({
  providedIn: 'root'
})
export class SongsServiceService {
  baseURL: string = API.baseURL;
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getSongByFormGroup(form: FormGroup) {
    const country = form.value.cityControl;
    return this.http.get(API.url + 'chart.tracks.get?chart_name=top&page=1&' +
      'page_size=1&country=' + country + '&apikey=' + API.key);

  }
}


