import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FriendlistPage } from '../friendistl/friendistl';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showFriendList(major:string){
    this.navCtrl.push(FriendlistPage,
      {major:major});

  }

}