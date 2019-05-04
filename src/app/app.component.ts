import { Component} from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {

  constructor() {};

  title = 'FetchingDevices'; 
  customers = ["Jon Doe", 'Jack Daniels', 'Nora Roberts']
  installations = of();
  subscribeCustomer = {};
  devices = [
    {installatinId: 'Poznań', devicesId: [342, 333, 612]},
    {installatinId: 'Jelenia Góra', devicesId: [3342, 3433, 5612]},
    {installatinId: 'Lusowo', devicesId: [103, 56, 934, 384]},
    {installatinId: 'Komorowo', devicesId: [13, 356, 954, 3184]},
    {installatinId: 'Warszawa', devicesId: [13, 5, 93, 7384]},
    {installatinId: 'Brzeg', devicesId: [131, 3526, 9564, 34]},
    {installatinId: 'Wrocław', devicesId: [238, 241, 823, 273]}
]

  devicesItems = [];
  installationItems = [];


  fetchDevices(installationId) {

    for (let i=0; i < this.devices.length; i++) {
      if (this.devices[i].installatinId === installationId) {
        this.devicesItems[i] = this.devices[i].devicesId;
        this.installationItems[i] = this.devices[i].installatinId;
      }
    }
  }
  onChange(customer) {

  this.devicesItems = [];
  this.installationItems = [];
  if (this.customers[0] === customer) {this.installations = of('Poznań', 'Lusowo', 'Wrocław');};
  if (this.customers[1] === customer) {this.installations = of('Warszawa', 'Wrocław', 'Jelenia Góra');};
  if (this.customers[2] === customer) {this.installations = of('Poznań', 'Komorowo', 'Brzeg', 'Lusowo');}

  this.subscribeCustomer = this.installations.subscribe(
    (instId: string) => {
      this.fetchDevices(instId);
    });

}

}