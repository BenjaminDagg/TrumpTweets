import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LinksServiceService } from '../links-service.service';

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
  title = 'View Image';

  constructor(private http: HttpClient ,private linkService: LinksServiceService) { }
  

  ngOnInit() {
    this.getImage();
  }
  
  
  
  // get array image results from getty api
  getImage() {
    // call getty images api and get list of images
    this.http.get('https://homework4-bdagg.herokuapp.com/trump')
      .subscribe(data => {
      
      //console.log(data);
        
      //parse list of images to get a randomly selected image
      var images = data['images'];
      var size = images.length;  
      let randImg = Math.floor(Math.random() * ((size - 1) - 0 + 1)) + 0;
      let img = images[randImg];
      
      //set image source to random image
      let url = img['display_sizes'][0]['uri'];
      this.url = url;
        
      //send url to links service
      console.log('pic url = ' + this.url);
      this.linkService.setPicURL(url);
         
      //console.log('size = ' + size);
    });
  }

}


