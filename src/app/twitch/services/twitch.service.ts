import { Injectable } from '@angular/core';
import * as twitch from 'twitch-js';

@Injectable()
export class TwitchService {

  private client = null;

  constructor() { }

  setClient(channels) {
    const options = this.configure(channels);
    this.client = twitch.Client(options);
    console.log(this.client);
  }

  connectClient() {
    this.client.connect();
  }


  private configure(channels) {
    const options = {
      options: {
        debug: true
      },
      connection: {
        reconnect: true,
        secure: true
      },
      channels
    };
    return options;
  }
}
