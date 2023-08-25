import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation'; //importing the Geolocator
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  coordinates: any = "";
lat: string = "";
long: String = "";

  constructor(private natCtrl:NavController) { }
  //A function to get the gps of the user and output it onto the screen
  async getGPS() {
    this.coordinates = await Geolocation.getCurrentPosition();
    this.lat = this.coordinates.coords.latitude;
    this.long = this.coordinates.coords.longitude;
    }

    back(){
      this.natCtrl.navigateBack('/info-page');
    }
  ngOnInit() {
  }

}

