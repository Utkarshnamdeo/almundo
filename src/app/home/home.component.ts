import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private subscribers: any = {
    fetchDataSubscriber$: null
  };

  public hotelsList: Array<any> = [];

  public filters: any = {
    page: 1,
    limit: 100
  };

  stars: any = [
    {
      stars: [],
      title: 'Todas las estrellas',
      value: null,
      checked: true
    }
  ];

  Arr = Array;

  constructor (private _homeService: HomeService) { }

  ngOnInit() {
    this.getAllListings();
    for (let i = 5; i > 0; i--) {
      this.stars.push({
        stars: Array(i).fill(1),
        value: i,
        checked: false,
        title: null
      });
    }
  }

  public getAllListings() {
    console.log(this.filters);
    this.subscribers.fetchDataSubscriber$ = this._homeService.getAll(this.filters).subscribe((value: any) => {
      if (!value || value.error) {
        return false;
      }
      this.hotelsList = value.hotels;
    }, err => {
      console.log(err);
    });
  }
}
