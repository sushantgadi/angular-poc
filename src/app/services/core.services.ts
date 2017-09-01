import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CoreServices {

    private _kagaziMstUrl = "http://localhost:8080/kagazi/core/kagazi-mst";
    private _kagaziMstDtlUrl = "http://localhost:8080/kagazi/core/kagazi-mst-dtl/";

    //kagazi master end point
    constructor(private http: Http) { }
    kagaziMst() {
        return this.http.get(this._kagaziMstUrl).map((response: Response) => response.json());
    }

    //kagazi mst detail end point- fetch data using mst id
    kagaziMstDtl(id: number) {
        return this.http.get(this._kagaziMstDtlUrl+id).map((response: Response) => response.json());
    }

}