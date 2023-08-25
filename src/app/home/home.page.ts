import { Component, OnInit } from '@angular/core'; 
import { Storage } from '@ionic/storage-angular' //importing the storage 
import { NavController } from '@ionic/angular'; //importing the NavController


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  myUser='';
  user ='';
  hidden=true;
  stories:any[]=[];
  constructor(private storage: Storage, private navCtrl: NavController) {}

  ngOnInit(){

  }
   openInfo(){
    this.navCtrl.navigateForward('/info-page'); //using the NavController to move into the next page
   } 
    
    async ionViewDidEnter(){
      await this.storage.create();  //Creating a space to store the name of the user
    }
async saveUser(){ //A function is used to save the name instead of instantly putting what the user typing into the storage space
      await this.storage.set('user',this.myUser) //Giving the storage space an id key and filling it with what the user puts into myUser which is parseed back by ngModel
      this.user = await this.storage.get('user');
      this.hidden=false; //Just changing the buttons to move to the next page to be seen
    }

    
  
}
