import {Component, EventEmitter, Injectable, Input, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { SONG } from '../';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ListComponent  {
  @Input() returned: JSON;
  songs: any;
}
