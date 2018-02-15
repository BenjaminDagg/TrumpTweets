import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-ghetty-images',
  templateUrl: './ghetty-images.component.html',
  styleUrls: ['./ghetty-images.component.css']
})
export class GhettyImagesComponent implements OnInit {
  
  // getty api keys
  gettyTestKey = 'zwu3wcau5nvnbce2ajfzfpma';
  getTestSecretKey = 'vZVgUr7W5UBEtzQ3SyzVKE3AuRfRvN6Swcp8Ewjka6NAX';
  connectKey = '634j7nbv94yuukxty9d66cgb';
  connectSecretKey = 'cfGngDmVWpA7kbm6t6BVYFpYTT3GtfGKyPVVUj5TCjwpk';
  
  // HTTP header for api request inserted with key
  config = {headers: {
      'Api-Key': this.gettyTestKey,
    }
  };
  
  //holds the target image url
  url: string;

  constructor(private http: HttpClient) { }
  

  ngOnInit() {
    this.getImage();
  }
  
  
  
  // get array image results from getty api
  getImage() {
    // call getty images api and get list of images
    this.http.get('https://api.gettyimages.com/v3/search/images?fields=id,title,comp,referral_destinations&sort_order=best&phrase=trump'
      , this.config)
      .subscribe(data => {
      //parse list of images to get a randomly selected image
      var images = data['images'];
      var size = images.length;  
      let randImg = Math.floor(Math.random() * ((size - 1) - 0 + 1)) + 0;
      let img = images[randImg];
      
      //set image source to random image
      let url = img['display_sizes'][0]['uri'];
      this.url = url;
         
      console.log('size = ' + size);
    });
  }

}


