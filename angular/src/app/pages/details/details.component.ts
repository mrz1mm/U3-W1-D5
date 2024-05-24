import { Component, Input } from '@angular/core';
import { iCars } from '../../models/iCars';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  // Get the carCard from the parent component
  @Input() carCard: iCars | null = null;
  // Create an empty array to store the cars
  carsArray: iCars[] = [];
  car: iCars | undefined = undefined;
  model: string = '';

  constructor(
    // ActivatedRoute is used to get the route parameters
    private route: ActivatedRoute,
    // CarsService is used to get the cars array
    private carsService: CarsService
  ) {}

  async ngOnInit() {
    await this.carsService.getFromJson();

    this.route.params.subscribe((params: any) => {
      console.log(params);
      console.log(params.model);
      console.log(params.model.slice(1));
      this.model = params.model.slice(1);

      this.car = this.carsService.getModel(this.model);
      console.log('Questo è this.car:', this.car);
      if (this.car) console.log('modelImage:', this.car.modelImage);
    });
  }
}
