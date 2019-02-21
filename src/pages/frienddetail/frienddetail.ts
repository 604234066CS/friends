import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FriendrestProvider } from '../../providers/friendrest/friendrest';
import { Friend } from '../../models/friendmodel';


@Component({
  selector: 'page-frienddetail',
  templateUrl: 'frienddetail.html',
})
export class FrienddetailPage {

  studentID:string;
  friend:Friend;

  constructor(public friendrest: FriendrestProvider, public navCtrl: NavController,public navParams:NavParams) {
  }


  ionViewWillEnter(){
    this.studentID=this.navParams.get("studentID");
    this.friendrest.getFriendList().subscribe(data=>{
      this.friend=data.filter(friend => friend.studentID === this.studentID)[0];
    });
  }

  ionViewDidLoad() {
    this.studentID = this.navParams.get("studentID");
    console.log(this.studentID);
  }
  gotoBack(){
    this.navCtrl.pop();
  }

}
