import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FriendrestProvider } from '../providers/friendrest/friendrest';
import { HttpClientModule } from '@angular/common/http';
import { FrienddetailPage } from '../pages/frienddetail/frienddetail';
import { FriendlistPage } from '../pages/friendistl/friendistl';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FrienddetailPage,
    FriendlistPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FriendlistPage,
    FrienddetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FriendrestProvider
  ]
})
export class AppModule {}