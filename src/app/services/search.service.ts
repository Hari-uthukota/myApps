import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiRoot: string = "https://itunes.apple.com/search";
  results: Object[];
  loading: boolean;
  constructor(private http: HttpClient) {
    this.results = [];
    this.loading = false;
  }
  search(term: string) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiURL)
        .toPromise()
        .then(res => {
          this.results = [res]; 
          console.log(this.results[0]);
          resolve();
        },
          msg => {
            reject(msg);
          }
        );
    });
    return promise;
  }

}

