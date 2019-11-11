import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container">
   <app-header> </app-header>
    <app-body>
    
    
    </app-body>
    <app-footer></app-footer>
   </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
