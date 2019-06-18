import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';        // httpclient for sending http request
import { NavController } from '@ionic/angular';
import { nodeChildrenAsMap } from '@angular/router/src/utils/tree';


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
  webpage: string;
  picture: string;

  ngOnInit(): void {
    const getUrl = 'http://227e8cfe.ngrok.io/api/data/F438F17F64D9';      // change the request URL you want here.
    this.http.get(getUrl).subscribe((response) => {          // get request syntax. use post, put, delete, etc. for other requests
    console.log(response);
    this.dataA = response;
    this.name = this.dataA.name;                              // retrieve the data from the server
    this.description = this.dataA.description;
    this.address = this.dataA.address;
    this.phone = this.dataA.phone;
    this.webpage = this.dataA.webpage;
    this.picture = this.dataA.picture;

    document.getElementById('frontpage').setAttribute('href', this.webpage);      // change atribute of the html tag
    document.getElementById('picture').setAttribute('src', this.picture);
  }
);
}
}
