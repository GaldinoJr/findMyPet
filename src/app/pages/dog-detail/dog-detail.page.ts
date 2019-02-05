import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/domain/home/dog';
import { ActivatedRoute } from '@angular/router';
import { DogService } from 'src/services/dogService';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.page.html',
  styleUrls: ['./dog-detail.page.scss'],
})
export class DogDetailPage implements OnInit {
  dog: Dog;

  constructor(private route: ActivatedRoute, dogService: DogService) {
    // let id = this.route.snapshot.paramMap.get("id");
    // this.dog = dogService.getDogs(parseInt(id));
    // window.alert(this.dog.name)
   }

  ngOnInit() {
    
  }

}
