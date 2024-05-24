import { Component } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { iCars } from '../../models/iCars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // Create an empty array to store the cars
  carsArray: iCars[] = [];

  // Inject the CarsService
  constructor(private carsService: CarsService) {}

  // Get the cars array from the service
  async ngOnInit() {
    await this.carsService.getFromJson();
    this.carsArray = this.carsService.getCarsArray();
  }
}
