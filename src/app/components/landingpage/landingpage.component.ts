import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(public router: Router,
    public route: ActivatedRoute) { }

  ngOnInit() {
  }


  changepage(id){
    localStorage.setItem('id', id);
    this.router.navigate(['/booking']);
  }

}
