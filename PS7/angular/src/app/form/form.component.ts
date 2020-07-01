import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title = 'hhtpClient';
  constructor(private songsService: SongsService, private form: FormBuilder) {
    this.allSongs = {
      song: '',
      artist: ''
    };
  }
  song: string;


  returned: JSON[];
  // Use FormBuilder service as a quick way to set up a form group
  // needs FormBuilder service injected
  songsFormGroup = this.form.group({
    countryControl: ['us', Validators.required],
    subform: this.form.group({
      detail: ['']
    })
  });
  // tslint:disable-next-line:typedef
  getTopSong() {
    this.songsService.getSongsByFormGroup(this.songsFormGroup).subscribe(
      response => {
        this.songsService = response['main'];
        this.AllSongs = {
          song: response['track_list'][0]['track']['track_name'],
          artist: response['track_list'][0]['artist']['artist_name']
        };
      }
    );
  }
    //   {
    //     song: response['track_list'][1]['track']['track_name'],
    //     artist: response['track_list'][1]['artist']['artist_name']
    //   },
    //   {
    //     song: response['track_list'][3]['track']['track_name'],
    //     artist: response['track_list'][3]['artist']['artist_name']
    //   }
    // // ];

