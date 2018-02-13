import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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


  constructor(private http: HttpClient) { }

  ngOnInit() {
    /*
    var encodedKey:string = encodeURI(this.apikey);
    var encodedSecretKey:string = encodeURI(this.apiSecretKey);
    var base64Key = encodedKey + ':' + encodedSecretKey;
    var key = btoa(base64Key);
    console.log('key = ' + key);
    
    
    var headers = {headers: {'Authorization': 'Basic ' + key, 
                             'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                             'Access-Control-Allow-Origin': '*',
                             'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                             'Access-Control-Allow-Credentials': true,
                             'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
                             }};
    this.http.post('https://api.twitter.com/oauth2/token',
    headers).subscribe(data => {
      console.log(data);
    });
    */
    
    /*
    var headers = new Headers();
    headers.append("Authorization", "Basic " + key);
    headers.append("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
    let body = '';
    let options = {
      headers: headers
    };
    this.http.get('https://api.twitter.com/1.1/statuses/user_timeline.json?count=100&screen_name=twitterapi',body,options).subscribe(data => {
    
    });
     * */
    
      //call local server to get token
      var headers = new Headers();
      headers.append('Content-Type', 'application/X-www-form-urlencoded');
      this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
        console.log(res);
        

        //call  with bearer token to get tweets
        this.http.post('http://localhost:3000/search', {headers: headers}).subscribe((data) => {
          
          //array of all tweets from users timeline
          var tweets = data.data;
          var numTweets = tweets.length;
          
          //select random tweet
          let rand = Math.floor(Math.random() * ((numTweets - 1) - 0 + 1)) + 0;
          let randTweet = tweets[rand];
          
          this.tweetText = randTweet['text'];
          
          console.log(this.tweetText);
           
          
        });
      });
    }
  }
  
  


