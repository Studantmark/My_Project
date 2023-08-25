import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import { Storage } from '@ionic/storage-angular'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.page.html',
  styleUrls: ['./contact-page.page.scss'],
})
export class ContactPagePage implements OnInit {

  constructor(private dataService: JsonService, private storage: Storage, private navCtrl: NavController) { }
  contactNote="";
  connote="";
  info:any =[];
  ngOnInit() {
  
  
  }
  //creating storage to put the note the user wants
  async ionViewDidEnter(){
    await this.storage.create();
    this.connote=await this.storage.get('contactNote');
  }
// Saving the note so its there when the user comes back
  async saveNote(){
    await this.storage.set('contactNote',this.contactNote)
    this.connote = await this.storage.get('contactNote');
    
  }

  
    
  //Moves back to the info page
  back(){
    this.navCtrl.navigateBack('/info-page');
  }

}
