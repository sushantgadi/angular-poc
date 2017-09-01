import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreServices } from "app/services/core.services";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  id: number;
  private sub: any;

  kagaziMstDtl: any = [];

  constructor(private route: ActivatedRoute, private coreServices: CoreServices) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });

    this.coreServices.kagaziMstDtl( this.id)
      .subscribe(
      response => {
        //case for success
        if (!response.err_ind) {
          this.kagaziMstDtl = response.response[0];
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
