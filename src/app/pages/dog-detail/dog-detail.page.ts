import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/domain/home/dog';
import { ActivatedRoute } from '@angular/router';
import { DogService } from 'src/services/dogService';
import { isNullOrUndefined } from 'util';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/services/userService';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.page.html',
  styleUrls: ['./dog-detail.page.scss'],
})
export class DogDetailPage implements OnInit {
  isEdit: boolean;
  dog: Dog;
  form : FormGroup;


  constructor(private statusBar: StatusBar, private navigation: NavController, private route: ActivatedRoute, dogService: DogService, private userService: UserService) {
    this.statusBar.backgroundColorByHexString('#2E5EAA');
    let id = this.route.snapshot.paramMap.get("id");
    if(isNullOrUndefined(id)){
      this.dog = new Dog();
      this.isEdit = false;
    }
    else{
      this.dog = dogService.getDogs(parseInt(id));
      if(userService.user.id == this.dog.ownerId){
        this.isEdit = true;
      }
      else{
        this.isEdit = false;
      }
    }
    this.form = new FormGroup({
      dogName: new FormControl(this.dog.name, Validators.required),
      breed: new FormControl(this.dog.breed, Validators.required),
      disappearanceDate: new FormControl(this.dog.disappearanceDate, Validators.required),
      local: new FormControl(this.dog.streetLost, Validators.required),
      name: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
    });
   }

  ngOnInit() {
    
  }

  onSaveClicked(){
    
  }

  goBack(){
    this.navigation.goBack()
  }

}
