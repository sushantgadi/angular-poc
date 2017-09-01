import { Component, OnInit } from '@angular/core';
import { CoreServices } from '../../services/core.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  kagaziMst: any = [];

  constructor(private coreServices: CoreServices) { }

  ngOnInit() {
    this.coreServices.kagaziMst()
      .subscribe(
      response => {
        //case for success
        if (!response.err_ind) {
          this.kagaziMst = response.response;
        }
        //case for error
        else {
          alert('Something went wrong')
          console.log(response.err_msg)
        }
      }, error => {
        console.log('Something went wrong')
      });
  }
}


