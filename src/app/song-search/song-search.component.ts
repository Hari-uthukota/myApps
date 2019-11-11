import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-song-search',
  templateUrl: './song-search.component.html',
  styles: []
})
export class SongSearchComponent implements OnInit {


  constructor(private itunes: SearchService) { }

  ngOnInit() {
  }
  doSearch(term: string) {
    this.itunes.loading = true;
    this.itunes.search(term).then(() => this.itunes.loading = false);
    console.log(this.itunes.results);
  }

}
