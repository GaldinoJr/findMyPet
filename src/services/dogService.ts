import { Injectable } from '@angular/core';
import { Dog } from 'src/domain/dog/dog';

@Injectable()
export class DogService {


  public dogs: Dog[];

  constructor() { 

  }

  setDogs(dogs: Dog[]){
      this.dogs = dogs;
  }

  getDogs(id): Dog {
    return this.dogs.find(dog => dog.id === id);
  }

}