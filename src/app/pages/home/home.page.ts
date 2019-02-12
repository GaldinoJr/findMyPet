import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MockHelper } from 'src/helpers/mockHelper';
import { DogResponseBody } from 'src/pageModels/dog/dogResponseBody';
import { Dog } from 'src/pageModels/dog/dog';
import { NavController } from '@ionic/angular';
import { DogService } from 'src/services/dogService';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  dogResponseBody: DogResponseBody;
  dogs: Array<Dog>
  mockHelper = new MockHelper();

  constructor(private statusBar: StatusBar, private navigation: NavController, private http: Http, private dogService: DogService){
    this.statusBar.backgroundColorByHexString('#2E5EAA');
  }

  ngOnInit(){
      this.mockHelper.getDogs(this.http).subscribe(data =>{
          this.dogResponseBody = data.json() as DogResponseBody
          this.dogs = this.dogResponseBody.dogs
          this.dogService.setDogs(this.dogs);
      })
  }

  onDogClicked( dog: Dog){ 
    // Forma correta de usar, porem, tem que guardar o valor da lista
    this.navigation.navigateForward(["/dog-detail/"+dog.id,{
    }])
  }

  onAddAnimalClicked(){
    this.navigation.navigateForward(["/dog-detail/"+-1,{
    }])
  }
}
