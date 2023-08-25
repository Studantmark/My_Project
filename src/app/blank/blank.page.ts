import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.page.html',
  styleUrls: ['./blank.page.scss'],
})
export class BlankPage implements OnInit {

  blankNote = "";
  note ="";
  constructor(private storage: Storage, private natCtrl:NavController) { }
  
  ngOnInit() {
  }

//creates the storage space and fills it with anything the user previously
  async ionViewDidEnter(){
    await this.storage.create();
    this.note=await this.storage.get('blankNote');
  }


//saves the note the user inputs
  async saveNote(){
    await this.storage.set('blankNote',this.blankNote)
    this.note = await this.storage.get('blankNote');
    
  }
  //moves back to the info page
  back(){
    this.natCtrl.navigateBack('/info-page');
  }
}
