import { Component} from '@angular/core';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { callbackify } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {

  constructor() {};

  title = 'FetchingDevices'; 
  installations = of('Poznań', 'Lusowo', 'Wrocław');
  devices = [
    {installatinId: 'Poznań', devicesId: [342, 333, 612]},
    {installatinId: 'Jelenia  Góra', devicesId: [3342, 3433, 5612]},
    {installatinId: 'Lusowo', devicesId: [103, 56, 934, 384]},
    {installatinId: 'Komorowo', devicesId: [13, 356, 954, 3184]},
    {installatinId: 'Warszawa', devicesId: [13, 5, 93, 7384]},
    {installatinId: 'Brzeg', devicesId: [131, 3526, 9564, 34]},
    {installatinId: 'Wrocław', devicesId: [238, 241, 823, 273]}
]

devicesItems = [];
installationItems = [];

  subscribeCustomer = this.installations.subscribe(
    (instId: string) => {
      this.fetchDevices(instId);
    });

  fetchDevices(installationId) {
    for (let i=0; i < this.devices.length; i++) {
      if (this.devices[i].installatinId === installationId) {
        this.devicesItems[i] = this.devices[i].devicesId;
        this.installationItems[i] = this.devices[i].installatinId;
        // console.log(this.devices[i].installatinId,'------>', this.devices[i].devicesId);
      }
    }
  }
}