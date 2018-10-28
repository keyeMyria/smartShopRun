import { Injectable } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Injectable({
  providedIn: 'root'
})
export class SozialLoginService {

  constructor(private socialAuthService: AuthService ) { }


  socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    // Facebook Login
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }

    // Google Login
    else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 
    
    return this.socialAuthService.signIn(socialPlatformProvider);
  }
}
