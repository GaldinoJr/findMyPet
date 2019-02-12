import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/pageModels/dog/dog';
import { ActivatedRoute } from '@angular/router';
import { DogService } from 'src/services/dogService';
import { isNullOrUndefined } from 'util';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/services/userService';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { state } from './stateScreen';
import { MockHelper } from 'src/helpers/mockHelper';
import { Http } from '@angular/http';
import { Owner } from 'src/pageModels/owner/owner';


@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.page.html',
  styleUrls: ['./dog-detail.page.scss'],
})

export class DogDetailPage implements OnInit {
  title = "";
  state: number;
  dog = new Dog();
  form : FormGroup;
  mockHelper = new MockHelper();
  owner = new Owner();

  constructor(private statusBar: StatusBar, private navigation: NavController, 
    private route: ActivatedRoute, private dogService: DogService, private userService: UserService,
    private http: Http) {
    this.statusBar.backgroundColorByHexString('#2E5EAA');
    let sId = this.route.snapshot.paramMap.get("id");
    let dogId = parseInt(sId);
    let userId = userService.user.id;

    if(dogId === -1){
      this.initializeScreen();
    }
    else{
      this.loadScreen(dogId, userId);
    }
  }

  loadScreen(dogId: number, userId: number){
    this.dog = this.dogService.getDogs(dogId);
    if(userId == this.dog.ownerId){
      this.state = state.edit;
      this.title = "Editar"
    }
    else{
      this.state = state.view;
    }
    
    this.loadOwnerData(userId);
  }

  loadOwnerData(userId: number){
    this.mockHelper.getUser(this.http, userId).subscribe(data=>{
        this.owner = data.json() as Owner;
        this.form.patchValue({name: this.owner.name});
        this.form.patchValue({phoneNumber: this.owner.contact_number});
    })
  }

  initializeScreen(){
    this.state = state.new;
    this.title = "Incluir";
    this.dog.imgUrl = "/assets/img/placeholder_picture.svg";
  }

  ngOnInit() {
    this.form = new FormGroup({
      breed: new FormControl(this.dog.breed, Validators.required),
      disappearanceDate: new FormControl(new Date(this.dog.disappearanceDate).toISOString(), Validators.required),
      local: new FormControl(this.dog.streetLost, Validators.required),
      name: new FormControl(this.owner.name, Validators.required),
      phoneNumber: new FormControl(this.owner.contact_number, Validators.required),
    });
  }

  onSaveClicked(){
    
  }

  goBack(){
    this.navigation.goBack()
  }

}
