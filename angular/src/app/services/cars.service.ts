import { Injectable } from '@angular/core';
import { iCars } from '../models/iCars';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  apiUrl: string = '../../assets/json/db.json';
  carsArray: iCars[] = [];

  // Get the data from the JSON file
  constructor() {
    this.getFromJson();
  }

  async getFromJson(): Promise<void> {
    let response = await fetch(this.apiUrl);
    let data = <iCars[]>await response.json();
    this.carsArray = data;
  }

  // Return the cars array
  getCarsArray(): iCars[] {
    return this.carsArray;
  }

  // Return the car brands
  getBrand(): string[] {
    return this.carsArray.map((car) => car.brand);
  }

  // Return the car models
  getModel(model: string) {
    return this.carsArray.find((car) => car.model == model);
  }
}
