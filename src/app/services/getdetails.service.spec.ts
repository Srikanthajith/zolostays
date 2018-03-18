/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetdetailsService } from './getdetails.service';

describe('Service: Getdetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetdetailsService]
    });
  });

  it('should ...', inject([GetdetailsService], (service: GetdetailsService) => {
    expect(service).toBeTruthy();
  }));
});