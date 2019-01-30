import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MockHelper } from 'src/helpers/mockHelper';
import { DogResponseBody } from 'src/domain/home/dogResponseBody';
import { Dog } from 'src/domain/home/dog';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  dogResponseBody: DogResponseBody;
  dogs: Array<Dog>
  mockHelper = new MockHelper();
  constructor(private http: Http){

  }

  ngOnInit(){
      this.mockHelper.getDogs(this.http).subscribe(data =>{
          this.dogResponseBody = data.json() as DogResponseBody
          this.dogs = this.dogResponseBody.dogs
      })
  }

}
