import { Component } from '@angular/core';
import { MyserviceService } from '../app/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private myservice: MyserviceService) { }
  title = 'angular table';
  emplist: any;

  ngOnInit() {
    //showing data by using getData method
    this.getData();
  }

  p: number = 1;
    collection: any[];

    //using myservice invoking the getapi method 
  getData() {
    this.myservice.getapi().subscribe(data => this.emplist = data.data);
  }

}
