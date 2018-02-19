import { TestBed, inject } from '@angular/core/testing';

import { LinksServiceService } from './links-service.service';

describe('LinksServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinksServiceService]
    });
  });

  it('should be created', inject([LinksServiceService], (service: LinksServiceService) => {
    expect(service).toBeTruthy();
  }));
});
