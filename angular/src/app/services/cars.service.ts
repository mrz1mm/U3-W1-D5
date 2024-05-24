import { Injectable } from '@angular/core';
import { iCars } from '../models/iCars';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  apiUrl: string = '../../assets/json/db.json';
  carsArray: iCars[] = [];

  constructor() {
    this.getFromJson();
  }

  async getFromJson(): Promise<void> {
    let response = await fetch(this.apiUrl);
    let data = <iCars[]>await response.json();
    this.carsArray = data;
  }

  getAll(): iCars[] {
    return this.carsArray;
  }

  getBrand(): string[] {
    return this.carsArray.map((car) => car.brand);
  }

  getModel(model: string) {
    return this.carsArray.find((car) => car.model == model);
  }
}
