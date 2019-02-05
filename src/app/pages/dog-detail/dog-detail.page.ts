import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/domain/home/dog';
import { ActivatedRoute } from '@angular/router';
import { DogService } from 'src/services/dogService';
import { isNullOrUndefined } from 'util';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.page.html',
  styleUrls: ['./dog-detail.page.scss'],
})
export class DogDetailPage implements OnInit {
  dog: Dog = new Dog;
  form = new FormGroup({
    breed: new FormControl(this.dog.breed, Validators.required),
    date: new FormControl(this.dog.daysGone, Validators.required),
    local: new FormControl(this.dog.streetLost, Validators.required),
    name: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute, dogService: DogService) {
    let id = this.route.snapshot.paramMap.get("id");
    if(isNullOrUndefined(id)){
      
    }
    else{
      this.dog = dogService.getDogs(parseInt(id));
      
    }
    
   }

  ngOnInit() {
    
  }

  onSaveClicked(){
    
  }

}
