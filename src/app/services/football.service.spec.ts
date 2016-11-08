/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FootballService } from './football.service';

describe('Service: Football', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootballService]
    });
  });

  it('should ...', inject([FootballService], (service: FootballService) => {
    expect(service).toBeTruthy();
  }));
});
