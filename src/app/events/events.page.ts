import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  constructor( private dataService: JsonService, private navCtrl: NavController, private storage: Storage) { }
  events: any =[];

  //using ngOnInit to grab the data from a json link as soon as the page loads and output it to the screen
  ngOnInit() {
    this.dataService.getData().subscribe(data =>
      {
    this.events=data.events;
  });

}

back(){
  this.navCtrl.navigateBack('/info-page');
}
}
