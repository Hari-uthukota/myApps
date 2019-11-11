import { Component, OnInit } from '@angular/core';
import { SongsQueue } from '../model/songsQueue.model';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styles: []
})
export class MusicPlayerComponent implements OnInit {
  songsQueue: SongsQueue[] = [
    { id: 1, songName: 'Let me Love you', artist: 'Justin Bieber', songLength: 0.59, albumArt: 'https://picsum.photos/300/350?random=1' },
    { id: 2, songName: 'Senorita', artist: 'Cameli', songLength: 1.16, albumArt: 'https://picsum.photos/300/350?random=2' },
    { id: 3, songName: 'Cheap thrills', artist: 'Sia', songLength: 1.02, albumArt: 'https://picsum.photos/300/350?random=3' },
    { id: 4, songName: 'Lose you to love', artist: 'Selena Gomez', songLength: 0.54, albumArt: 'https://picsum.photos/300/350?random=4' },
    { id: 5, songName: 'Beat it', artist: 'Michel Jackson', songLength: 1.54, albumArt: 'https://picsum.photos/300/350?random=5' },
    { id: 6, songName: 'Morning ', artist: 'Taylor', songLength: 2.14, albumArt: 'https://picsum.photos/300/350?random=6' },
    { id: 7, songName: 'Die a little bit', artist: 'Ms.banks', songLength: 1.24, albumArt: 'https://picsum.photos/300/350?random=7' },
    { id: 8, songName: 'Sabotage', artist: 'Chika', songLength: 1.32, albumArt: 'https://picsum.photos/300/350?random=8' },
    { id: 9, songName: 'Sugar honey iced tea', artist: 'Princess Nokia', songLength: 1.34, albumArt: 'https://picsum.photos/300/350?random=9' },
    { id: 10, songName: 'Highwomen', artist: 'highwomen', songLength: 1.14, albumArt: 'https://picsum.photos/300/350?random=10' },
  ];

  currentlyPlaying: any;
  shufflePlay: boolean = false;
  repeatPlay: boolean = false;
  active: string = "";
  isActive: boolean = false;
  constructor() { }

  ngOnInit() {
    this.currentlyPlaying = this.songsQueue[0];
    this.autoPlayNextSong(this.currentlyPlaying.songLength);
  }

  playNpause() {

  }
  forward() {
    if (this.shufflePlay) {
      let ranNum = this.getRandomInt(1, this.songsQueue.length);
      this.currentlyPlaying = this.songsQueue[ranNum];
      this.autoPlayNextSong(this.currentlyPlaying.songLength);
    } else {
      let currentSongIndex = this.songsQueue.indexOf(this.currentlyPlaying);
      this.currentlyPlaying = this.songsQueue[currentSongIndex + 1];
      this.autoPlayNextSong(this.currentlyPlaying.songLength);

    }
  }
  backward() {
    if (this.shufflePlay) {
      let ranNum = this.getRandomInt(1, this.songsQueue.length);
      this.currentlyPlaying = this.songsQueue[ranNum];
      this.autoPlayNextSong(this.currentlyPlaying.songLength);
    } else {
      let currentSongIndex = this.songsQueue.indexOf(this.currentlyPlaying);
      this.currentlyPlaying = this.songsQueue[currentSongIndex - 1];
      this.autoPlayNextSong(this.currentlyPlaying.songLength);
    }
  }
  shuffle() {
    this.shufflePlay = !this.shufflePlay;
  }
  repeat() {
    this.repeatPlay = !this.repeatPlay;

  }


  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  autoPlayNextSong(time) {
    time = time * 60000;
    if (!this.repeatPlay) {

      setInterval(() => this.forward(), time);
    }
  }

}

