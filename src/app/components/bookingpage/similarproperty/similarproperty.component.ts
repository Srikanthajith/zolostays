import { Component, OnInit, Input } from '@angular/core';
import { GetdetailsService } from '../../../services/getdetails.service';

@Component({
  selector: 'app-similarproperty',
  templateUrl: './similarproperty.component.html',
  styleUrls: ['./similarproperty.component.css']
})
export class SimilarpropertyComponent implements OnInit {

  @Input() propertydetails: any = [];
  nearbypg: any[];
  constructor(private getdetails: GetdetailsService) { }

  ngOnInit() {
    if(this.propertydetails){
      console.log(this.propertydetails.location[0], this.propertydetails.location[1]);
      if (this.propertydetails.location[0] && this.propertydetails.location[1]) {
        this.getdetails.getnearbydetails(this.propertydetails.location[1], this.propertydetails.location[0]).subscribe(data => {
          if(data.result.length){
            this.nearbypg = data.result;
            //limiting the array length;
            this.nearbypg.length = 4;
            console.log(this.nearbypg);
          }
        });
      }
    }
  }

}
