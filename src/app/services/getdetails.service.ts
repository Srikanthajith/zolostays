import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetdetailsService {

constructor(private http: Http) { }

getpropertydetails(propertyID) {
    if(propertyID){
        const link = 'https://prodapi.livezelo.com/pgs/details/';
        console.log(link + propertyID + '.json');
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(link + propertyID + '.json', {headers: headers})
        .map(res => res.json());
    }
}


getnearbydetails(lattitude, longitude){
  const link = 'http://prodapi.livezelo.com/centers/search-nearby-pgs-optimized';
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(link +'?latitude='+ lattitude + '&longitude= '+ longitude, {headers: headers})
  .map(res => res.json());  
}

getallPhotos(propertyID){
    if(propertyID){
        const link = 'https://prodapi.livezelo.com/v2/pgs/';
        console.log(link + propertyID + '/photos.json');
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(link + propertyID + '/photos.json', {headers: headers})
        .map(res => res.json());
    }
}


}