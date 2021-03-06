import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LinksServiceService } from '../links-service.service';
//import { RequestOptions } from '@angular/common/http';
//import { RequestMethod } from '@angular/common/http';


@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  
  apikey = 'QBz1LovHvGVgZSyVRPCopquJR';
  apiSecretKey = 'Hsn80lHNgpsKXKvKnCojn1JJ29GuHXMVmo3CVpJLXjEFn97jKB';
  bearer = '';
  tweetText = '';
  id: string;
  tweetURL: string;
  title = 'View Tweet';

  constructor(private http: HttpClient, private linkService: LinksServiceService) { }

  ngOnInit() {
    
      //call local server to get token
      var headers = new Headers();
      headers.append('Content-Type', 'application/X-www-form-urlencoded');
      this.http.get('https://homework4-bdagg.herokuapp.com/tweets').subscribe((res) => {
        console.log(res);
        
         var tweets = res;
         var size = 0;
         for (var key in res) {
           size++;
         }
        
          var numTweets = size
          
          //select random tweet
          let rand = Math.floor(Math.random() * ((numTweets - 1) - 0 + 1)) + 0;
          let randTweet = tweets[rand];
          
          //get year of tweet
          let date = randTweet['created_at'];
          let year = date.substring(date.length - 4, date.length);
          
          //get tweet id
          let id = randTweet['id_str'];
          this.tweetURL = 'https://twitter.com/statuses/' + id;
          console.log('id = ' + id);
          
          this.tweetText = '"' + randTweet['full_text'].replace('RT','') + '" - Donald Trump, ' + year;
          console.log(this.tweetText);
           
          
        });
      
    }
}
  
  


