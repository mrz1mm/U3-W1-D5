import { Component } from '@angular/core';
import { iCars } from '../../models/iCars';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-car-brands',
  templateUrl: './car-brands.component.html',
  styleUrl: './car-brands.component.scss',
})
export class CarBrandsComponent {
  carsArray: iCars[] = [];

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.carsArray = this.carsService.getCarsArray();
  }
}
