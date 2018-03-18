import { Component, OnInit } from '@angular/core';
import { GetdetailsService } from '../../services/getdetails.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrls: ['./bookingpage.component.css']
})
export class BookingpageComponent implements OnInit {
  showSpinner: Boolean = false;
  propertydetails: any[];
  propertyamenityphotos: any[];
  propertyentrancephoto: any[];
  propertyroomphoto: any[];
  entrancephotolink: any;
  amenityphotolink: any;
  roomphotolink: any;

  selectedpg: string;

  constructor(private getdetails: GetdetailsService,
    public router: Router,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedpg = localStorage.getItem('id');
    this.getalldatas();
  }


  getalldatas(){

    this.showSpinner = true;
    this.getdetails.getpropertydetails(this.selectedpg).subscribe(data => {
      console.log('datagot')
      this.propertydetails = data.result[0];
      this.showSpinner = false;
      console.log(this.propertydetails);
    });

    this.getdetails.getallPhotos(this.selectedpg).subscribe(data => {
      console.log(data.result[0]);
      this.showSpinner = false;
      this.propertyentrancephoto = data.result[0].entrance;
      this.propertyamenityphotos = data.result[0].amenities;
      this.propertyroomphoto = data.result[0].room;
      console.log(this.propertyroomphoto);
      this.amenityphotolink = this.propertyamenityphotos[0].photo.url;
      this.entrancephotolink = this.propertyentrancephoto[0].photo.url;
      this.roomphotolink = this.propertyroomphoto[0].photo.url;
      console.log(this.entrancephotolink);
      console.log(this.roomphotolink);
    });
  }

}
