import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.page.html',
  styleUrls: ['./info-page.page.scss'],
})
export class InfoPagePage implements OnInit {

  constructor(private navCtrl: NavController, private storage: Storage) { }
  name='';

  // using the NavController to move between all the pages
  openHome(){   
  this.navCtrl.navigateBack('/home');
  }
  openContact(){
    this.navCtrl.navigateForward('/contact-page');
    }
  openBlank(){
    this.navCtrl.navigateForward('/blank');
  }
  openLocation(){
    this.navCtrl.navigateForward('/location');
  }
  openEvents(){
    this.navCtrl.navigateForward('/events');
  }
  ngOnInit() {
  }
  async ionViewWillEnter(){
    await this.storage.create();
    this.name=await this.storage.get('user');
  }
}
