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
      this.http.post('https://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
        console.log(res);
        

        //call  with bearer token to get tweets
        this.http.post('https://localhost:3000/search', {headers: headers}).subscribe((data) => {
         
          //array of all tweets from users timeline
          var tweets = data['data'];
          console.log(tweets);
          var numTweets = tweets.length;
          
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
      });
    }
  }
  
  


