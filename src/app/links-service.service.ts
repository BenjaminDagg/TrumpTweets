import { Injectable } from '@angular/core';

@Injectable()
export class LinksServiceService {
  
  tweetURL: string;
  picURL: string;

  constructor() {
  
  }
  
  public setTweetURL(url: string) {
    this.tweetURL = url;
  }
  
  public setPicURL(url: string) {
    this.picURL = url;
  }
  
  getTweetURL(): string {
    return this.tweetURL;
  }
  
  getPicURL(): string {
    return this.picURL;
  }

}
