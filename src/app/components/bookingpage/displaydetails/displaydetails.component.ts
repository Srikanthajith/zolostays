import { Component, OnInit, Input  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-displaydetails',
  templateUrl: './displaydetails.component.html',
  styleUrls: ['./displaydetails.component.css']
})
export class DisplaydetailsComponent implements OnInit {

  @Input() propertydetails: any = [];
  statusselected:string;
  maplocation:any;
  totalrooms:any[];
  neighbourhood:any[];
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.statusselected = '';
    this.totalrooms = Object.keys(this.propertydetails.room).map(key => ({value: this.propertydetails.room[key]}));
    this.neighbourhood = Object.keys(this.propertydetails.neighborhood).map(key => ({value: this.propertydetails.neighborhood[key]}));
  }

  photoURL() {
   const checkt = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.884245359252!2d77.6150213!3d12.9256411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbbdeb6026ab721cb!2sZolo+Hibiscus+-+PG+in+BTM+Layout+for+Gents+in+Bangalore!5e0!3m2!1sen!2sin!4v1521360152344' ;
   return this.sanitizer.bypassSecurityTrustResourceUrl(checkt);
  }

}
