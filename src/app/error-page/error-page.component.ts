import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  template: `
    <p>
    404 Not Found!
    </p>
  `,
  styles: []
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
