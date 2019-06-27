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
  name: string[];
  description: string[];
  phone: string[];
  address: string[];
  webpage: string[];
  picture: string[];

  ngOnInit(): void {
    const getUrl = 'http://8bce845e.ngrok.io/api/data/F438F17F64D9';      // change the request URL you want here.
    this.http.get(getUrl).subscribe((response) => {          // get request syntax. use post, put, delete, etc. for other requests
      this.dataA = response;

      console.log(this.dataA);
      // BELOW ARE JUST DEMONSTRATIONS OF THE ARRAY IN DATA A
      // USE NG IN FRONTEND TO RETRIEVE THE DATA FROM DATA A
      // console.log(this.dataA[0].name);           // 2 objects having same MAC, retrieve them all
      // console.log(this.dataA[1].name);

      // this.dataA.forEach(function(store){           // use foreach so that whenever more object appears, it still can be handled
      //   // console.log(store.name);
      //   this.name.forEach(function(value){
      //     value = store.name;
      //   })
      //   this.description.forEach(function(value){
      //     value = store.description;
      //   })
      //   this.phone.forEach(function(value){
      //     value = store.phone;
      //   })
      //   this.address.forEach(function(value){
      //     value = store.address;
      //   })
      //   this.webpage.forEach(function(value){
      //     value = store.webpage;
      //   })
      //   this.picture.forEach(function(value){
      //     value = store.picture;
      //   })

      // })
      // END OF THE DEMONSTRATION

      document.getElementById('frontpage').setAttribute('href', this.webpage);      // change atribute of the html tag
      document.getElementById('picture').setAttribute('src', this.picture);
    }
  );
  }
  }