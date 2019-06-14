import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';        // httpclient for sending http request
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  constructor(public navCtrl: NavController, private http: HttpClient) { }
  dataA: any;
  name: string;
  description: string;
  phone: string;
  address: string;
  url: string;
  image: string;
  ngOnInit(): void {
    const getUrl = 'http://4d564e6e.ngrok.io/api/beacon/5d034e8b9d27c69f446f9775';      // change the request URL you want here.
    this.http.get(getUrl).subscribe((response) => {          // get request syntax. use post, put, delete, etc. for other requests
    console.log(response);
    this.dataA = response;
    this.name = JSON.stringify(this.dataA.name);
    this.description = JSON.stringify(this.dataA.description);
    this.phone = JSON.stringify(this.dataA.phone);
    this.address = JSON.stringify(this.dataA.address);
    this.url = JSON.stringify(this.dataA.webpage);
    this.image = JSON.stringify(this.dataA.image);
  }
);
}
}
