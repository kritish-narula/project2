import { TestBed } from '@angular/core/testing';

import { ShopitemsService } from './shopitems.service';

describe('ShopitemsService', () => {
  let service: ShopitemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopitemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
