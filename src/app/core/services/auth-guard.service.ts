import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService {

  constructor(
    private router: Router
  ) { }

  canActivate() {
    const twitchData = localStorage.getItem('twitchData');
    if (twitchData) {
      // this.router.navigate(['/']);
      return true;
    } else {
      this.router.navigate(['/twitch']);
      return false;
    }
  }

}
