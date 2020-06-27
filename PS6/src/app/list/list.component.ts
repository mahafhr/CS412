import { Component, OnInit } from '@angular/core';
import {TRACKS} from '../data/tracksMock';
import {TRACK} from '../data/track';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title = 'Mock of top 3 songs worldwide';
  tracks: TRACK[] = TRACKS;
  selectedTrack: TRACK;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  ShowArtist(song: string) {
    this.selectedTrack = this.tracks.find(name => name.song === song);

  }
}
