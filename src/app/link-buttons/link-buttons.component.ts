import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-link-buttons',
  templateUrl: './link-buttons.component.html',
  styleUrls: ['./link-buttons.component.css']
})
export class LinkButtonsComponent implements OnInit {
  
  @Input() url: string;
  @Input() btnText: string;

  constructor() {
    console.log('constructor called'); 
  }

  ngOnInit() {
  }
  
  gotoLink() {
    window.open(this.url);
  }

}
